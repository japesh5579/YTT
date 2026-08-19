import Image from "next/image";
import RevealImage from "./RevealImage";
import Reveal from "./Reveal";
import DailySchedule from "./DailySchedule";
import CoversCarousel from "./CoversCarousel";
import { shimmerPlaceholder } from "@/lib/placeholder";
import { COURSES, type Course } from "@/lib/courses";
import { getNextBatchLabel } from "@/lib/calendar";

/** Display order and inclusion for the homepage only — /programs/[slug] is unaffected. */
const HOMEPAGE_ORDER = ["100-hour-ytt", "200-hour-ytt", "20-day-retreat", "15-day-retreat"];

/** Courses whose schedule is a duplicate of another course's — skip re-rendering their timeline. */
const SCHEDULE_HIDDEN_SLUGS = ["100-hour-ytt", "20-day-retreat"];

export default function CourseDetails() {
  const courses = HOMEPAGE_ORDER
    .map((slug) => COURSES.find((c) => c.slug === slug))
    .filter((c): c is Course => Boolean(c));

  return (
    <section id="destinations" className="min-w-0 py-16 md:py-24">
      <Reveal className="mx-auto mb-14 flex max-w-[1600px] flex-col items-center px-6 text-center md:mb-20 md:px-10">
        <span className="mb-6 h-px w-16 bg-[#22201c]/25" />
        <h2 className="font-display text-2xl font-light md:text-3xl">Course Details</h2>
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
                <div className="md:hidden">
                  {course.eyebrow && (
                    <p className="text-[10px] tracking-widest-plus uppercase text-[#8a8375]">
                      {course.eyebrow}
                    </p>
                  )}
                  <h3 className="font-display mt-2 text-2xl font-light">
                    {course.title}
                  </h3>
                </div>

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
                  <div className="hidden md:block md:text-center">
                    {course.eyebrow && (
                      <p className="text-[10px] tracking-widest-plus uppercase text-[#8a8375]">
                        {course.eyebrow}
                      </p>
                    )}
                    <h3 className="font-display mt-2 text-3xl font-light">
                      {course.title}
                    </h3>
                  </div>

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
                      className="mt-8 inline-block border border-[#33456a] bg-transparent px-6 py-3 text-xs tracking-widest-plus uppercase text-[#33456a] transition-colors hover:bg-[#33456a] hover:text-[#f7f4ee]"
                    >
                      Apply
                    </a>
                  )}
                </div>
              </div>

              {course.highlights.length > 0 && (
                <div className="mt-12 md:mt-16 md:text-center">
                  <p className="mb-4 text-[10px] tracking-widest-plus uppercase text-[#8a8375]">
                    Covers
                  </p>
                  <h4 className="font-display max-w-lg text-xl font-light leading-snug md:mx-auto md:text-2xl">
                    What You&rsquo;ll Learn
                  </h4>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-[#57534a] md:mx-auto">
                    A holistic curriculum that blends ancient yogic wisdom with modern
                    understanding, for transformation inside and out.
                  </p>
                  <div className="mt-8 max-w-xl text-left md:max-w-none">
                    <CoversCarousel items={course.highlights} />
                  </div>
                </div>
              )}

              {showSchedule && course.schedule && (
                <div className="mt-12 md:mt-16 md:text-center">
                  <p className="mb-4 text-[10px] tracking-widest-plus uppercase text-[#8a8375]">
                    Daily Schedule
                  </p>
                  <h4 className="font-display max-w-lg text-xl font-light leading-snug md:mx-auto md:text-2xl">
                    A day at Light House
                  </h4>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-[#57534a] md:mx-auto">
                    A balanced blend of ancient yogic wisdom and modern science for your
                    transformation.
                  </p>

                  <div className="mt-8 max-w-2xl text-left md:mx-auto">
                    <DailySchedule schedule={course.schedule} />
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
