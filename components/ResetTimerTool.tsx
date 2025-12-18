'use client';

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import type { WeekdayUtc } from "@/lib/resetSchedule";
import { formatDuration, formatUtcTimeOfDay, getNextDailyResetUtc, getNextWeeklyResetUtc } from "@/lib/resetSchedule";
import { useResetSettings } from "@/components/useResetSettings";

type LanguageCode = "en" | "vi" | "de";

const detectLanguage = (pathname?: string | null): LanguageCode => {
  if (!pathname) return "en";
  if (pathname === "/vn" || pathname.startsWith("/vn/")) return "vi";
  if (pathname === "/de" || pathname.startsWith("/de/")) return "de";
  return "en";
};

const UI_TEXT: Record<
  LanguageCode,
  {
    titleDaily: string;
    titleWeekly: string;
    timeRemaining: string;
    nextReset: string;
    showInTimeZone: string;
    utcLabel: string;
    settings: string;
    displayTimeZone: string;
    customTimeZone: string;
    apply: string;
    resetTimeUtc: string;
    weeklyDayUtc: string;
    resetDefaults: string;
    note: string;
    linksTitle: string;
    links: { label: string; href: string }[];
    timeZoneOptions: { label: string; value: string }[];
    weekdays: Record<WeekdayUtc, string>;
    invalidTimeZone: string;
  }
> = {
  en: {
    titleDaily: "Daily reset timer",
    titleWeekly: "Weekly reset timer",
    timeRemaining: "Time remaining",
    nextReset: "Next reset",
    showInTimeZone: "Show times in",
    utcLabel: "UTC",
    settings: "Timer settings",
    displayTimeZone: "Display time zone",
    customTimeZone: "Custom IANA time zone",
    apply: "Apply",
    resetTimeUtc: "Daily reset time (UTC)",
    weeklyDayUtc: "Weekly reset day (UTC)",
    resetDefaults: "Reset to defaults",
    note: "Tip: reset times can differ by server/region. If your in-game reset doesn’t match, adjust the settings.",
    linksTitle: "Use the reset window with these pages",
    links: [
      { label: "Active codes →", href: "/guides/codes" },
      { label: "Free outfits →", href: "/guides/free-outfits" },
      { label: "Latest news →", href: "/news" },
      { label: "Checklist tool →", href: "/tools/checklist" },
    ],
    timeZoneOptions: [
      { label: "Local time", value: "local" },
      { label: "UTC", value: "UTC" },
      { label: "US Eastern (New York)", value: "America/New_York" },
      { label: "US Pacific (Los Angeles)", value: "America/Los_Angeles" },
      { label: "Europe (London)", value: "Europe/London" },
      { label: "Central Europe (Berlin)", value: "Europe/Berlin" },
      { label: "Asia (Shanghai)", value: "Asia/Shanghai" },
      { label: "Japan (Tokyo)", value: "Asia/Tokyo" },
    ],
    weekdays: {
      0: "Sunday",
      1: "Monday",
      2: "Tuesday",
      3: "Wednesday",
      4: "Thursday",
      5: "Friday",
      6: "Saturday",
    },
    invalidTimeZone: "Invalid time zone. Use an IANA name like America/Chicago.",
  },
  vi: {
    titleDaily: "Timer reset hằng ngày",
    titleWeekly: "Timer reset hằng tuần",
    timeRemaining: "Còn lại",
    nextReset: "Lần reset tiếp theo",
    showInTimeZone: "Hiển thị theo múi giờ",
    utcLabel: "UTC",
    settings: "Cài đặt timer",
    displayTimeZone: "Múi giờ hiển thị",
    customTimeZone: "Múi giờ IANA tùy chọn",
    apply: "Áp dụng",
    resetTimeUtc: "Giờ reset hằng ngày (UTC)",
    weeklyDayUtc: "Ngày reset tuần (UTC)",
    resetDefaults: "Khôi phục mặc định",
    note: "Gợi ý: thời gian reset có thể khác theo server/khu vực. Nếu trong game khác, hãy chỉnh cài đặt.",
    linksTitle: "Gợi ý trang nên xem trước/sau reset",
    links: [
      { label: "Code đang hoạt động →", href: "/vn/guides/codes" },
      { label: "Đồ miễn phí →", href: "/vn/guides/free-outfits" },
      { label: "Tin mới nhất →", href: "/vn/news" },
      { label: "Checklist tool →", href: "/vn/tools/checklist" },
    ],
    timeZoneOptions: [
      { label: "Giờ máy (local)", value: "local" },
      { label: "UTC", value: "UTC" },
      { label: "US East (New York)", value: "America/New_York" },
      { label: "US West (Los Angeles)", value: "America/Los_Angeles" },
      { label: "Châu Âu (London)", value: "Europe/London" },
      { label: "Trung Âu (Berlin)", value: "Europe/Berlin" },
      { label: "Châu Á (Shanghai)", value: "Asia/Shanghai" },
      { label: "Nhật (Tokyo)", value: "Asia/Tokyo" },
    ],
    weekdays: {
      0: "Chủ nhật",
      1: "Thứ hai",
      2: "Thứ ba",
      3: "Thứ tư",
      4: "Thứ năm",
      5: "Thứ sáu",
      6: "Thứ bảy",
    },
    invalidTimeZone: "Múi giờ không hợp lệ. Hãy dùng tên IANA như America/Chicago.",
  },
  de: {
    titleDaily: "Daily-Reset Timer",
    titleWeekly: "Weekly-Reset Timer",
    timeRemaining: "Verbleibend",
    nextReset: "Nächster Reset",
    showInTimeZone: "Zeiten anzeigen in",
    utcLabel: "UTC",
    settings: "Timer-Einstellungen",
    displayTimeZone: "Anzeige-Zeitzone",
    customTimeZone: "Benutzerdefinierte IANA-Zeitzone",
    apply: "Übernehmen",
    resetTimeUtc: "Daily-Reset Zeit (UTC)",
    weeklyDayUtc: "Weekly-Reset Tag (UTC)",
    resetDefaults: "Auf Standard zurücksetzen",
    note: "Tipp: Reset-Zeiten können je nach Server/Region abweichen. Wenn es im Spiel anders ist, stell es hier um.",
    linksTitle: "Nützlich rund um den Reset",
    links: [
      { label: "Aktive Codes →", href: "/de/guides/codes" },
      { label: "Kostenlose Outfits →", href: "/de/guides/free-outfits" },
      { label: "Aktuelle News →", href: "/de/news" },
      { label: "Checklist tool →", href: "/de/tools/checklist" },
    ],
    timeZoneOptions: [
      { label: "Lokale Zeit", value: "local" },
      { label: "UTC", value: "UTC" },
      { label: "US Ost (New York)", value: "America/New_York" },
      { label: "US West (Los Angeles)", value: "America/Los_Angeles" },
      { label: "Europa (London)", value: "Europe/London" },
      { label: "Mitteleuropa (Berlin)", value: "Europe/Berlin" },
      { label: "Asien (Shanghai)", value: "Asia/Shanghai" },
      { label: "Japan (Tokyo)", value: "Asia/Tokyo" },
    ],
    weekdays: {
      0: "Sonntag",
      1: "Montag",
      2: "Dienstag",
      3: "Mittwoch",
      4: "Donnerstag",
      5: "Freitag",
      6: "Samstag",
    },
    invalidTimeZone: "Ungültige Zeitzone. Nutze einen IANA-Namen wie America/Chicago.",
  },
};

const formatDateTime = (date: Date, timeZone: string, locale: string) => {
  return new Intl.DateTimeFormat(locale, {
    timeZone,
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
};

const getLocale = (language: LanguageCode) => {
  if (language === "vi") return "vi-VN";
  if (language === "de") return "de-DE";
  return "en-US";
};

export function ResetTimerTool() {
  const pathname = usePathname();
  const language = detectLanguage(pathname);
  const locale = getLocale(language);
  const ui = UI_TEXT[language];

  const { settings, updateDailyResetTime, updateDisplayTimeZone, updateWeeklyResetWeekday, resetDefaults, localTimeZone } =
    useResetSettings();

  const [now, setNow] = useState(() => new Date());
  const [customTz, setCustomTz] = useState("");
  const [tzError, setTzError] = useState<string | null>(null);

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const displayTimeZone = settings.displayTimeZone;

  const nextDaily = useMemo(
    () => getNextDailyResetUtc(now, settings.dailyResetTimeUtc),
    [now, settings.dailyResetTimeUtc]
  );
  const nextWeekly = useMemo(
    () => getNextWeeklyResetUtc(now, settings.weeklyResetWeekdayUtc, settings.dailyResetTimeUtc),
    [now, settings.weeklyResetWeekdayUtc, settings.dailyResetTimeUtc]
  );

  const dailyRemaining = nextDaily.getTime() - now.getTime();
  const weeklyRemaining = nextWeekly.getTime() - now.getTime();

  const timeZoneOptions = useMemo(() => {
    const expanded = ui.timeZoneOptions.map((option) => {
      if (option.value !== "local") return option;
      return { label: `${option.label} (${localTimeZone})`, value: localTimeZone };
    });
    const seen = new Set<string>();
    return expanded.filter((option) => {
      if (seen.has(option.value)) return false;
      seen.add(option.value);
      return true;
    });
  }, [localTimeZone, ui.timeZoneOptions]);

  const applyCustomTimeZone = () => {
    const next = customTz.trim();
    if (!next) return;
    const ok = updateDisplayTimeZone(next);
    if (!ok) {
      setTzError(ui.invalidTimeZone);
      return;
    }
    setTzError(null);
    setCustomTz("");
  };

  const weekdayOrder: WeekdayUtc[] = [0, 1, 2, 3, 4, 5, 6];

  return (
    <div className="space-y-8">
      <div className="grid gap-4 md:grid-cols-2">
        <section className="rounded-3xl border border-slate-800/80 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60">
          <h2 className="text-xl font-bold text-slate-50">{ui.titleDaily}</h2>
          <p className="mt-3 text-sm text-slate-300">
            <span className="font-semibold text-slate-100">{ui.timeRemaining}:</span>{" "}
            <span className="font-mono text-emerald-200">{formatDuration(dailyRemaining)}</span>
          </p>
          <p className="mt-2 text-sm text-slate-300">
            <span className="font-semibold text-slate-100">{ui.nextReset}:</span>{" "}
            <span className="text-slate-100">{formatDateTime(nextDaily, displayTimeZone, locale)}</span>
          </p>
          <p className="mt-2 text-xs text-slate-400">
            {ui.utcLabel}: {formatDateTime(nextDaily, "UTC", "en-US")}
          </p>
        </section>

        <section className="rounded-3xl border border-slate-800/80 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60">
          <h2 className="text-xl font-bold text-slate-50">{ui.titleWeekly}</h2>
          <p className="mt-3 text-sm text-slate-300">
            <span className="font-semibold text-slate-100">{ui.timeRemaining}:</span>{" "}
            <span className="font-mono text-emerald-200">{formatDuration(weeklyRemaining)}</span>
          </p>
          <p className="mt-2 text-sm text-slate-300">
            <span className="font-semibold text-slate-100">{ui.nextReset}:</span>{" "}
            <span className="text-slate-100">{formatDateTime(nextWeekly, displayTimeZone, locale)}</span>
          </p>
          <p className="mt-2 text-xs text-slate-400">
            {ui.utcLabel}: {formatDateTime(nextWeekly, "UTC", "en-US")}
          </p>
        </section>
      </div>

      <p className="rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-4 text-xs leading-relaxed text-emerald-100">
        {ui.note}
      </p>

      <details className="rounded-3xl border border-slate-800/80 bg-slate-950/70 p-6 shadow-lg shadow-slate-950/60">
        <summary className="cursor-pointer text-lg font-bold text-slate-50">{ui.settings}</summary>

        <div className="mt-5 grid gap-5 md:grid-cols-2">
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-slate-100">{ui.displayTimeZone}</label>
            <select
              className="w-full rounded-xl border border-slate-700 bg-slate-900/60 px-3 py-2 text-sm text-slate-100"
              value={settings.displayTimeZone}
              onChange={(e) => {
                setTzError(null);
                updateDisplayTimeZone(e.target.value);
              }}
            >
              {timeZoneOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>

            <div className="mt-3 space-y-2">
              <label className="block text-xs font-semibold text-slate-200">{ui.customTimeZone}</label>
              <div className="flex gap-2">
                <input
                  value={customTz}
                  onChange={(e) => setCustomTz(e.target.value)}
                  placeholder="America/Chicago"
                  className="w-full rounded-xl border border-slate-700 bg-slate-900/60 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500"
                />
                <button
                  type="button"
                  onClick={applyCustomTimeZone}
                  className="shrink-0 rounded-xl border border-emerald-500/40 bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-100 hover:border-emerald-400/70 hover:text-emerald-50"
                >
                  {ui.apply}
                </button>
              </div>
              {tzError ? <p className="text-xs text-red-300">{tzError}</p> : null}
            </div>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-slate-100">{ui.resetTimeUtc}</label>
              <input
                type="time"
                step={60}
                value={formatUtcTimeOfDay(settings.dailyResetTimeUtc)}
                onChange={(e) => updateDailyResetTime(e.target.value)}
                className="w-full rounded-xl border border-slate-700 bg-slate-900/60 px-3 py-2 text-sm text-slate-100"
              />
              <p className="text-xs text-slate-400">
                {ui.showInTimeZone}: <span className="font-mono">{displayTimeZone}</span>
              </p>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-slate-100">{ui.weeklyDayUtc}</label>
              <select
                value={settings.weeklyResetWeekdayUtc}
                onChange={(e) => updateWeeklyResetWeekday(Number(e.target.value) as WeekdayUtc)}
                className="w-full rounded-xl border border-slate-700 bg-slate-900/60 px-3 py-2 text-sm text-slate-100"
              >
                {weekdayOrder.map((key) => (
                  <option key={key} value={key}>
                    {ui.weekdays[key]}
                  </option>
                ))}
              </select>
            </div>

            <button
              type="button"
              onClick={resetDefaults}
              className="w-full rounded-xl border border-slate-700 bg-slate-900/60 px-4 py-2 text-sm font-semibold text-slate-100 hover:border-emerald-500/40 hover:text-emerald-100"
            >
              {ui.resetDefaults}
            </button>
          </div>
        </div>
      </details>

      <section className="rounded-3xl border border-slate-800/80 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60">
        <h2 className="text-lg font-bold text-slate-50">{ui.linksTitle}</h2>
        <div className="mt-4 flex flex-wrap gap-2 text-sm">
          {ui.links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full border border-slate-700 bg-slate-900/60 px-4 py-2 font-semibold text-slate-200 hover:border-emerald-400/60 hover:text-emerald-100"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
