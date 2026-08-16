import Image from "next/image";
import Reveal from "./Reveal";

const LOGOS = [
  { src: "/accred-wyf-logo.png", alt: "World Yoga Federation", w: 220, h: 70 },
  { src: "/accred-yai-cys200.png", alt: "Yoga Alliance International — CYS 200 Certified", w: 90, h: 90 },
  { src: "/accred-wyf-cys200.png", alt: "World Yoga Federation — 200 CYS Certified Yoga School", w: 90, h: 90 },
  { src: "/accred-wyf-studio.png", alt: "World Yoga Federation — Certified Yoga Studio", w: 90, h: 90 },
  { src: "/accred-yai-cys300.png", alt: "Yoga Alliance International — CYS 300 Certified", w: 90, h: 90 },
  { src: "/accred-yai-cys500.png", alt: "Yoga Alliance International — CYS 500 Certified", w: 90, h: 90 },
  { src: "/accred-wyf-cys500.png", alt: "World Yoga Federation — 500 CYS Certified Yoga School", w: 90, h: 90 },
  { src: "/accred-yai-emblem.png", alt: "Yoga Alliance International", w: 90, h: 90 },
];

export default function Accreditations() {
  return (
    <section className="py-16 md:py-20">
      <Reveal className="mx-auto flex max-w-[1600px] flex-col items-center px-6 text-center md:px-10">
        <span className="mb-6 h-px w-16 bg-[#22201c]/25" />
        <p className="mb-10 text-xs tracking-widest-plus uppercase text-[#8a8375] md:mb-14">
          Accredited &amp; Certified
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-10 md:gap-x-16">
          {LOGOS.map((logo) => (
            <Image
              key={logo.src}
              src={logo.src}
              alt={logo.alt}
              width={logo.w}
              height={logo.h}
              className="h-20 w-auto object-contain md:h-28"
            />
          ))}
        </div>
      </Reveal>
    </section>
  );
}
