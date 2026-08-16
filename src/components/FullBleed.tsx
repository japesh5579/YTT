import Image from "next/image";
import Reveal from "./Reveal";
import RevealImage from "./RevealImage";
import { shimmerPlaceholder } from "@/lib/placeholder";

export default function FullBleed() {
  return (
    <section className="relative h-[70vh] min-h-[420px] w-full overflow-hidden">
      <RevealImage className="absolute inset-0 h-full w-full">
        <Image
          src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=2400&q=80"
          alt="A quiet timber pathway leading through native landscape"
          fill
          sizes="100vw"
          placeholder="blur"
          blurDataURL={shimmerPlaceholder(1600, 900)}
          className="img-subtle object-cover"
        />
      </RevealImage>
      <div className="absolute inset-0 bg-black/10" />

      <Reveal className="absolute bottom-10 left-6 md:bottom-14 md:left-10">
        <p className="max-w-xs text-xs tracking-widest-plus uppercase text-white/90">
          Built to be felt, not noticed.
        </p>
      </Reveal>
    </section>
  );
}
