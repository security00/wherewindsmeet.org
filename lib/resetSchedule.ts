export type UtcTimeOfDay = {
  hour: number;
  minute: number;
};

export type WeekdayUtc = 0 | 1 | 2 | 3 | 4 | 5 | 6;

const MS_PER_MINUTE = 60_000;
const MS_PER_HOUR = 60 * MS_PER_MINUTE;
const MS_PER_DAY = 24 * MS_PER_HOUR;

export const DEFAULT_DAILY_RESET_UTC: UtcTimeOfDay = { hour: 21, minute: 0 };
export const DEFAULT_WEEKLY_RESET_WEEKDAY_UTC: WeekdayUtc = 1; // Monday

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));

export const formatUtcTimeOfDay = (time: UtcTimeOfDay) => {
  const hh = String(clamp(Math.trunc(time.hour), 0, 23)).padStart(2, "0");
  const mm = String(clamp(Math.trunc(time.minute), 0, 59)).padStart(2, "0");
  return `${hh}:${mm}`;
};

export const parseUtcTimeOfDay = (value: string): UtcTimeOfDay | null => {
  const trimmed = value.trim();
  const match = /^(\d{1,2}):(\d{2})$/.exec(trimmed);
  if (!match) return null;
  const hour = Number(match[1]);
  const minute = Number(match[2]);
  if (!Number.isFinite(hour) || !Number.isFinite(minute)) return null;
  if (hour < 0 || hour > 23) return null;
  if (minute < 0 || minute > 59) return null;
  return { hour, minute };
};

export const formatDuration = (ms: number) => {
  if (!Number.isFinite(ms)) return "—";
  const safeMs = Math.max(0, Math.floor(ms));
  const totalSeconds = Math.floor(safeMs / 1000);

  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  const hh = String(hours).padStart(2, "0");
  const mm = String(minutes).padStart(2, "0");
  const ss = String(seconds).padStart(2, "0");

  if (days > 0) return `${days}d ${hh}:${mm}:${ss}`;
  return `${hh}:${mm}:${ss}`;
};

export const getNextDailyResetUtc = (now: Date, resetTimeUtc: UtcTimeOfDay) => {
  const candidate = new Date(
    Date.UTC(
      now.getUTCFullYear(),
      now.getUTCMonth(),
      now.getUTCDate(),
      resetTimeUtc.hour,
      resetTimeUtc.minute,
      0,
      0
    )
  );
  if (candidate.getTime() > now.getTime()) return candidate;
  return new Date(candidate.getTime() + MS_PER_DAY);
};

export const getPreviousDailyResetUtc = (now: Date, resetTimeUtc: UtcTimeOfDay) => {
  const candidate = new Date(
    Date.UTC(
      now.getUTCFullYear(),
      now.getUTCMonth(),
      now.getUTCDate(),
      resetTimeUtc.hour,
      resetTimeUtc.minute,
      0,
      0
    )
  );
  if (candidate.getTime() <= now.getTime()) return candidate;
  return new Date(candidate.getTime() - MS_PER_DAY);
};

export const getNextWeeklyResetUtc = (
  now: Date,
  weekdayUtc: WeekdayUtc,
  resetTimeUtc: UtcTimeOfDay
) => {
  const todayUtc = now.getUTCDay() as WeekdayUtc;
  const dayDelta = (weekdayUtc - todayUtc + 7) % 7;

  const base = new Date(
    Date.UTC(
      now.getUTCFullYear(),
      now.getUTCMonth(),
      now.getUTCDate(),
      resetTimeUtc.hour,
      resetTimeUtc.minute,
      0,
      0
    )
  );
  const candidate = new Date(base.getTime() + dayDelta * MS_PER_DAY);

  if (candidate.getTime() > now.getTime()) return candidate;
  if (dayDelta === 0) return new Date(candidate.getTime() + 7 * MS_PER_DAY);
  return candidate;
};

export const getPreviousWeeklyResetUtc = (
  now: Date,
  weekdayUtc: WeekdayUtc,
  resetTimeUtc: UtcTimeOfDay
) => {
  const todayUtc = now.getUTCDay() as WeekdayUtc;
  const dayDelta = (todayUtc - weekdayUtc + 7) % 7;

  const base = new Date(
    Date.UTC(
      now.getUTCFullYear(),
      now.getUTCMonth(),
      now.getUTCDate(),
      resetTimeUtc.hour,
      resetTimeUtc.minute,
      0,
      0
    )
  );
  const candidate = new Date(base.getTime() - dayDelta * MS_PER_DAY);

  if (candidate.getTime() <= now.getTime()) return candidate;
  return new Date(candidate.getTime() - 7 * MS_PER_DAY);
};

export const getDailyCycleKeyUtc = (now: Date, resetTimeUtc: UtcTimeOfDay) =>
  getPreviousDailyResetUtc(now, resetTimeUtc).toISOString();

export const getWeeklyCycleKeyUtc = (now: Date, weekdayUtc: WeekdayUtc, resetTimeUtc: UtcTimeOfDay) =>
  getPreviousWeeklyResetUtc(now, weekdayUtc, resetTimeUtc).toISOString();

