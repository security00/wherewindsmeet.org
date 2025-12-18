'use client';

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import type { WeekdayUtc } from "@/lib/resetSchedule";
import {
  formatDuration,
  formatUtcTimeOfDay,
  getDailyCycleKeyUtc,
  getNextDailyResetUtc,
  getNextWeeklyResetUtc,
  getWeeklyCycleKeyUtc,
} from "@/lib/resetSchedule";
import { useResetSettings } from "@/components/useResetSettings";

type LanguageCode = "en" | "vi" | "de";

const detectLanguage = (pathname?: string | null): LanguageCode => {
  if (!pathname) return "en";
  if (pathname === "/vn" || pathname.startsWith("/vn/")) return "vi";
  if (pathname === "/de" || pathname.startsWith("/de/")) return "de";
  return "en";
};

type ChecklistItem = {
  id: string;
  text: string;
  checked: boolean;
  createdAt: number;
};

type ChecklistData = {
  version: 1;
  daily: ChecklistItem[];
  weekly: ChecklistItem[];
  dailyCycleKeyUtc: string;
  weeklyCycleKeyUtc: string;
};

const STORAGE_KEY = "wwm-tools-checklist-v1";

const newId = () => {
  try {
    return crypto.randomUUID();
  } catch {
    return `id_${Math.random().toString(16).slice(2)}_${Date.now()}`;
  }
};

const defaultTemplate = (language: LanguageCode): { daily: string[]; weekly: string[] } => {
  if (language === "de") {
    return {
      daily: [
        "Login-/Tagesbelohnungen checken (falls vorhanden)",
        "Stamina/Energie ausgeben (falls dein Server das nutzt)",
        "Event-Tab prüfen (zeitlich begrenzt)",
        "Kurzer Route-Plan mit der interaktiven Karte",
      ],
      weekly: [
        "Weekly-Caps / Season-Punkte prüfen (falls vorhanden)",
        "Weekly-limitiertes Material kaufen (falls vorhanden)",
        "Boss-/Co-op Ziele planen",
        "Patch Notes / Meta-Änderungen checken",
      ],
    };
  }
  if (language === "vi") {
    return {
      daily: [
        "Nhận thưởng đăng nhập/ngày (nếu có)",
        "Dùng stamina/energy (nếu server có)",
        "Kiểm tra tab sự kiện (giới hạn thời gian)",
        "Lên tuyến nhanh bằng bản đồ tương tác",
      ],
      weekly: [
        "Kiểm tra weekly cap / season points (nếu có)",
        "Mua vật liệu giới hạn tuần (nếu có)",
        "Lên kế hoạch boss/co-op",
        "Xem patch notes / thay đổi meta",
      ],
    };
  }
  return {
    daily: [
      "Check login / daily rewards (if available)",
      "Spend stamina / energy (if your server uses it)",
      "Check event tab (limited-time tasks)",
      "Plan a quick route with the interactive map",
    ],
    weekly: [
      "Check weekly caps / season points (if applicable)",
      "Buy weekly-limited materials (if applicable)",
      "Plan boss runs / co-op goals",
      "Review patch notes / meta changes",
    ],
  };
};

const UI_TEXT: Record<
  LanguageCode,
  {
    dailyTitle: string;
    weeklyTitle: string;
    add: string;
    placeholder: string;
    resetChecks: string;
    resetAll: string;
    nextDaily: string;
    nextWeekly: string;
    timeRemaining: string;
    settings: string;
    resetTimeUtc: string;
    weeklyDayUtc: string;
    linksTitle: string;
    links: { label: string; href: string }[];
    weekdays: Record<WeekdayUtc, string>;
  }
> = {
  en: {
    dailyTitle: "Daily checklist",
    weeklyTitle: "Weekly checklist",
    add: "Add",
    placeholder: "Add a custom item…",
    resetChecks: "Clear checks",
    resetAll: "Reset template",
    nextDaily: "Next daily reset",
    nextWeekly: "Next weekly reset",
    timeRemaining: "Time remaining",
    settings: "Checklist settings",
    resetTimeUtc: "Daily reset time (UTC)",
    weeklyDayUtc: "Weekly reset day (UTC)",
    linksTitle: "Quick links",
    links: [
      { label: "Reset timer →", href: "/tools/reset-timer" },
      { label: "Interactive map →", href: "/tools/interactive-map" },
      { label: "Active codes →", href: "/guides/codes" },
      { label: "News →", href: "/news" },
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
  },
  vi: {
    dailyTitle: "Checklist hằng ngày",
    weeklyTitle: "Checklist hằng tuần",
    add: "Thêm",
    placeholder: "Thêm mục tùy chỉnh…",
    resetChecks: "Bỏ tick",
    resetAll: "Reset template",
    nextDaily: "Reset daily tiếp theo",
    nextWeekly: "Reset weekly tiếp theo",
    timeRemaining: "Còn lại",
    settings: "Cài đặt checklist",
    resetTimeUtc: "Giờ reset hằng ngày (UTC)",
    weeklyDayUtc: "Ngày reset tuần (UTC)",
    linksTitle: "Liên kết nhanh",
    links: [
      { label: "Reset timer →", href: "/vn/tools/reset-timer" },
      { label: "Bản đồ tương tác →", href: "/vn/tools/interactive-map" },
      { label: "Code →", href: "/vn/guides/codes" },
      { label: "Tin tức →", href: "/vn/news" },
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
  },
  de: {
    dailyTitle: "Daily-Checkliste",
    weeklyTitle: "Weekly-Checkliste",
    add: "Hinzufügen",
    placeholder: "Eigenen Punkt hinzufügen…",
    resetChecks: "Haken löschen",
    resetAll: "Template zurücksetzen",
    nextDaily: "Nächster Daily-Reset",
    nextWeekly: "Nächster Weekly-Reset",
    timeRemaining: "Verbleibend",
    settings: "Checklist-Einstellungen",
    resetTimeUtc: "Daily-Reset Zeit (UTC)",
    weeklyDayUtc: "Weekly-Reset Tag (UTC)",
    linksTitle: "Schnelllinks",
    links: [
      { label: "Reset Timer →", href: "/de/tools/reset-timer" },
      { label: "Interaktive Karte →", href: "/de/tools/interactive-map" },
      { label: "Aktive Codes →", href: "/de/guides/codes" },
      { label: "News →", href: "/de/news" },
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
  },
};

const tryParseStored = (raw: string): ChecklistData | null => {
  try {
    const parsed = JSON.parse(raw) as Partial<ChecklistData>;
    if (parsed.version !== 1) return null;
    if (!Array.isArray(parsed.daily) || !Array.isArray(parsed.weekly)) return null;
    if (typeof parsed.dailyCycleKeyUtc !== "string" || typeof parsed.weeklyCycleKeyUtc !== "string") return null;

    const normalizeItem = (item: unknown): ChecklistItem | null => {
      if (!item || typeof item !== "object") return null;
      const record = item as Record<string, unknown>;
      if (typeof record.id !== "string") return null;
      if (typeof record.text !== "string") return null;
      return {
        id: record.id,
        text: record.text,
        checked: Boolean(record.checked),
        createdAt:
          typeof record.createdAt === "number" && Number.isFinite(record.createdAt)
            ? record.createdAt
            : Date.now(),
      };
    };

    const daily = parsed.daily.map(normalizeItem).filter(Boolean) as ChecklistItem[];
    const weekly = parsed.weekly.map(normalizeItem).filter(Boolean) as ChecklistItem[];

    return {
      version: 1,
      daily,
      weekly,
      dailyCycleKeyUtc: parsed.dailyCycleKeyUtc,
      weeklyCycleKeyUtc: parsed.weeklyCycleKeyUtc,
    };
  } catch {
    return null;
  }
};

const buildFreshData = (
  language: LanguageCode,
  dailyCycleKeyUtc: string,
  weeklyCycleKeyUtc: string
): ChecklistData => {
  const template = defaultTemplate(language);
  return {
    version: 1,
    daily: template.daily.map((text) => ({ id: newId(), text, checked: false, createdAt: Date.now() })),
    weekly: template.weekly.map((text) => ({ id: newId(), text, checked: false, createdAt: Date.now() })),
    dailyCycleKeyUtc,
    weeklyCycleKeyUtc,
  };
};

const clearChecks = (items: ChecklistItem[]) => items.map((item) => ({ ...item, checked: false }));

export function ChecklistTool() {
  const pathname = usePathname();
  const language = detectLanguage(pathname);
  const ui = UI_TEXT[language];

  const { settings, updateDailyResetTime, updateWeeklyResetWeekday } = useResetSettings();

  const [now, setNow] = useState(() => new Date());
  const [data, setData] = useState<ChecklistData | null>(null);
  const [dailyDraft, setDailyDraft] = useState("");
  const [weeklyDraft, setWeeklyDraft] = useState("");

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const nextDaily = useMemo(() => getNextDailyResetUtc(now, settings.dailyResetTimeUtc), [now, settings.dailyResetTimeUtc]);
  const nextWeekly = useMemo(
    () => getNextWeeklyResetUtc(now, settings.weeklyResetWeekdayUtc, settings.dailyResetTimeUtc),
    [now, settings.weeklyResetWeekdayUtc, settings.dailyResetTimeUtc]
  );

  const dailyRemaining = nextDaily.getTime() - now.getTime();
  const weeklyRemaining = nextWeekly.getTime() - now.getTime();

  const dailyCycleKeyUtc = useMemo(() => getDailyCycleKeyUtc(now, settings.dailyResetTimeUtc), [now, settings.dailyResetTimeUtc]);
  const weeklyCycleKeyUtc = useMemo(
    () => getWeeklyCycleKeyUtc(now, settings.weeklyResetWeekdayUtc, settings.dailyResetTimeUtc),
    [now, settings.weeklyResetWeekdayUtc, settings.dailyResetTimeUtc]
  );

  useEffect(() => {
    if (data) return;

    let cancelled = false;
    let next: ChecklistData;

    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) {
        next = buildFreshData(language, dailyCycleKeyUtc, weeklyCycleKeyUtc);
      } else {
        const parsed = tryParseStored(raw);
        next = parsed ?? buildFreshData(language, dailyCycleKeyUtc, weeklyCycleKeyUtc);
      }
    } catch {
      next = buildFreshData(language, dailyCycleKeyUtc, weeklyCycleKeyUtc);
    }

    queueMicrotask(() => {
      if (cancelled) return;
      setData(next);
    });

    return () => {
      cancelled = true;
    };
  }, [data, dailyCycleKeyUtc, language, weeklyCycleKeyUtc]);

  useEffect(() => {
    if (!data) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch {
      // ignore
    }
  }, [data]);

  useEffect(() => {
    if (!data) return;
    if (data.dailyCycleKeyUtc === dailyCycleKeyUtc && data.weeklyCycleKeyUtc === weeklyCycleKeyUtc) return;

    let cancelled = false;
    queueMicrotask(() => {
      if (cancelled) return;
      setData((prev) => {
        if (!prev) return prev;
        return {
          ...prev,
          daily: prev.dailyCycleKeyUtc === dailyCycleKeyUtc ? prev.daily : clearChecks(prev.daily),
          weekly: prev.weeklyCycleKeyUtc === weeklyCycleKeyUtc ? prev.weekly : clearChecks(prev.weekly),
          dailyCycleKeyUtc,
          weeklyCycleKeyUtc,
        };
      });
    });

    return () => {
      cancelled = true;
    };
  }, [dailyCycleKeyUtc, weeklyCycleKeyUtc, data]);

  const toggleItem = (list: "daily" | "weekly", id: string) => {
    setData((prev) => {
      if (!prev) return prev;
      const items = prev[list].map((item) => (item.id === id ? { ...item, checked: !item.checked } : item));
      return { ...prev, [list]: items };
    });
  };

  const deleteItem = (list: "daily" | "weekly", id: string) => {
    setData((prev) => {
      if (!prev) return prev;
      return { ...prev, [list]: prev[list].filter((item) => item.id !== id) };
    });
  };

  const addItem = (list: "daily" | "weekly", text: string) => {
    const trimmed = text.trim();
    if (!trimmed) return;
    setData((prev) => {
      if (!prev) return prev;
      const nextItem: ChecklistItem = { id: newId(), text: trimmed, checked: false, createdAt: Date.now() };
      return { ...prev, [list]: [nextItem, ...prev[list]] };
    });
  };

  const resetTemplate = () => {
    setData(buildFreshData(language, dailyCycleKeyUtc, weeklyCycleKeyUtc));
  };

  const clearAllChecks = () => {
    setData((prev) => {
      if (!prev) return prev;
      return { ...prev, daily: clearChecks(prev.daily), weekly: clearChecks(prev.weekly) };
    });
  };

  if (!data) {
    return (
      <div className="rounded-3xl border border-slate-800/80 bg-slate-950/80 p-8 text-sm text-slate-300 shadow-lg shadow-slate-950/60">
        Loading checklist…
      </div>
    );
  }

  const weekdayOrder: WeekdayUtc[] = [0, 1, 2, 3, 4, 5, 6];

  return (
    <div className="space-y-8">
      <div className="grid gap-4 md:grid-cols-2">
        <section className="rounded-3xl border border-slate-800/80 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <h2 className="text-xl font-bold text-slate-50">{ui.dailyTitle}</h2>
              <p className="mt-2 text-xs text-slate-400">
                {ui.nextDaily}: <span className="font-mono text-emerald-200">{formatDuration(dailyRemaining)}</span>
              </p>
            </div>
            <button
              type="button"
              onClick={() => setData((prev) => (prev ? { ...prev, daily: clearChecks(prev.daily) } : prev))}
              className="rounded-full border border-slate-700 bg-slate-900/60 px-4 py-2 text-xs font-semibold text-slate-200 hover:border-emerald-500/40 hover:text-emerald-100"
            >
              {ui.resetChecks}
            </button>
          </div>

          <div className="mt-4 space-y-2">
            {data.daily.map((item) => (
              <div
                key={item.id}
                className="group flex items-start justify-between gap-3 rounded-2xl border border-slate-800 bg-slate-900/50 px-4 py-3"
              >
                <label className="flex cursor-pointer items-start gap-3 text-sm text-slate-200">
                  <input
                    type="checkbox"
                    checked={item.checked}
                    onChange={() => toggleItem("daily", item.id)}
                    className="mt-0.5 h-4 w-4 accent-emerald-400"
                  />
                  <span className={item.checked ? "text-slate-400 line-through" : ""}>{item.text}</span>
                </label>
                <button
                  type="button"
                  onClick={() => deleteItem("daily", item.id)}
                  className="opacity-0 transition group-hover:opacity-100 text-xs text-slate-400 hover:text-red-300"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>

          <div className="mt-4 flex gap-2">
            <input
              value={dailyDraft}
              onChange={(e) => setDailyDraft(e.target.value)}
              placeholder={ui.placeholder}
              className="w-full rounded-xl border border-slate-700 bg-slate-900/60 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500"
            />
            <button
              type="button"
              onClick={() => {
                addItem("daily", dailyDraft);
                setDailyDraft("");
              }}
              className="shrink-0 rounded-xl border border-emerald-500/40 bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-100 hover:border-emerald-400/70 hover:text-emerald-50"
            >
              {ui.add}
            </button>
          </div>
        </section>

        <section className="rounded-3xl border border-slate-800/80 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <h2 className="text-xl font-bold text-slate-50">{ui.weeklyTitle}</h2>
              <p className="mt-2 text-xs text-slate-400">
                {ui.nextWeekly}: <span className="font-mono text-emerald-200">{formatDuration(weeklyRemaining)}</span>
              </p>
            </div>
            <button
              type="button"
              onClick={() => setData((prev) => (prev ? { ...prev, weekly: clearChecks(prev.weekly) } : prev))}
              className="rounded-full border border-slate-700 bg-slate-900/60 px-4 py-2 text-xs font-semibold text-slate-200 hover:border-emerald-500/40 hover:text-emerald-100"
            >
              {ui.resetChecks}
            </button>
          </div>

          <div className="mt-4 space-y-2">
            {data.weekly.map((item) => (
              <div
                key={item.id}
                className="group flex items-start justify-between gap-3 rounded-2xl border border-slate-800 bg-slate-900/50 px-4 py-3"
              >
                <label className="flex cursor-pointer items-start gap-3 text-sm text-slate-200">
                  <input
                    type="checkbox"
                    checked={item.checked}
                    onChange={() => toggleItem("weekly", item.id)}
                    className="mt-0.5 h-4 w-4 accent-emerald-400"
                  />
                  <span className={item.checked ? "text-slate-400 line-through" : ""}>{item.text}</span>
                </label>
                <button
                  type="button"
                  onClick={() => deleteItem("weekly", item.id)}
                  className="opacity-0 transition group-hover:opacity-100 text-xs text-slate-400 hover:text-red-300"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>

          <div className="mt-4 flex gap-2">
            <input
              value={weeklyDraft}
              onChange={(e) => setWeeklyDraft(e.target.value)}
              placeholder={ui.placeholder}
              className="w-full rounded-xl border border-slate-700 bg-slate-900/60 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500"
            />
            <button
              type="button"
              onClick={() => {
                addItem("weekly", weeklyDraft);
                setWeeklyDraft("");
              }}
              className="shrink-0 rounded-xl border border-emerald-500/40 bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-100 hover:border-emerald-400/70 hover:text-emerald-50"
            >
              {ui.add}
            </button>
          </div>
        </section>
      </div>

      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={clearAllChecks}
          className="rounded-full border border-slate-700 bg-slate-900/60 px-4 py-2 text-sm font-semibold text-slate-200 hover:border-emerald-500/40 hover:text-emerald-100"
        >
          {ui.resetChecks}
        </button>
        <button
          type="button"
          onClick={resetTemplate}
          className="rounded-full border border-slate-700 bg-slate-900/60 px-4 py-2 text-sm font-semibold text-slate-200 hover:border-emerald-500/40 hover:text-emerald-100"
        >
          {ui.resetAll}
        </button>
      </div>

      <details className="rounded-3xl border border-slate-800/80 bg-slate-950/70 p-6 shadow-lg shadow-slate-950/60">
        <summary className="cursor-pointer text-lg font-bold text-slate-50">{ui.settings}</summary>

        <div className="mt-5 grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-slate-100">{ui.resetTimeUtc}</label>
            <input
              type="time"
              step={60}
              value={formatUtcTimeOfDay(settings.dailyResetTimeUtc)}
              onChange={(e) => updateDailyResetTime(e.target.value)}
              className="w-full rounded-xl border border-slate-700 bg-slate-900/60 px-3 py-2 text-sm text-slate-100"
            />
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
        </div>

        <p className="mt-3 text-xs text-slate-400">
          {ui.timeRemaining}: <span className="font-mono text-emerald-200">{formatDuration(Math.min(dailyRemaining, weeklyRemaining))}</span>
        </p>
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
