import Reveal from "./Reveal";

export default function Intro() {
  return (
    <section id="philosophy" className="mx-auto max-w-[1600px] px-6 py-24 md:px-10 md:py-36">
      <Reveal>
        <p className="mb-6 text-xs tracking-widest-plus uppercase text-[#8a8375]">
          Philosophy
        </p>
      </Reveal>
      <Reveal delay={100}>
        <h2 className="font-display max-w-4xl text-3xl font-light leading-snug md:text-5xl">
          Yoga is not a posture. It is freedom from fear, at the root.
        </h2>
      </Reveal>
      <Reveal delay={200}>
        <p className="mt-8 max-w-xl text-sm leading-relaxed text-[#57534a] md:text-base">
          Light House was founded by Krishnaji, and is devoted to the Art of
          Spontaneous Meditation — connecting students to the Cosmic Light
          until yoga is no longer a practice confined to the mat, but a way
          of living, twenty-four hours a day.
        </p>
      </Reveal>
      <Reveal delay={300}>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-[#57534a] md:text-base">
          Alongside this, our Yoga Teacher Training offers intensive study in
          Yogasanas, alignment, Pranayama, Mudras and Bandhas, taught by
          highly qualified teachers — together with programmes in wellness,
          stress management and volunteering, rejuvenating body, mind and
          spirit through yogic exercise, breathwork, nature cure and
          Ayurveda.
        </p>
      </Reveal>
    </section>
  );
}
