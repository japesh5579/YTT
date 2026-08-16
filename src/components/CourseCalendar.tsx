import Reveal from "./Reveal";

const SESSIONS = [
  { program: "100-Hour YTT", duration: "15 days", dates: "01 – 15 November 2026" },
  { program: "200-Hour YTT", duration: "20 days", dates: "01 – 20 November 2026" },
  { program: "15-Day Yoga Retreat", duration: "15 days", dates: "01 – 15 November 2026" },
  { program: "20-Day Yoga Retreat", duration: "20 days", dates: "01 – 20 November 2026" },
];

export default function CourseCalendar() {
  return (
    <section className="mx-auto max-w-[1600px] px-6 py-16 md:px-10 md:py-20">
      <Reveal>
        <div className="mb-12 flex flex-col items-start justify-between gap-4 md:mb-16 md:flex-row md:items-end">
          <div>
            <p className="mb-4 text-xs tracking-widest-plus uppercase text-[#8a8375]">
              Course Calendar
            </p>
            <h2 className="font-display text-3xl font-light md:text-4xl">
              Upcoming Sessions
            </h2>
          </div>
          <p className="max-w-sm text-sm text-[#57534a]">
            Registrations are open. The next Master&apos;s Training Course
            runs 25–29 July 2026.
          </p>
        </div>
      </Reveal>

      <Reveal delay={100}>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-[#22201c]/15 text-[10px] tracking-widest-plus uppercase text-[#8a8375]">
                <th className="pb-4 pr-6 font-normal">Programme</th>
                <th className="pb-4 pr-6 font-normal">Duration</th>
                <th className="pb-4 pr-6 font-normal">Dates</th>
                <th className="pb-4 font-normal">&nbsp;</th>
              </tr>
            </thead>
            <tbody>
              {SESSIONS.map((session) => (
                <tr key={session.program} className="border-b border-[#22201c]/10">
                  <td className="py-5 pr-6">
                    <p className="font-display text-lg">{session.program}</p>
                  </td>
                  <td className="py-5 pr-6 text-[#57534a]">{session.duration}</td>
                  <td className="py-5 pr-6 text-[#57534a]">{session.dates}</td>
                  <td className="py-5">
                    <a
                      href="#reserve"
                      className="text-sm text-[#33456a] underline decoration-[#33456a]/40 underline-offset-4 transition-colors hover:decoration-[#33456a]"
                    >
                      Apply
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Reveal>
    </section>
  );
}
