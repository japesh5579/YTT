import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import RevealImage from "@/components/RevealImage";
import { Timeline } from "@/components/ui/timeline";
import { COURSES, getCourse, groupScheduleByPeriod } from "@/lib/courses";
import { getNextBatchLabel } from "@/lib/calendar";

export async function generateStaticParams() {
  return COURSES.map((course) => ({ slug: course.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/programs/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course) return {};

  return {
    title: `${course.title} — Light House`,
    description: course.paragraphs[0],
  };
}

export default async function CoursePage({
  params,
}: PageProps<"/programs/[slug]">) {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course) notFound();

  return (
    <>
      <section className="min-w-0 pt-20">
        <div className="relative aspect-[16/9] w-full overflow-hidden md:aspect-[21/9]">
          <Image
            src={course.img}
            alt={course.alt}
            fill
            priority
            sizes="100vw"
            className={`img-subtle object-cover ${course.imgPositionClass ?? ""}`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 px-6 pb-10 md:px-10 md:pb-16">
            <Reveal>
              <p className="mb-3 text-xs tracking-widest-plus uppercase text-white/90">
                {course.eyebrow}
              </p>
            </Reveal>
            <Reveal delay={100}>
              <h1 className="font-display max-w-2xl text-4xl font-light leading-[1.1] text-white md:text-6xl">
                {course.title}
              </h1>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="mx-auto min-w-0 max-w-[1600px] px-6 py-16 md:px-10 md:py-24">
        {getNextBatchLabel(course) && (
          <Reveal>
            <a
              href="/programs#calendar"
              className="mb-6 inline-block bg-[#33456a]/5 px-3 py-1.5 text-[10px] tracking-widest-plus uppercase text-[#33456a] transition-colors hover:bg-[#33456a]/10"
            >
              {getNextBatchLabel(course)} — view calendar
            </a>
          </Reveal>
        )}
        <div className="space-y-4">
          {course.paragraphs.map((p, i) => (
            <Reveal key={p} delay={100 + i * 60}>
              <p className="max-w-2xl text-sm leading-relaxed text-[#57534a] md:text-base">
                {p}
              </p>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-3 gap-6 border-t border-[#22201c]/10 pt-10 md:mt-16 md:gap-10 md:pt-14">
          {course.stats.map((stat, i) => (
            <Reveal key={stat.label} delay={200 + i * 80}>
              <p className="font-display text-3xl font-light md:text-5xl">
                {stat.value}
              </p>
              <p className="mt-2 max-w-[14ch] text-xs leading-relaxed text-[#8a8375]">
                {stat.label}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {course.highlights.length > 0 && (
        <section className="mx-auto min-w-0 max-w-[1600px] px-6 pb-16 md:px-10 md:pb-24">
          <Reveal>
            <p className="mb-4 text-xs tracking-widest-plus uppercase text-[#8a8375]">
              What We Cover
            </p>
            <h2 className="font-display max-w-lg text-3xl font-light leading-snug md:text-4xl">
              The curriculum
            </h2>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 gap-x-10 gap-y-3 border-t border-[#22201c]/10 pt-10 sm:grid-cols-2 md:mt-14 md:pt-14">
            {course.highlights.map((item, i) => (
              <Reveal key={item} delay={(i % 6) * 60}>
                <p className="border-b border-[#22201c]/10 pb-3 text-sm text-[#22201c]">
                  {item}
                </p>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {course.secondaryImg && (
        <section className="min-w-0 w-full">
          <RevealImage className="relative h-[50vh] min-h-[320px] w-full bg-[#e7e2d6]">
            <Image
              src={course.secondaryImg}
              alt={course.secondaryAlt ?? course.title}
              fill
              sizes="100vw"
              className="img-subtle object-cover"
            />
          </RevealImage>
        </section>
      )}

      {course.schedule && (
        <section className="min-w-0 bg-[#efeadf] px-6 py-16 md:px-10 md:py-24">
          <div className="mx-auto min-w-0 max-w-[1600px]">
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
            <div className="mt-6 md:mt-10">
              <Timeline
                data={groupScheduleByPeriod(course.schedule).map((group) => ({
                  title: group.period,
                  content: (
                    <div key={group.period} className="space-y-3">
                      {group.rows.map((row) => (
                        <div
                          key={row.time}
                          className="flex min-w-0 flex-col gap-1 border-b border-[#22201c]/10 pb-3 sm:flex-row sm:items-baseline sm:gap-6"
                        >
                          <span className="shrink-0 text-xs tracking-widest-plus uppercase text-[#8a8375] sm:w-44">
                            {row.time}
                          </span>
                          <span className="min-w-0 text-sm text-[#22201c]">
                            {row.activity}
                          </span>
                        </div>
                      ))}
                    </div>
                  ),
                }))}
              />
            </div>
          </div>
        </section>
      )}

      {course.pricing.length > 0 && (
        <section className="mx-auto min-w-0 max-w-[1600px] px-6 py-16 md:px-10 md:py-24">
          <Reveal>
            <p className="mb-4 text-xs tracking-widest-plus uppercase text-[#8a8375]">
              Course Fee
            </p>
            <h2 className="font-display max-w-lg text-3xl font-light leading-snug md:text-4xl">
              Investment in your training
            </h2>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 gap-4 border-t border-[#22201c]/10 pt-10 sm:grid-cols-2 md:mt-14 md:grid-cols-3 md:pt-14">
            {course.pricing.map((row, i) => (
              <Reveal key={row.label} delay={i * 70}>
                <div className="border border-[#22201c]/15 px-6 py-8">
                  <p className="text-[10px] tracking-widest-plus uppercase text-[#8a8375]">
                    {row.label}
                  </p>
                  <p className="font-display mt-3 text-2xl font-light leading-snug">
                    {row.price}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      <section className="min-w-0 bg-[#22201c] px-6 py-16 text-[#f7f4ee] md:px-10 md:py-24">
        <div className="mx-auto max-w-[1600px]">
          <Reveal>
            <p className="mb-4 text-xs tracking-widest-plus uppercase text-[#b8b2a2]">
              Explore Further
            </p>
            <h2 className="font-display max-w-lg text-2xl font-light leading-snug md:text-3xl">
              See every programme, or apply directly
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <div className="mt-8 flex flex-wrap gap-6 md:mt-10">
              <a
                href="/programs"
                className="text-sm text-[#f7f4ee] underline decoration-[#f7f4ee]/40 underline-offset-4 transition-colors hover:decoration-[#f7f4ee]"
              >
                All programmes
              </a>
              <a
                href={course.applyHref ?? "mailto:lighthousekrishna@gmail.com"}
                target={course.applyHref ? "_blank" : undefined}
                rel={course.applyHref ? "noopener noreferrer" : undefined}
                className="text-sm text-[#f7f4ee] underline decoration-[#f7f4ee]/40 underline-offset-4 transition-colors hover:decoration-[#f7f4ee]"
              >
                Apply now
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
