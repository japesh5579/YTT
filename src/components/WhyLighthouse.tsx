import Image from "next/image";
import Reveal from "./Reveal";
import RevealImage from "./RevealImage";
import { shimmerPlaceholder } from "@/lib/placeholder";

export default function WhyLighthouse() {
  return (
    <section className="mx-auto min-w-0 max-w-[1600px] px-6 py-16 md:px-10 md:py-24">
        <Reveal>
          <p className="mb-4 text-xs tracking-widest-plus uppercase text-[#8a8375]">
            Where You&rsquo;ll Stay
          </p>
          <h2 className="font-display max-w-lg text-3xl font-light leading-snug md:text-4xl">
            Food &amp; Accommodation
          </h2>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-10 md:mt-14 md:grid-cols-2 md:gap-16">
          <Reveal delay={100}>
            <RevealImage className="relative aspect-[4/3] bg-[#e7e2d6]">
              <Image
                src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1200&q=80"
                alt="A guest room with a forest view at Light House"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="img-subtle object-cover"
              />
            </RevealImage>
            <h3 className="font-display mt-6 text-xl font-light md:text-2xl">
              Accommodation
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-[#57534a]">
              Located in the holy city of Rishikesh, Light House is
              surrounded by green grassland and mild forest, where the Ganga
              splits into three and the horizon opens onto the Shivalik
              foothills of the Himalayas. Our Deluxe rooms offer great
              comfort with partial forest views; Super-deluxe rooms blend
              aesthetic ambience with stunning nature views, their balconies
              opening onto lush green forest and its flora and fauna —
              parrots, Grey Hornbills, and, on lucky days, a herd of wild
              Sambar deer.
            </p>
          </Reveal>

          <Reveal delay={150}>
            <RevealImage className="relative aspect-[4/3] bg-[#e7e2d6]">
              <Image
                src="https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=1200&q=80"
                alt="A simple, home-cooked Ayurvedic vegetarian meal"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="img-subtle object-cover"
              />
            </RevealImage>
            <h3 className="font-display mt-6 text-xl font-light md:text-2xl">
              Food
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-[#57534a]">
              We serve simple, hygienic, healthy and Ayurvedic food that
              replenishes both body and mind.
            </p>
          </Reveal>
        </div>
    </section>
  );
}
