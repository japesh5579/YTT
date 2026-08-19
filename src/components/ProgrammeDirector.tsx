import Image from "next/image";
import Reveal from "./Reveal";
import RevealImage from "./RevealImage";
import { shimmerPlaceholder } from "@/lib/placeholder";

export default function ProgrammeDirector() {
  return (
    <section className="mx-auto min-w-0 max-w-[1600px] px-6 py-16 md:px-10 md:py-24">
      <Reveal>
        <p className="mb-6 text-xs tracking-widest-plus uppercase text-[#8a8375]">
          From Our Programme Director
        </p>
      </Reveal>

      <div className="grid grid-cols-1 gap-10 md:grid-cols-[280px_1fr] md:gap-16">
        <Reveal delay={100}>
          <RevealImage className="relative aspect-square bg-[#e7e2d6]">
            <Image
              src="/teacher-ankita.jpg"
              alt="Alankrita Banerjee"
              fill
              sizes="(min-width: 768px) 280px, 60vw"
              placeholder="blur"
              blurDataURL={shimmerPlaceholder(600, 600)}
              className="object-cover"
            />
          </RevealImage>
          <p className="font-display mt-4 text-lg">Alankrita Banerjee</p>
          <p className="mt-1 text-xs tracking-widest-plus uppercase text-[#8a8375]">
            Programme Director — YTT, YRT · Founder, PANKH
          </p>
        </Reveal>

        <Reveal delay={150}>
          <blockquote className="font-display max-w-2xl text-xl font-light italic leading-snug text-[#22201c] md:text-2xl">
            &ldquo;The greatest joy is in giving — giving love, giving a
            hug, or a smile. Giving makes you whole and complete. I live
            only to give.&rdquo;
          </blockquote>
        </Reveal>
      </div>
    </section>
  );
}
