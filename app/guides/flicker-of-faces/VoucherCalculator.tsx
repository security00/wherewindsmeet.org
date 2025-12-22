"use client";

import { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";

type Props = {
  defaultBasePrice?: number;
  maxVouchers?: number;
  voucherPercent?: number;
};

function clampNumber(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

type GtagFunction = (...args: unknown[]) => void;

function safeTrack(eventName: string, params?: Record<string, string | number | boolean>) {
  if (typeof window === "undefined") return;
  const gtag = (window as unknown as { gtag?: GtagFunction }).gtag;
  if (typeof gtag !== "function") return;
  gtag("event", eventName, params || {});
}

export default function VoucherCalculator({
  defaultBasePrice = 2580,
  maxVouchers = 5,
  voucherPercent = 10,
}: Props) {
  const pathname = usePathname();
  const language = pathname?.startsWith("/vn") ? "vi" : pathname?.startsWith("/de") ? "de" : "en";
  const locale = language === "vi" ? "vi-VN" : language === "de" ? "de-DE" : "en-US";

  const uiText =
    language === "vi"
      ? {
          basePriceLabel: "Giá gốc",
          basePriceAria: "Giá gốc",
          currencyUnit: "pearls",
          basePriceHint: "Dùng giá trong shop của server bạn (2580 là số tham chiếu phổ biến).",
          vouchersLabel: "Voucher",
          vouchersAssumptionTemplate:
            "Giả định giảm {pct}% mỗi voucher, cộng dồn tối đa {max} (tối đa {cap}%).",
          finalPriceLabel: "Giá sau giảm (ước tính)",
          roundingHint: "Game có thể làm tròn hơi khác một chút.",
          youSaveLabel: "Tiết kiệm",
          effectiveDiscountTemplate: "{pct}% giảm hiệu dụng",
          toMaxDiscountLabel: "Còn thiếu để đạt tối đa",
          atStackLimit: "Bạn đã chạm giới hạn cộng dồn.",
          needMoreTemplate: "Cần thêm {n} voucher để chạm mức tối đa.",
          notesTitle: "Ghi chú",
          notes: [
            "• Công cụ này chỉ mô phỏng việc cộng dồn voucher.",
            "• Nếu shop có thêm giảm giá riêng, giá cuối có thể khác tùy cách game cộng các loại giảm giá.",
            "• Luôn kiểm tra giá cuối trên màn hình mua hàng trong game.",
          ],
        }
      : language === "de"
        ? {
            basePriceLabel: "Grundpreis",
            basePriceAria: "Grundpreis",
            currencyUnit: "Perlen",
            basePriceHint: "Nimm den Shop-Preis deines Servers (2580 ist ein häufiger Referenzwert).",
            vouchersLabel: "Voucher",
            vouchersAssumptionTemplate:
              "Geht von {pct}% pro Voucher aus, stapelbar bis {max} (max. {cap}%).",
            finalPriceLabel: "Geschätzter Endpreis",
            roundingHint: "Die Rundung im Spiel kann leicht abweichen.",
            youSaveLabel: "Du sparst",
            effectiveDiscountTemplate: "{pct}% effektiver Rabatt",
            toMaxDiscountLabel: "Bis zum Max‑Rabatt",
            atStackLimit: "Du bist am Stapel‑Limit.",
            needMoreTemplate: "Noch {n} Voucher bis zum Limit.",
            notesTitle: "Hinweise",
            notes: [
              "• Dieser Rechner modelliert nur das Voucher‑Stacking.",
              "• Wenn der Shop zusätzlich einen separaten Rabatt zeigt, kann der Endpreis je nach Kombination abweichen.",
              "• Prüfe den Endpreis immer im Kaufbildschirm im Spiel.",
            ],
          }
        : {
            basePriceLabel: "Base price",
            basePriceAria: "Base price",
            currencyUnit: "pearls",
            basePriceHint: "Use the shop price for your server (2580 is a common reference).",
            vouchersLabel: "Vouchers",
            vouchersAssumptionTemplate: "Assumes {pct}% off per voucher, stacked up to {max} (max {cap}%).",
            finalPriceLabel: "Estimated final price",
            roundingHint: "Game rounding may differ slightly.",
            youSaveLabel: "You save",
            effectiveDiscountTemplate: "{pct}% effective discount",
            toMaxDiscountLabel: "To max discount",
            atStackLimit: "You’re at the stack limit.",
            needMoreTemplate: "Need {n} more voucher(s) to reach the cap.",
            notesTitle: "Notes",
            notes: [
              "• This calculator only models voucher stacking.",
              "• If the shop also shows a separate discount, the final price can differ depending on how discounts combine.",
              "• Always confirm the final price on the in-game purchase screen.",
            ],
          };

  const [basePrice, setBasePrice] = useState<number>(defaultBasePrice);
  const [vouchers, setVouchers] = useState<number>(0);
  const [hasInteracted, setHasInteracted] = useState(false);

  const clampedBasePrice = useMemo(() => clampNumber(Number.isFinite(basePrice) ? basePrice : 0, 0, 999999), [basePrice]);
  const clampedVouchers = useMemo(() => clampNumber(vouchers, 0, maxVouchers), [maxVouchers, vouchers]);
  const discountPct = useMemo(
    () => clampNumber(clampedVouchers * voucherPercent, 0, maxVouchers * voucherPercent),
    [clampedVouchers, maxVouchers, voucherPercent]
  );

  const result = useMemo(() => {
    const rawFinal = clampedBasePrice * (1 - discountPct / 100);
    const finalRounded = Math.max(0, Math.round(rawFinal));
    const saved = Math.max(0, clampedBasePrice - finalRounded);
    const effectivePct = clampedBasePrice > 0 ? (saved / clampedBasePrice) * 100 : 0;
    return {
      finalRounded,
      saved,
      effectivePct,
      rawFinal,
    };
  }, [clampedBasePrice, discountPct]);

  const remaining = Math.max(0, maxVouchers - clampedVouchers);

  useEffect(() => {
    if (!hasInteracted) return;
    const timeoutId = window.setTimeout(() => {
      safeTrack("voucher_calculator_update", {
        page: "flicker_of_faces",
        base_price: clampedBasePrice,
        vouchers: clampedVouchers,
        discount_pct: discountPct,
        final_price: result.finalRounded,
      });
    }, 900);
    return () => window.clearTimeout(timeoutId);
  }, [clampedBasePrice, clampedVouchers, discountPct, hasInteracted, result.finalRounded]);

  return (
    <div className="space-y-4">
      <div className="grid gap-3 sm:grid-cols-2">
        <label className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
          <p className="text-xs uppercase tracking-wide text-emerald-300">{uiText.basePriceLabel}</p>
          <div className="mt-2 flex items-center gap-2">
            <input
              type="number"
              inputMode="numeric"
              min={0}
              step={1}
              value={Number.isFinite(basePrice) ? basePrice : 0}
              onChange={(e) => {
                setHasInteracted(true);
                setBasePrice(Number(e.target.value));
              }}
              className="w-full rounded-lg border border-slate-700 bg-slate-950/60 px-3 py-2 text-sm text-slate-100 outline-none focus:border-emerald-400/60"
              aria-label={uiText.basePriceAria}
            />
            <span className="text-xs text-slate-400 whitespace-nowrap">{uiText.currencyUnit}</span>
          </div>
          <p className="mt-2 text-xs text-slate-400">{uiText.basePriceHint}</p>
        </label>

        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
          <p className="text-xs uppercase tracking-wide text-emerald-300">{uiText.vouchersLabel}</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {Array.from({ length: maxVouchers + 1 }).map((_, idx) => {
              const active = idx === clampedVouchers;
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => {
                    setHasInteracted(true);
                    setVouchers(idx);
                  }}
                  className={
                    active
                      ? "rounded-full border border-emerald-400/70 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-100"
                      : "rounded-full border border-slate-700 bg-slate-950/40 px-3 py-1 text-xs font-semibold text-slate-100 hover:border-emerald-300/60"
                  }
                  aria-pressed={active}
                >
                  {idx}
                </button>
              );
            })}
          </div>
          <p className="mt-2 text-xs text-slate-400">
            {uiText.vouchersAssumptionTemplate
              .replace("{pct}", String(voucherPercent))
              .replace("{max}", String(maxVouchers))
              .replace("{cap}", String(maxVouchers * voucherPercent))}
          </p>
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-3">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
          <p className="text-xs uppercase tracking-wide text-emerald-300">{uiText.finalPriceLabel}</p>
          <p className="mt-2 text-2xl font-bold text-slate-50">{result.finalRounded.toLocaleString(locale)}</p>
          <p className="mt-1 text-xs text-slate-400">{uiText.roundingHint}</p>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
          <p className="text-xs uppercase tracking-wide text-emerald-300">{uiText.youSaveLabel}</p>
          <p className="mt-2 text-2xl font-bold text-slate-50">{result.saved.toLocaleString(locale)}</p>
          <p className="mt-1 text-xs text-slate-400">
            {uiText.effectiveDiscountTemplate.replace("{pct}", result.effectivePct.toFixed(0))}
          </p>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
          <p className="text-xs uppercase tracking-wide text-emerald-300">{uiText.toMaxDiscountLabel}</p>
          <p className="mt-2 text-2xl font-bold text-slate-50">{remaining}</p>
          <p className="mt-1 text-xs text-slate-400">
            {remaining === 0 ? uiText.atStackLimit : uiText.needMoreTemplate.replace("{n}", String(remaining))}
          </p>
        </div>
      </div>

      <div className="rounded-2xl border border-slate-800 bg-slate-950/40 p-4 text-xs text-slate-300">
        <p className="font-semibold text-slate-100">{uiText.notesTitle}</p>
        <ul className="mt-2 space-y-1">
          {uiText.notes.map((note) => (
            <li key={note}>{note}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
