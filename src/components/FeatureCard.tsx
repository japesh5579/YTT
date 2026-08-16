import Image from "next/image";
import RevealImage from "./RevealImage";
import { shimmerPlaceholder } from "@/lib/placeholder";

export default function FeatureCard({
  img,
  alt,
  eyebrow,
  title,
  description,
  date,
  href = "#",
  onClick,
  applyHref,
  linkLabel = "Discover more",
  showLink = true,
  mediaClassName = "relative aspect-[4/5] bg-[#e7e2d6]",
  imgPositionClass = "object-center",
  imgSize = { w: 640, h: 800 },
  sizes = "(min-width: 768px) 33vw, 100vw",
}: {
  img: string;
  alt: string;
  eyebrow?: string;
  title: string;
  description: string;
  date?: string;
  href?: string;
  onClick?: () => void;
  applyHref?: string;
  linkLabel?: string;
  showLink?: boolean;
  mediaClassName?: string;
  imgPositionClass?: string;
  imgSize?: { w: number; h: number };
  sizes?: string;
}) {
  const cardBody = (
    <>
      <RevealImage className={mediaClassName}>
        <Image
          src={img}
          alt={alt}
          fill
          sizes={sizes}
          placeholder="blur"
          blurDataURL={shimmerPlaceholder(imgSize.w, imgSize.h)}
          className={`img-subtle object-cover ${imgPositionClass} transition-transform duration-[1200ms] ease-out group-hover:scale-105`}
        />
        {date && (
          <span className="absolute left-4 top-4 z-10 bg-[#f7f4ee]/90 px-3 py-1.5 text-[10px] tracking-widest-plus uppercase text-[#22201c] backdrop-blur-sm">
            {date}
          </span>
        )}
      </RevealImage>
      {eyebrow && (
        <p className="mt-5 text-[10px] tracking-widest-plus uppercase text-[#8a8375]">
          {eyebrow}
        </p>
      )}
      <h3 className={`font-display text-xl font-light md:text-2xl ${eyebrow ? "mt-2" : "mt-5"}`}>{title}</h3>
      <p className="mt-2 max-w-sm text-sm leading-relaxed text-[#57534a]">
        {description}
      </p>
    </>
  );

  return (
    <div className="group">
      {onClick ? (
        <button type="button" onClick={onClick} className="block w-full text-left">
          {cardBody}
        </button>
      ) : (
        <a href={href} className="block">
          {cardBody}
        </a>
      )}

      {(showLink || applyHref) && (
        <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2">
          {showLink &&
            (onClick ? (
              <button
                type="button"
                onClick={onClick}
                className="text-sm text-[#33456a] underline decoration-[#33456a]/40 underline-offset-4 transition-colors group-hover:decoration-[#33456a]"
              >
                {linkLabel}
              </button>
            ) : (
              <a
                href={href}
                className="text-sm text-[#33456a] underline decoration-[#33456a]/40 underline-offset-4 transition-colors group-hover:decoration-[#33456a]"
              >
                {linkLabel}
              </a>
            ))}

          {applyHref && (
            <>
              {showLink && <span className="text-[#8a8375]/50">·</span>}
              <a
                href={applyHref}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#33456a] underline decoration-[#33456a]/40 underline-offset-4 transition-colors group-hover:decoration-[#33456a]"
              >
                Apply
              </a>
            </>
          )}
        </div>
      )}
    </div>
  );
}
