import Image from "next/image";

interface GuideImage {
  src: string;
  alt: string;
  caption: string;
}

export default function GiftOfGabImages() {
  const images: GuideImage[] = [
    {
      src: "/guides/gift-of-gab/gameplay.jpg",
      alt: "Gift of Gab gameplay showing debate interface",
      caption: "The main Gift of Gab debate interface with Mental Focus bars and card options",
    },
    {
      src: "/guides/gift-of-gab/game-modes.jpg",
      alt: "Game modes selection for Gift of Gab",
      caption: "Choose between Free Persuasion (AI chatbot) and Rhetoric Duel (card-based) modes",
    },
    {
      src: "/guides/gift-of-gab/rebuttal-trash-talk.jpg",
      alt: "Trash Talk QTE system in Gift of Gab",
      caption: "Free button-press events appear during debates for bonus damage or effects",
    },
    {
      src: "/guides/gift-of-gab/ui-opponent.jpg",
      alt: "UI display showing opponent and resources",
      caption: "Monitor opponent's Mental Focus, your Inspiration, and available cards",
    },
  ];

  return (
    <section className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        {images.map((image, index) => (
          <figure key={index} className="space-y-2">
            <div className="relative bg-black/40 rounded-2xl border border-slate-700 overflow-hidden">
              <Image
                src={image.src}
                alt={image.alt}
                width={600}
                height={400}
                className="w-full h-auto object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <figcaption className="text-sm text-slate-300 text-center">{image.caption}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
