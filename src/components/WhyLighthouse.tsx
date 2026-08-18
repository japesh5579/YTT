import Image from "next/image";
import Reveal from "./Reveal";
import RevealImage from "./RevealImage";
import { shimmerPlaceholder } from "@/lib/placeholder";

export default function WhyLighthouse() {
  return (
    <>
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

      <section className="min-w-0 bg-[#efeadf] px-6 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-[1600px]">
          <Reveal>
            <p className="mb-4 text-xs tracking-widest-plus uppercase text-[#8a8375]">
              Beyond YTT
            </p>
            <h2 className="font-display max-w-lg text-3xl font-light leading-snug md:text-4xl">
              Other programmes
            </h2>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-x-10 gap-y-10 border-t border-[#22201c]/10 pt-10 sm:grid-cols-2 md:mt-14 md:pt-14">
            <Reveal delay={100}>
              <p className="text-[10px] tracking-widest-plus uppercase text-[#33456a]">
                Wellness
              </p>
              <ul className="mt-3 space-y-2 text-sm text-[#22201c]">
                <li>One Week Stress Management and Wellness</li>
                <li>Weekend Corporate Stress Management</li>
                <li>One Week Corporate Stress Management</li>
              </ul>
            </Reveal>
            <Reveal delay={150}>
              <p className="text-[10px] tracking-widest-plus uppercase text-[#33456a]">
                Volunteering
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[#57534a]">
                Karma Yoga at PANKH — teach and volunteer at our partner
                NGO, PANKH – The Creative School, with food, accommodation
                and optional wellness packages included.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

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
    </>
  );
}
