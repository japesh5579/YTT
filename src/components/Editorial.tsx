import Image from "next/image";
import Reveal from "./Reveal";
import RevealImage from "./RevealImage";
import { shimmerPlaceholder } from "@/lib/placeholder";

export default function Editorial() {
  return (
    <section
      id="journal"
      className="grid grid-cols-1 items-center gap-0 md:grid-cols-2"
    >
      <RevealImage className="relative h-[420px] md:h-[640px]">
        <Image
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80"
          alt="Interior of a minimal stone and timber suite"
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          placeholder="blur"
          blurDataURL={shimmerPlaceholder(800, 900)}
          className="img-subtle object-cover"
        />
      </RevealImage>

      <div className="bg-[#22201c] px-6 py-20 text-[#f7f4ee] md:px-16 md:py-0">
        <Reveal>
          <p className="mb-6 text-xs tracking-widest-plus uppercase text-[#b8b2a2]">
            From the journal
          </p>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="font-display max-w-md text-3xl font-light leading-snug md:text-4xl">
            Notes on building slowly, in places that ask for patience.
          </h2>
        </Reveal>
        <Reveal delay={200}>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-[#c9c4b6]">
            Field notes, interviews with the artisans we build alongside, and
            long-form dispatches from each site — published a few times a
            year, never rushed.
          </p>
        </Reveal>
        <Reveal delay={300}>
          <a
            href="#journal"
            className="mt-10 inline-block border-b border-[#f7f4ee]/40 pb-1 text-xs tracking-widest-plus uppercase transition-colors hover:border-[#f7f4ee]"
          >
            Read the journal
          </a>
        </Reveal>
      </div>
    </section>
  );
}
