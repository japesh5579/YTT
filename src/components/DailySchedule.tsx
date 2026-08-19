import {
  Sun,
  CloudSun,
  Sunset,
  Moon,
  Droplet,
  Flower2,
  Wind,
  Coffee,
  Soup,
  BookOpen,
  Activity,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { Timeline } from "./ui/timeline";
import { groupScheduleByPeriod, type Course } from "@/lib/courses";

const PERIOD_ICON: Record<string, LucideIcon> = {
  Morning: Sun,
  Midday: CloudSun,
  Afternoon: Sunset,
  Evening: Moon,
};

const PERIOD_EMOJI: Record<string, string> = {
  Morning: "☀️",
  Midday: "🌤️",
  Afternoon: "🌇",
  Evening: "🌙",
};

function getActivityIcon(activity: string): LucideIcon {
  const a = activity.toLowerCase();
  if (a.includes("shatkarma") || a.includes("cleans")) return Droplet;
  if (a.includes("pranayam")) return Wind;
  if (a.includes("tea")) return Coffee;
  if (a.includes("breakfast")) return Coffee;
  if (a.includes("lunch") || a.includes("dinner")) return Soup;
  if (a.includes("anatomy") || a.includes("philosophy")) return BookOpen;
  if (a.includes("alignment")) return Activity;
  if (a.includes("meditat") || a.includes("kriya") || a.includes("aura") || a.includes("mantra"))
    return Sparkles;
  if (a.includes("yoga") || a.includes("asana")) return Flower2;
  return Activity;
}

export default function DailySchedule({ schedule }: { schedule: NonNullable<Course["schedule"]> }) {
  const groups = groupScheduleByPeriod(schedule);

  return (
    <>
      {/* Mobile: card-per-period design */}
      <div className="space-y-6 md:hidden">
        {groups.map((group) => {
          const PeriodIcon = PERIOD_ICON[group.period] ?? Sun;
          return (
            <div key={group.period} className="border border-[#22201c]/10 bg-[#f7f4ee] p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#a9762d]/10">
                  <PeriodIcon className="h-5 w-5 text-[#a9762d]" strokeWidth={1.5} />
                </div>
                <p className="text-xs tracking-widest-plus uppercase text-[#a9762d]">
                  {group.period}
                </p>
              </div>

              <div className="relative mt-5">
                {group.rows.length > 1 && (
                  <span className="absolute left-[5px] top-2 bottom-2 w-px bg-[#22201c]/15" />
                )}
                <div className="space-y-0">
                  {group.rows.map((row, i) => {
                    const RowIcon = getActivityIcon(row.activity);
                    return (
                      <div
                        key={row.time}
                        className={`relative flex items-center gap-4 py-3 ${
                          i !== group.rows.length - 1 ? "border-b border-[#22201c]/10" : ""
                        }`}
                      >
                        <span className="relative z-10 h-[11px] w-[11px] shrink-0 rounded-full border-2 border-[#f7f4ee] bg-[#a9762d]" />
                        <span className="w-32 shrink-0 text-xs text-[#a9762d] sm:w-40">
                          {row.time}
                        </span>
                        <span className="min-w-0 flex-1 text-sm text-[#22201c]">
                          {row.activity}
                        </span>
                        <RowIcon className="h-4 w-4 shrink-0 text-[#8a8375]" strokeWidth={1.5} />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Desktop: original animated growing-line timeline */}
      <div className="hidden md:block">
        <Timeline
          data={groups.map((group) => ({
            title: `${PERIOD_EMOJI[group.period] ?? ""} ${group.period}`.trim(),
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
                    <span className="min-w-0 text-sm text-[#22201c]">{row.activity}</span>
                  </div>
                ))}
              </div>
            ),
          }))}
        />
      </div>
    </>
  );
}
