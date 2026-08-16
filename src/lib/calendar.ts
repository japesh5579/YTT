import type { Course } from "./courses";

/** This course's batches that haven't started yet, earliest first. */
export function getFutureBatches(course: Course) {
  if (!course.batches) return [];
  return course.batches
    .filter((batch) => new Date(batch.startDate) > new Date())
    .sort((a, b) => a.startDate.localeCompare(b.startDate));
}

/**
 * Compact badge text for a course tile/photo — shows the real next batch
 * date for this specific course (recomputed live, so it never goes stale,
 * and never shows a batch that's already started), or a fixed note for
 * courses without a batch calendar (e.g. MTC).
 */
export function getNextBatchLabel(course: Course): string | undefined {
  const [next] = getFutureBatches(course);
  return next ? `Next: ${next.month} ${next.range}` : course.scheduleNote;
}
