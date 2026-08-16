"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import FeatureCard from "./FeatureCard";
import CourseModal, { type CourseDetail } from "./CourseModal";
import { COURSES } from "@/lib/courses";
import { getNextBatchLabel } from "@/lib/calendar";

export default function FeaturedGrid() {
  const [openCourse, setOpenCourse] = useState<CourseDetail | null>(null);

  return (
    <section id="destinations" className="min-w-0 pt-24 pb-16 md:pt-32 md:pb-20">
      <div className="no-scrollbar flex min-w-0 items-start gap-8 overflow-x-auto overscroll-x-contain touch-pan-x touch-pan-y pb-2 pl-6 pr-6 md:gap-[73px] md:pl-10 md:pr-10">
        {COURSES.map((course, i) => (
          <Reveal
            key={course.slug}
            delay={(i % 3) * 100}
            className="w-[300px] shrink-0 sm:w-[420px] lg:w-[560px]"
          >
            <FeatureCard
              img={course.img}
              alt={course.alt}
              eyebrow={course.eyebrow}
              title={course.title}
              description={course.paragraphs[0]}
              date={getNextBatchLabel(course)}
              onClick={() => setOpenCourse(course)}
              applyHref={course.applyHref}
              imgPositionClass={course.imgPositionClass}
              mediaClassName="relative aspect-[2/1] bg-[#e7e2d6]"
              imgSize={{ w: 1600, h: 800 }}
              sizes="560px"
            />
          </Reveal>
        ))}
      </div>

      <CourseModal course={openCourse} onClose={() => setOpenCourse(null)} />
    </section>
  );
}
