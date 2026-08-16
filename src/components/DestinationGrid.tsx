import Image from "next/image";
import Reveal from "./Reveal";
import RevealImage from "./RevealImage";
import { shimmerPlaceholder } from "@/lib/placeholder";

const DESTINATIONS = [
  {
    name: "Sable Point",
    place: "Nova Scotia, Canada",
    img: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1400&q=80",
  },
  {
    name: "Kōra Hills",
    place: "Nagano, Japan",
    img: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1400&q=80",
  },
  {
    name: "Terre Basse",
    place: "Provence, France",
    img: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1400&q=80",
  },
  {
    name: "Vela Cove",
    place: "Algarve, Portugal",
    img: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1400&q=80",
  },
  {
    name: "Amber Ridge",
    place: "Utah, United States",
    img: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1400&q=80",
  },
  {
    name: "Isola Piana",
    place: "Sardinia, Italy",
    img: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1400&q=80",
  },
];

export default function DestinationGrid() {
  return (
    <section id="destinations" className="mx-auto max-w-[1600px] px-6 pb-24 md:px-10 md:pb-36">
      <Reveal>
        <div className="mb-12 flex flex-col items-start justify-between gap-4 md:mb-16 md:flex-row md:items-end">
          <h2 className="font-display text-3xl font-light md:text-4xl">
            Nine places, one idea
          </h2>
          <p className="max-w-sm text-sm text-[#57534a]">
            Every destination is reachable, remote, and built around a single
            uninterrupted view.
          </p>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
        {DESTINATIONS.map((d, i) => (
          <Reveal key={d.name} delay={(i % 3) * 100}>
            <a href="#reserve" className="group block">
              <RevealImage className="relative aspect-[4/5] bg-[#e7e2d6]">
                <Image
                  src={d.img}
                  alt={`${d.name}, ${d.place}`}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  placeholder="blur"
                  blurDataURL={shimmerPlaceholder(700, 875)}
                  className="img-subtle object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                />
              </RevealImage>
              <div className="mt-4 flex items-baseline justify-between">
                <h3 className="font-display text-xl">{d.name}</h3>
                <span className="text-[10px] tracking-widest-plus uppercase text-[#8a8375]">
                  {d.place}
                </span>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
