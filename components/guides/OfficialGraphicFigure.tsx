import Image from "next/image";

type Props = {
  src: string;
  width: number;
  height: number;
  alt: string;
  caption: string;
  sourceHref: string;
  sourceLabel: string;
};

/**
 * Full-frame official graphic. The image keeps its own aspect ratio so reward
 * text is not cropped, and the full-size link opens the same local asset.
 */
export function OfficialGraphicFigure({
  src,
  width,
  height,
  alt,
  caption,
  sourceHref,
  sourceLabel,
}: Props) {
  return (
    <figure className="max-w-full overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/80">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        unoptimized
        className="block h-auto w-full max-w-full"
      />
      <figcaption className="space-y-2 border-t border-slate-800 px-4 py-3 text-xs leading-5 text-slate-400">
        <span className="block text-slate-300">{caption}</span>
        <span className="flex max-w-full flex-wrap gap-x-4 gap-y-1">
          <a
            href={sourceHref}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-emerald-300 underline underline-offset-4 hover:text-emerald-200"
          >
            {sourceLabel}
          </a>
          <a
            href={src}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-emerald-300 underline underline-offset-4 hover:text-emerald-200"
          >
            Open the full-size graphic
          </a>
        </span>
      </figcaption>
    </figure>
  );
}
