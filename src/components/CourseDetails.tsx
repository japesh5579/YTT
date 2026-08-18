import Image from "next/image";
import RevealImage from "./RevealImage";
import Reveal from "./Reveal";
import { Timeline } from "./ui/timeline";
import { shimmerPlaceholder } from "@/lib/placeholder";
import { COURSES, groupScheduleByPeriod, type Course } from "@/lib/courses";
import { getNextBatchLabel } from "@/lib/calendar";

/** Display order and inclusion for the homepage only — /programs/[slug] is unaffected. */
const HOMEPAGE_ORDER = ["200-hour-ytt", "100-hour-ytt", "20-day-retreat", "15-day-retreat"];

/** Courses whose schedule is a duplicate of another course's — skip re-rendering their timeline. */
const SCHEDULE_HIDDEN_SLUGS = ["200-hour-ytt", "20-day-retreat"];

export default function CourseDetails() {
  const courses = HOMEPAGE_ORDER
    .map((slug) => COURSES.find((c) => c.slug === slug))
    .filter((c): c is Course => Boolean(c));

  return (
    <section id="destinations" className="min-w-0 py-16 md:py-24">
      <Reveal className="mx-auto mb-14 flex max-w-[1600px] flex-col items-center px-6 text-center md:mb-20 md:px-10">
        <span className="mb-6 h-px w-16 bg-[#22201c]/25" />
        <h2 className="font-display text-2xl font-light md:text-3xl">Full Course Details</h2>
        <p className="mt-4 max-w-md text-sm leading-relaxed text-[#57534a]">
          Everything you need to know about each programme — curriculum, schedule, dates and fees.
        </p>
      </Reveal>

      <div className="mx-auto flex max-w-[1600px] flex-col divide-y divide-[#22201c]/10 px-6 md:px-10">
        {courses.map((course) => {
          const date = getNextBatchLabel(course);
          const showSchedule = course.schedule && !SCHEDULE_HIDDEN_SLUGS.includes(course.slug);
          return (
            <Reveal
              key={course.slug}
              id={`course-${course.slug}`}
              className="scroll-mt-28 py-16 first:pt-0 md:py-20"
            >
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-16">
                <RevealImage
                  className={`relative aspect-[4/3] bg-[#e7e2d6] ${course.imgPositionClass ?? ""}`}
                >
                  <Image
                    src={course.img}
                    alt={course.alt}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    placeholder="blur"
                    blurDataURL={shimmerPlaceholder(1200, 900)}
                    className={`object-cover ${course.imgPositionClass ?? "object-center"}`}
                  />
                  {date && (
                    <span className="absolute left-4 top-4 z-10 bg-[#f7f4ee]/90 px-3 py-1.5 text-[10px] tracking-widest-plus uppercase text-[#22201c] backdrop-blur-sm">
                      {date}
                    </span>
                  )}
                </RevealImage>

                <div>
                  {course.eyebrow && (
                    <p className="text-[10px] tracking-widest-plus uppercase text-[#8a8375]">
                      {course.eyebrow}
                    </p>
                  )}
                  <h3 className="font-display mt-2 text-2xl font-light md:text-3xl">
                    {course.title}
                  </h3>

                  <div className="mt-4 space-y-4">
                    {course.paragraphs.map((p) => (
                      <p key={p} className="text-sm leading-relaxed text-[#57534a]">
                        {p}
                      </p>
                    ))}
                  </div>

                  {course.stats.length > 0 && (
                    <div className="mt-8 grid grid-cols-3 gap-4 border-t border-[#22201c]/10 pt-6">
                      {course.stats.map((stat) => (
                        <div key={stat.label}>
                          <p className="font-display text-2xl font-light md:text-3xl">
                            {stat.value}
                          </p>
                          <p className="mt-1 max-w-[14ch] text-xs leading-relaxed text-[#8a8375]">
                            {stat.label}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}

                  {course.highlights.length > 0 && (
                    <div className="mt-8 border-t border-[#22201c]/10 pt-6">
                      <p className="mb-4 text-[10px] tracking-widest-plus uppercase text-[#8a8375]">
                        Covers
                      </p>
                      <ul className="grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2">
                        {course.highlights.map((h) => (
                          <li key={h} className="text-sm text-[#22201c]">
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {course.pricing.length > 0 && (
                    <div className="mt-8 border-t border-[#22201c]/10 pt-6">
                      <p className="mb-4 text-[10px] tracking-widest-plus uppercase text-[#8a8375]">
                        Fee
                      </p>
                      <div className="space-y-2">
                        {course.pricing.map((row) => (
                          <div
                            key={row.label}
                            className="flex items-baseline justify-between text-sm"
                          >
                            <span className="text-[#57534a]">{row.label}</span>
                            <span className="text-[#22201c]">{row.price}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {course.applyHref && (
                    <a
                      href={course.applyHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-8 inline-block text-sm text-[#33456a] underline decoration-[#33456a]/40 underline-offset-4 transition-colors hover:decoration-[#33456a]"
                    >
                      Apply
                    </a>
                  )}
                </div>
              </div>

              {showSchedule && course.schedule && (
                <div className="mt-12 md:mt-16">
                  <p className="mb-4 text-[10px] tracking-widest-plus uppercase text-[#8a8375]">
                    Daily Schedule
                  </p>
                  <h4 className="font-display max-w-lg text-xl font-light leading-snug md:text-2xl">
                    A day at Light House
                  </h4>
                  <div className="mt-6">
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
              )}
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
