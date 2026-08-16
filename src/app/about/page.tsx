import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import RevealImage from "@/components/RevealImage";
import { shimmerPlaceholder } from "@/lib/placeholder";

export const metadata: Metadata = {
  title: "About Us — Light House",
  description:
    "The story of Light House and its founder, Krishna Sarvadaman Banerji.",
};

export default function AboutPage() {
  return (
    <>
      <section className="pt-20">
        <div className="relative aspect-[16/9] w-full overflow-hidden md:aspect-[21/9]">
          <Image
            src="/teacher-krishnaji-v2.jpg"
            alt="Krishnaji, founder of Light House"
            fill
            priority
            sizes="100vw"
            className="img-subtle object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 px-6 pb-10 md:px-10 md:pb-16">
            <Reveal>
              <p className="mb-3 text-xs tracking-widest-plus uppercase text-white/90">
                About Us
              </p>
            </Reveal>
            <Reveal delay={100}>
              <h1 className="font-display max-w-2xl text-4xl font-light leading-[1.1] text-white md:text-6xl">
                A &ldquo;Mindblowing&rdquo; Yoga Place
              </h1>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1600px] px-6 py-16 md:px-10 md:py-24">
        <Reveal>
          <p className="max-w-2xl text-sm leading-relaxed text-[#57534a] md:text-base">
            &lsquo;Yoga&rsquo; is a much abused word. In truth, Yoga is
            Enlightenment or Samadhi, which is neither a physical exercise
            nor an intellectual understanding but freedom from fear and
            greed at the root. Light House is a yoga place founded by
            Krishna Sarvadaman Banerjee and is essentially devoted to the
            Art of Spontaneous Meditation (Master&rsquo;s Training Course),
            in which once you are connected with the Cosmic Light or Energy,
            you begin to live Meditation and Yoga twenty-four hours a day.
          </p>
        </Reveal>
        <Reveal delay={100}>
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-[#57534a] md:text-base">
            Our other courses include Yoga Teacher Training, in which we
            offer intensive training in Yogasanas and alignment, Pranayama,
            Mudras and Bandhas, alongside very effective and unique
            meditation techniques taught by highly qualified and
            exceptional teachers. We also offer programmes in volunteering,
            wellness and stress management, the accent of which is
            rejuvenation of body, mind and spirit through yogic exercise,
            breathing, diet, nature cure, massage and Ayurvedic treatment —
            customised for individuals and groups.
          </p>
        </Reveal>
      </section>

      <section className="bg-[#22201c] px-6 py-20 text-[#f7f4ee] md:px-10 md:py-28">
        <div className="mx-auto max-w-[1600px]">
          <Reveal>
            <p className="mb-6 text-xs tracking-widest-plus uppercase text-[#b8b2a2]">
              Founder&rsquo;s Message
            </p>
          </Reveal>
          <Reveal delay={100}>
            <blockquote className="font-display max-w-3xl text-2xl font-light leading-snug md:text-4xl">
              &ldquo;Whosoever comes here must go back connected to the
              Divine Energy and be a Light unto oneself.&rdquo;
            </blockquote>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-[280px_1fr] md:gap-16">
            <Reveal delay={150}>
              <RevealImage className="relative aspect-square bg-[#33312b]">
                <Image
                  src="/teacher-krishnaji-v2.jpg"
                  alt="Krishna Sarvadaman Banerji"
                  fill
                  sizes="(min-width: 768px) 280px, 60vw"
                  placeholder="blur"
                  blurDataURL={shimmerPlaceholder(600, 600)}
                  className="object-cover"
                />
              </RevealImage>
              <p className="font-display mt-4 text-lg">
                Krishna Sarvadaman Banerji
              </p>
              <p className="mt-1 text-xs tracking-widest-plus uppercase text-[#8a8375]">
                Founder
              </p>
            </Reveal>

            <div className="space-y-6 text-sm leading-relaxed text-[#c9c4b6] md:text-base">
              <Reveal delay={200}>
                <p>
                  In the year 1993, when I was hit with the first flash of
                  light, I went into a profound meditation for eighteen
                  months. My spontaneous prayer was this: &ldquo;O Supreme!
                  Do not give me a Spirituality which I cannot share with
                  the rest of the world.&rdquo;
                </p>
              </Reveal>
              <Reveal delay={250}>
                <p>
                  That was the beginning of Light House. Then came the
                  total realization in 1994, where I saw the whole Universe
                  as a flicker frame to frame — and I was that Infinite
                  Light, solid, hard and real. After twenty-five years of
                  living in meditation, I finally built Light House with
                  one clear intention.
                </p>
              </Reveal>
              <Reveal delay={300}>
                <p>
                  Light House is dedicated to self-transformation, where
                  one learns the Art of Complete Surrender, spontaneously
                  releasing the psychological patterns of fear, greed,
                  anxiety, hurt and habit. We train you in Hatha and
                  Vinyasa Yoga, Pranayama, Yoga Sutras and Spontaneous
                  Kriya Meditation — living a life in awareness. I
                  personally teach Kriya Meditation; Alankrita, Rajat and
                  Gaurav teach the various aspects of yoga. All of our
                  teachers are masters in their craft, and are themselves
                  living a life of yoga.
                </p>
              </Reveal>
              <Reveal delay={350}>
                <p className="font-display text-lg italic text-[#f7f4ee] md:text-xl">
                  &ldquo;When one becomes one&rsquo;s own light, I am
                  overjoyed.&rdquo;
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
