type Props = {
  slot: string;
  alt: string;
  expectation: string;
};

/** Empty figure for a still that is not on an official CDN we already cite. */
export function MediaPlaceholder({ slot, alt, expectation }: Props) {
  return (
    <figure className="overflow-hidden rounded-2xl border border-dashed border-amber-400/40 bg-slate-950/80">
      <div className="flex aspect-video items-center justify-center bg-slate-900 px-6 text-center">
        <p className="max-w-md text-sm font-semibold text-amber-100">Pending official still · {slot}</p>
      </div>
      <figcaption className="space-y-1 border-t border-slate-800 px-4 py-3 text-xs leading-5 text-slate-400">
        <span className="block text-slate-300">{alt}</span>
        <span className="block">{expectation}</span>
      </figcaption>
    </figure>
  );
}
