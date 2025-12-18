'use client';

import { useCallback, useEffect, useMemo, useState } from "react";
import type { UtcTimeOfDay, WeekdayUtc } from "@/lib/resetSchedule";
import {
  DEFAULT_DAILY_RESET_UTC,
  DEFAULT_WEEKLY_RESET_WEEKDAY_UTC,
  formatUtcTimeOfDay,
  parseUtcTimeOfDay,
} from "@/lib/resetSchedule";

export type ResetSettings = {
  dailyResetTimeUtc: UtcTimeOfDay;
  weeklyResetWeekdayUtc: WeekdayUtc;
  displayTimeZone: string;
};

const STORAGE_KEY = "wwm-tools-reset-settings-v1";

const getLocalTimeZone = () => {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone || "UTC";
  } catch {
    return "UTC";
  }
};

const isValidTimeZone = (timeZone: string) => {
  try {
    new Intl.DateTimeFormat(undefined, { timeZone }).format(new Date());
    return true;
  } catch {
    return false;
  }
};

const normalizeWeekday = (value: unknown): WeekdayUtc | null => {
  if (typeof value !== "number") return null;
  if (!Number.isFinite(value)) return null;
  const rounded = Math.trunc(value);
  if (rounded < 0 || rounded > 6) return null;
  return rounded as WeekdayUtc;
};

const parseStoredSettings = (raw: string): ResetSettings | null => {
  try {
    const parsed = JSON.parse(raw) as Partial<Record<string, unknown>>;
    const dailyResetTime = typeof parsed.dailyResetTimeUtc === "string" ? parseUtcTimeOfDay(parsed.dailyResetTimeUtc) : null;
    const weeklyResetWeekday = normalizeWeekday(parsed.weeklyResetWeekdayUtc);
    const displayTimeZone = typeof parsed.displayTimeZone === "string" ? parsed.displayTimeZone : null;

    return {
      dailyResetTimeUtc: dailyResetTime ?? DEFAULT_DAILY_RESET_UTC,
      weeklyResetWeekdayUtc: weeklyResetWeekday ?? DEFAULT_WEEKLY_RESET_WEEKDAY_UTC,
      displayTimeZone: displayTimeZone && isValidTimeZone(displayTimeZone) ? displayTimeZone : getLocalTimeZone(),
    };
  } catch {
    return null;
  }
};

export function useResetSettings() {
  const localTimeZone = useMemo(() => getLocalTimeZone(), []);
  const [settings, setSettings] = useState<ResetSettings>(() => ({
    dailyResetTimeUtc: DEFAULT_DAILY_RESET_UTC,
    weeklyResetWeekdayUtc: DEFAULT_WEEKLY_RESET_WEEKDAY_UTC,
    displayTimeZone: localTimeZone,
  }));
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let cancelled = false;
    let stored: ResetSettings | null = null;

    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      stored = raw ? parseStoredSettings(raw) : null;
    } catch {
      stored = null;
    }

    queueMicrotask(() => {
      if (cancelled) return;
      if (stored) setSettings(stored);
      setLoaded(true);
    });

    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (!loaded) return;
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          dailyResetTimeUtc: formatUtcTimeOfDay(settings.dailyResetTimeUtc),
          weeklyResetWeekdayUtc: settings.weeklyResetWeekdayUtc,
          displayTimeZone: settings.displayTimeZone,
        })
      );
    } catch {
      // ignore write errors (private mode, etc.)
    }
  }, [loaded, settings]);

  const updateDailyResetTime = useCallback((value: string) => {
    const parsed = parseUtcTimeOfDay(value);
    if (!parsed) return false;
    setSettings((prev) => ({ ...prev, dailyResetTimeUtc: parsed }));
    return true;
  }, []);

  const updateWeeklyResetWeekday = useCallback((weekday: WeekdayUtc) => {
    setSettings((prev) => ({ ...prev, weeklyResetWeekdayUtc: weekday }));
  }, []);

  const updateDisplayTimeZone = useCallback((timeZone: string) => {
    if (!isValidTimeZone(timeZone)) return false;
    setSettings((prev) => ({ ...prev, displayTimeZone: timeZone }));
    return true;
  }, []);

  const resetDefaults = useCallback(() => {
    setSettings({
      dailyResetTimeUtc: DEFAULT_DAILY_RESET_UTC,
      weeklyResetWeekdayUtc: DEFAULT_WEEKLY_RESET_WEEKDAY_UTC,
      displayTimeZone: getLocalTimeZone(),
    });
  }, []);

  return {
    settings,
    loaded,
    updateDailyResetTime,
    updateWeeklyResetWeekday,
    updateDisplayTimeZone,
    resetDefaults,
    localTimeZone,
  };
}
