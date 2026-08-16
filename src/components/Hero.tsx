import Image from "next/image";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section id="top" className="pt-20">
      <div className="relative h-[calc(100svh-5rem)] min-h-[420px] w-full overflow-hidden">
        {/* Mobile: hero-v2, cropped/zoomed full-bleed. Desktop: hero-v4, full-bleed edge-to-edge. */}
        <Image
          src="/hero-v2.jpg"
          alt="Light House, on the banks of the Ganges in Rishikesh"
          fill
          priority
          sizes="100vw"
          className="img-subtle animate-video-fade-in object-cover md:hidden"
        />
        <Image
          src="/hero-v4.jpg"
          alt="Light House, on the banks of the Ganges in Rishikesh"
          fill
          priority
          sizes="100vw"
          className="img-subtle animate-video-fade-in hidden object-cover md:block"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />

        <div className="absolute inset-x-0 bottom-0 px-6 pb-10 md:px-10 md:pb-16">
          <Reveal>
            <p className="mb-3 text-xs tracking-widest-plus uppercase text-white/90">
              Rishikesh, India
            </p>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="font-display max-w-2xl text-4xl font-light leading-[1.1] text-white md:text-6xl">
              A Mind Blowing Yoga Place.
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <a
              href="#destinations"
              className="mt-6 inline-block border border-white px-6 py-3 text-xs tracking-widest-plus uppercase text-white transition-colors hover:bg-white hover:text-[#22201c]"
            >
              Discover more
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
