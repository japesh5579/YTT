import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import { COURSES } from "@/lib/courses";
import { getFutureBatches } from "@/lib/calendar";

export const metadata: Metadata = {
  title: "Programs — Light House",
  description:
    "Yoga Teacher Training, Yoga Retreats and the Master's Training Course at Light House, Rishikesh — curriculum, schedule, dates and fees.",
};

const CURRICULUM = [
  "8-Limbed Ashtanga Yoga",
  "Yoga Alignment",
  "Pranayama and Shatkarma",
  "6 Schools of Thought",
  "Upanishads",
  "Bhagavad Gita",
  "Ashtavakra Gita",
  "Introduction to Chakras and Kundalini",
  "Human Anatomy and Physiology",
  "Self-healing techniques with Sound and Aura Healing",
  "Kriya Meditation / Cosmutation",
  "Massage and Cleansing",
];

const SCHEDULE = [
  { time: "07:00 – 07:30 AM", activity: "Shatkarma (first 4 days)" },
  { time: "07:30 – 09:00 AM", activity: "Vinyasa Yoga" },
  { time: "09:00 – 09:30 AM", activity: "Pranayam" },
  { time: "10:00 – 10:30 AM", activity: "Breakfast" },
  { time: "11:00 – 11:45 AM", activity: "Anatomy" },
  { time: "11:45 – 12:30 PM", activity: "Yoga Alignment" },
  { time: "01:00 – 02:00 PM", activity: "Lunch" },
  { time: "03:30 – 04:00 PM", activity: "Tea Break" },
  { time: "04:00 – 05:00 PM", activity: "Yoga Philosophy" },
  { time: "05:00 – 06:30 PM", activity: "Hatha Yoga" },
  { time: "06:30 – 07:30 PM", activity: "Meditation / Mantra Chanting / Aura Healing / Kriya" },
  { time: "08:00 – 09:00 PM", activity: "Dinner" },
];

const INCLUSIONS = [
  "Accommodation in our serene and elegant rooms",
  "3 vegetarian meals per day",
  "Yoga manual",
  "Jal Neti & Sutra Neti material",
  "Bhagavad Gita text",
  "A book on Saints of India",
  "Memento and certificate on successful completion of course",
];

const STATS = [
  { value: "5 KM", label: "Riverside on the Ganga beach" },
  { value: "1,200", label: "Sq ft enclosed yoga hall" },
  { value: "360°", label: "Mountain-view open terrace" },
  { value: "1.5 KM", label: "Of green lawn for yoga & sport" },
];

const SPECIALTY = [
  "Highly qualified and experienced faculty",
  "Dual certification — Yoga Alliance International and World Yoga Federation",
  "Dedicated spa room",
  "Delectable, nutritious home-cooked vegetarian food",
  "Mini library for research and study",
  "AC and non-AC accommodation",
];

const YTT_SLUGS = ["100-hour-ytt", "200-hour-ytt"];
const YRT_SLUGS = ["15-day-retreat", "20-day-retreat"];

const YTT_COURSES = COURSES.filter((c) => YTT_SLUGS.includes(c.slug));
const YRT_COURSES = COURSES.filter((c) => YRT_SLUGS.includes(c.slug));

const FEES_EUR = [
  {
    program: "100 Hours YTT",
    triple: "675 EUR / 750 USD",
    twin: "700 EUR / 770 USD",
    single: "750 EUR / 820 USD",
  },
  {
    program: "200 Hours YTT",
    triple: "990 EUR / 1,100 USD",
    twin: "1,050 EUR / 1,125 USD",
    single: "1,100 EUR / 1,200 USD",
  },
  {
    program: "15-Day Yoga Retreat",
    triple: "630 EUR / 700 USD",
    twin: "645 EUR / 720 USD",
    single: "700 EUR / 800 USD",
  },
  {
    program: "20-Day Yoga Retreat",
    triple: "900 EUR / 999 USD",
    twin: "950 EUR / 1,050 USD",
    single: "1,000 EUR / 1,100 USD",
  },
];

const FEES_INR = [
  { program: "100 Hours YTT", shared: "50,000 INR", single: "60,000 INR" },
  { program: "200 Hours YTT", shared: "60,000 INR", single: "70,000 INR" },
];

const GUIDELINES = [
  "Attendance is mandatory at all programme activities.",
  "Consumption of meat, fish, eggs, coffee, alcohol, tobacco and drugs is strictly forbidden. Tea is permitted.",
  "Mobile phones and laptops may only be used during breaks and in your room, as part of a digital detox for learning.",
  "No gadgets, including smartwatches, are permitted in the yoga hall.",
  "Modest, comfortable clothing is required — sleeveless tops and shorts are not permitted.",
];

const REFUND_POLICY = [
  "Course fees are non-refundable — please register only after your visa and flight are confirmed.",
  "A 25% advance deposit is required to confirm your place; the remaining 75% is due before the course begins.",
  "If you withdraw, re-admission is possible within a 3-month window, with your advance payment adjusted accordingly.",
  "No refund is given for dismissal due to misconduct, or for voluntary self-withdrawal.",
  "If Light House cancels a programme, you may attend one of the next three sessions, or receive a full refund.",
];

export default function ProgramsPage() {
  return (
    <>
      <section className="min-w-0 pt-20">
        <div className="relative aspect-[16/9] w-full overflow-hidden md:aspect-[21/9]">
          <Image
            src="/programs-banner.jpg"
            alt="Graduates of the Light House Yoga Teacher Training holding certificates"
            fill
            priority
            sizes="100vw"
            className="img-subtle object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 px-6 pb-10 md:px-10 md:pb-16">
            <Reveal>
              <p className="mb-3 text-xs tracking-widest-plus uppercase text-white/90">
                Dual Certification — 100 &amp; 200 Hours
              </p>
            </Reveal>
            <Reveal delay={100}>
              <h1 className="font-display max-w-2xl text-4xl font-light leading-[1.1] text-white md:text-6xl">
                Yoga Teacher Training
              </h1>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="mx-auto min-w-0 max-w-[1600px] px-6 py-16 md:px-10 md:py-24">
        <Reveal>
          <p className="max-w-2xl text-sm leading-relaxed text-[#57534a] md:text-base">
            An intensive training in Yogasanas and alignment, Pranayama,
            Mudras and Bandhas, alongside very effective and unique
            meditation techniques, taught by highly qualified and
            exceptional teachers. We are affiliated to Yoga Alliance
            International and the World Yoga Federation — after successful
            completion of this course, you can become a Certified Yoga
            Teacher (CYT).
          </p>
        </Reveal>
        <Reveal delay={100}>
          <p className="mt-6 max-w-2xl text-sm text-[#8a8375]">
            100 Hours YTT — 15 days · 200 Hours YTT — 20 days · Yoga
            Retreats also available for 15 or 20 days.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto min-w-0 max-w-[1600px] px-6 pb-16 md:px-10 md:pb-24">
        <Reveal>
          <p className="mb-4 text-xs tracking-widest-plus uppercase text-[#8a8375]">
            What We Cover
          </p>
          <h2 className="font-display max-w-lg text-3xl font-light leading-snug md:text-4xl">
            The curriculum
          </h2>
        </Reveal>
        <div className="mt-10 grid grid-cols-1 gap-x-10 gap-y-3 border-t border-[#22201c]/10 pt-10 sm:grid-cols-2 md:mt-14 md:grid-cols-3 md:pt-14">
          {CURRICULUM.map((item, i) => (
            <Reveal key={item} delay={(i % 6) * 60}>
              <p className="border-b border-[#22201c]/10 pb-3 text-sm text-[#22201c]">
                {item}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="min-w-0 bg-[#efeadf] px-6 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-[1600px]">
          <Reveal>
            <p className="mb-4 text-xs tracking-widest-plus uppercase text-[#8a8375]">
              Daily Schedule
            </p>
            <h2 className="font-display max-w-lg text-3xl font-light leading-snug md:text-4xl">
              A day at Light House
            </h2>
            <p className="mt-4 max-w-lg text-xs text-[#8a8375]">
              The itinerary remains the same throughout, though schedules
              may be subject to change.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <div className="mt-10 overflow-x-auto md:mt-14">
              <table className="w-full min-w-[420px] border-collapse text-left text-sm">
                <tbody>
                  {SCHEDULE.map((row) => (
                    <tr key={row.time} className="border-b border-[#22201c]/10">
                      <td className="py-4 pr-6 text-[#8a8375]">{row.time}</td>
                      <td className="py-4 text-[#22201c]">{row.activity}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="min-w-0 bg-[#22201c] px-6 py-16 text-[#f7f4ee] md:px-10 md:py-24">
        <div className="mx-auto max-w-[1600px]">
          <Reveal>
            <p className="mb-4 text-xs tracking-widest-plus uppercase text-[#b8b2a2]">
              Our Specialty
            </p>
            <h2 className="font-display max-w-lg text-2xl font-light leading-snug md:text-3xl">
              Why train here
            </h2>
          </Reveal>

          <div className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 border-t border-[#f7f4ee]/10 pt-10 md:mt-14 md:grid-cols-4 md:pt-14">
            {STATS.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 60}>
                <p className="font-display text-4xl font-light md:text-5xl">
                  {stat.value}
                </p>
                <p className="mt-2 max-w-[16ch] text-xs leading-relaxed text-[#b8b2a2]">
                  {stat.label}
                </p>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-14 max-w-[1600px] grid grid-cols-1 gap-14 md:mt-20 md:grid-cols-2 md:gap-20">
          <div>
            <p className="mb-4 text-xs tracking-widest-plus uppercase text-[#b8b2a2]">
              And Also
            </p>
            <ul className="space-y-4">
              {SPECIALTY.map((item, i) => (
                <Reveal key={item} delay={(i % 5) * 60}>
                  <li className="border-t border-[#f7f4ee]/10 pt-4 text-sm leading-relaxed text-[#c9c4b6]">
                    {item}
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>

          <div>
            <Reveal delay={100}>
              <p className="mb-4 text-xs tracking-widest-plus uppercase text-[#b8b2a2]">
                Inclusions &amp; Takeaways
              </p>
              <h2 className="font-display max-w-lg text-2xl font-light leading-snug md:text-3xl">
                What&rsquo;s included
              </h2>
            </Reveal>
            <ul className="mt-8 space-y-4 md:mt-10">
              {INCLUSIONS.map((item, i) => (
                <Reveal key={item} delay={200 + (i % 5) * 60}>
                  <li className="border-t border-[#f7f4ee]/10 pt-4 text-sm leading-relaxed text-[#c9c4b6]">
                    {item}
                  </li>
                </Reveal>
              ))}
            </ul>

            <Reveal delay={300}>
              <p className="mt-10 text-xs tracking-widest-plus uppercase text-[#b8b2a2] md:mt-14">
                Eligibility
              </p>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-[#c9c4b6]">
                All courses require a fundamental grasp of the English
                language, since it is our medium of instruction. A
                foundational understanding of yoga postures and philosophy
                is beneficial but not mandatory — a strong sense of
                self-motivation and discipline is what matters most.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="calendar" className="mx-auto min-w-0 max-w-[1600px] px-6 py-16 md:px-10 md:py-24">
        <Reveal>
          <p className="mb-4 text-xs tracking-widest-plus uppercase text-[#8a8375]">
            Course Calendar
          </p>
          <h2 className="font-display max-w-lg text-3xl font-light leading-snug md:text-4xl">
            Upcoming batches
          </h2>
          <p className="mt-4 max-w-lg text-sm text-[#57534a]">
            4–22 slots available per batch.
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-14 md:mt-14 md:grid-cols-2 md:gap-20">
          {[
            { heading: "Yoga Teacher Training (YTT)", courses: YTT_COURSES },
            { heading: "Yoga Retreats (YRT)", courses: YRT_COURSES },
          ].map((group) => (
            <div key={group.heading}>
              <Reveal>
                <p className="mb-6 text-xs tracking-widest-plus uppercase text-[#8a8375]">
                  {group.heading}
                </p>
              </Reveal>
              <div className="space-y-8">
                {group.courses.map((course, i) => {
                  const batches = getFutureBatches(course);
                  return (
                    <Reveal key={course.slug} delay={i * 80}>
                      <p className="font-display text-lg">{course.title}</p>
                      {batches.length > 0 ? (
                        <div className="mt-3 flex flex-wrap gap-3">
                          {batches.map((batch) => (
                            <span
                              key={`${batch.month}-${batch.year}`}
                              className="border border-[#22201c]/15 px-3 py-1.5 text-xs text-[#57534a]"
                            >
                              {batch.range} {batch.month} {batch.year}
                            </span>
                          ))}
                        </div>
                      ) : (
                        <p className="mt-3 text-xs text-[#8a8375]">
                          New dates being finalised — get in touch.
                        </p>
                      )}
                    </Reveal>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="min-w-0 bg-[#efeadf] px-6 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-[1600px]">
          <Reveal>
            <p className="mb-4 text-xs tracking-widest-plus uppercase text-[#8a8375]">
              Course Fee
            </p>
            <h2 className="font-display max-w-lg text-3xl font-light leading-snug md:text-4xl">
              Investment in your training
            </h2>
          </Reveal>

          <Reveal delay={100}>
            <div className="mt-10 overflow-x-auto md:mt-14">
              <table className="w-full min-w-[640px] border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-[#22201c]/15 text-[10px] tracking-widest-plus uppercase text-[#8a8375]">
                    <th className="pb-4 pr-6 font-normal">Programme</th>
                    <th className="pb-4 pr-6 font-normal">Triple Sharing</th>
                    <th className="pb-4 pr-6 font-normal">Twin Sharing</th>
                    <th className="pb-4 font-normal">Single Room</th>
                  </tr>
                </thead>
                <tbody>
                  {FEES_EUR.map((row) => (
                    <tr key={row.program} className="border-b border-[#22201c]/10">
                      <td className="py-5 pr-6 font-display text-lg">{row.program}</td>
                      <td className="py-5 pr-6 text-[#57534a]">{row.triple}</td>
                      <td className="py-5 pr-6 text-[#57534a]">{row.twin}</td>
                      <td className="py-5 text-[#57534a]">{row.single}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="mt-14 overflow-x-auto md:mt-20">
              <p className="mb-6 text-xs tracking-widest-plus uppercase text-[#8a8375]">
                Fees in INR
              </p>
              <table className="w-full min-w-[420px] border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-[#22201c]/15 text-[10px] tracking-widest-plus uppercase text-[#8a8375]">
                    <th className="pb-4 pr-6 font-normal">Programme</th>
                    <th className="pb-4 pr-6 font-normal">Shared Accommodation</th>
                    <th className="pb-4 font-normal">Private Room</th>
                  </tr>
                </thead>
                <tbody>
                  {FEES_INR.map((row) => (
                    <tr key={row.program} className="border-b border-[#22201c]/10">
                      <td className="py-5 pr-6 font-display text-lg">{row.program}</td>
                      <td className="py-5 pr-6 text-[#57534a]">{row.shared}</td>
                      <td className="py-5 text-[#57534a]">{row.single}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-10 max-w-xl text-xs leading-relaxed text-[#8a8375] md:mt-14">
              Dual certification is available only for the 200-Hour YTT
              course, and is subject to an extra payment. Accommodation is
              assigned on a first-come, first-served basis. Air
              conditioning is available at an additional ₹500 (~$6 USD) per
              room, per day, shared among occupants. Rates in EUR &amp; USD
              are indicative — the market rate at the time of booking
              applies.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto min-w-0 max-w-[1600px] px-6 py-16 md:px-10 md:py-24">
        <Reveal>
          <p className="mb-4 text-xs tracking-widest-plus uppercase text-[#8a8375]">
            Optional — Kriya Meditation Course
          </p>
          <h2 className="font-display max-w-lg text-3xl font-light leading-snug md:text-4xl">
            Master&rsquo;s Training Course
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-[#57534a] md:text-base">
            Yoga transcends mere body alignment and philosophical study. To
            imbue our students with a profound understanding of its true
            essence, our programme offers the opportunity to attend the
            Master&rsquo;s Training Course (MTC), taught directly by
            Krishnaji. This is not a traditional meditation course, but a
            Cosmutation, in which the Cosmic Energy slowly mutates and
            dismantles the psyche&rsquo;s blockages. In this meditation,
            there is no meditator, no effort, and therefore no
            psychological conflict.
          </p>
        </Reveal>
        <Reveal delay={200}>
          <div className="mt-10 flex flex-col gap-8 border-t border-[#22201c]/10 pt-10 sm:flex-row sm:gap-16">
            <div>
              <p className="text-[10px] tracking-widest-plus uppercase text-[#8a8375]">
                Add-on Fee
              </p>
              <p className="font-display mt-2 text-xl">275 EUR / 299 USD</p>
            </div>
            <div>
              <p className="text-[10px] tracking-widest-plus uppercase text-[#8a8375]">
                Certification
              </p>
              <p className="mt-2 max-w-sm text-sm leading-relaxed text-[#57534a]">
                Participants are awarded the title of YOGI (male) or YOGINI
                (female), given only to those who touch the Cosmic Energy —
                entirely at the Master&rsquo;s discretion, and independent
                of admission to YTT or YRT.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="min-w-0 bg-[#efeadf] px-6 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-[1600px] grid grid-cols-1 gap-14 md:grid-cols-2 md:gap-20">
          <div>
            <Reveal>
              <p className="mb-4 text-xs tracking-widest-plus uppercase text-[#8a8375]">
                Guidelines
              </p>
              <h2 className="font-display max-w-lg text-2xl font-light leading-snug md:text-3xl">
                Code of conduct
              </h2>
            </Reveal>
            <ul className="mt-8 space-y-4 md:mt-10">
              {GUIDELINES.map((item, i) => (
                <Reveal key={item} delay={(i % 5) * 60}>
                  <li className="border-t border-[#22201c]/10 pt-4 text-sm leading-relaxed text-[#57534a]">
                    {item}
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>

          <div>
            <Reveal delay={100}>
              <p className="mb-4 text-xs tracking-widest-plus uppercase text-[#8a8375]">
                Terms
              </p>
              <h2 className="font-display max-w-lg text-2xl font-light leading-snug md:text-3xl">
                Refund policy
              </h2>
            </Reveal>
            <ul className="mt-8 space-y-4 md:mt-10">
              {REFUND_POLICY.map((item, i) => (
                <Reveal key={item} delay={150 + (i % 5) * 60}>
                  <li className="border-t border-[#22201c]/10 pt-4 text-sm leading-relaxed text-[#57534a]">
                    {item}
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
