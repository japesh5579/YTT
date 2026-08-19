import Reveal from "./Reveal";
import FeatureCard from "./FeatureCard";

type Item = {
  img: string;
  alt: string;
  eyebrow?: string;
  title: string;
  description: string;
  href?: string;
  imgPositionClass?: string;
};

// Measured on the reference site at a 1918px viewport:
// - Seasonal row: uniform ~419x419px square cards, 73px gaps, ~672px intro column.
// - World-of row: uniform ~702x476px cards (3:2 landscape), same 73px gaps.
const PRESETS = {
  side: {
    cardWidth: "w-[280px] sm:w-[340px] lg:w-[400px]",
    cardAspect: "aspect-square",
  },
  centered: {
    cardWidth: "w-[300px] sm:w-[380px] lg:w-[460px]",
    cardAspect: "aspect-[3/2]",
  },
} as const;

export default function ExperienceCarousel({
  heading,
  description,
  items,
  variant = "side",
  id,
}: {
  heading: string;
  description?: string;
  items: Item[];
  variant?: "side" | "centered";
  id?: string;
}) {
  const { cardWidth, cardAspect } = PRESETS[variant];

  const cards = (
    <div className="no-scrollbar flex min-w-0 items-start gap-8 overflow-x-auto overscroll-x-contain touch-pan-x touch-pan-y pb-2 pr-6 md:gap-[73px] md:pr-10">
      {items.map((item, i) => (
        <Reveal key={item.title} delay={(i % 3) * 100} className={`${cardWidth} shrink-0`}>
          <FeatureCard
            img={item.img}
            alt={item.alt}
            eyebrow={item.eyebrow}
            title={item.title}
            description={item.description}
            href={item.href}
            showLink={false}
            imgPositionClass={item.imgPositionClass}
            mediaClassName={`relative ${cardAspect} bg-[#e7e2d6]`}
            imgSize={{ w: 800, h: 800 }}
            sizes="460px"
          />
        </Reveal>
      ))}
    </div>
  );

  if (variant === "centered") {
    return (
      <section id={id} className="min-w-0 scroll-mt-24 py-20 md:py-28">
        <Reveal className="mx-auto mb-12 flex max-w-[1600px] flex-col items-center px-6 text-center md:mb-16 md:px-10">
          <span className="mb-6 h-px w-16 bg-[#22201c]/25" />
          <h2 className="font-display text-2xl font-light md:text-3xl">{heading}</h2>
        </Reveal>
        <div className="pl-6 md:pl-10">{cards}</div>
      </section>
    );
  }

  return (
    <section id={id} className="min-w-0 scroll-mt-24 py-16 md:py-20">
      <div className="grid grid-cols-1 gap-10 pl-6 md:gap-x-12 md:pl-10 lg:grid-cols-[360px_1fr]">
        <Reveal>
          <div>
            <h2 className="font-display text-2xl font-light md:text-3xl">{heading}</h2>
            {description && (
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-[#57534a]">
                {description}
              </p>
            )}
          </div>
        </Reveal>
        {cards}
      </div>
    </section>
  );
}
