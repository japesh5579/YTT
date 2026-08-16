"use client";

import { useEffect } from "react";
import type { Course } from "@/lib/courses";
import { getNextBatchLabel } from "@/lib/calendar";

export type CourseDetail = Course;

export default function CourseModal({
  course,
  onClose,
}: {
  course: CourseDetail | null;
  onClose: () => void;
}) {
  const batchLabel = course ? getNextBatchLabel(course) : undefined;

  useEffect(() => {
    if (!course) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [course, onClose]);

  if (!course) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center px-4 py-8 md:px-8">
      <button
        type="button"
        aria-label="Close"
        onClick={onClose}
        className="absolute inset-0 bg-[#22201c]/70 backdrop-blur-sm"
      />

      <div className="relative flex max-h-[88vh] w-full max-w-2xl flex-col overflow-hidden bg-[#f7f4ee] shadow-2xl">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center bg-[#f7f4ee]/90 text-[#22201c] backdrop-blur-sm transition-colors hover:bg-[#f7f4ee]"
        >
          <span className="text-lg leading-none">&times;</span>
        </button>

        <div className="overflow-y-auto px-6 py-10 md:px-10 md:py-12">
          <p className="text-[10px] tracking-widest-plus uppercase text-[#8a8375]">
            {course.eyebrow}
          </p>
          <h2 className="font-display mt-2 text-2xl font-light md:text-3xl">
            {course.title}
          </h2>
          {batchLabel && (
            <p className="mt-3 inline-block bg-[#33456a]/5 px-3 py-1.5 text-[10px] tracking-widest-plus uppercase text-[#33456a]">
              {batchLabel}
            </p>
          )}

          <div className="mt-6 space-y-4">
            {course.paragraphs.map((p) => (
              <p key={p} className="text-sm leading-relaxed text-[#57534a]">
                {p}
              </p>
            ))}
          </div>

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

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
            <a
              href={`/programs/${course.slug}`}
              className="text-sm text-[#33456a] underline decoration-[#33456a]/40 underline-offset-4 transition-colors hover:decoration-[#33456a]"
            >
              Full programme details
            </a>
            {course.applyHref && (
              <a
                href={course.applyHref}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#33456a] underline decoration-[#33456a]/40 underline-offset-4 transition-colors hover:decoration-[#33456a]"
              >
                Apply
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
