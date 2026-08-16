import Reveal from "./Reveal";

const PRICING = [
  {
    program: "100-Hour YTT",
    duration: "15 days",
    triple: "675 EUR / 750 USD",
    twin: "700 EUR / 770 USD",
    private: "750 EUR / 820 USD",
  },
  {
    program: "200-Hour YTT",
    duration: "20 days",
    triple: "990 EUR / 1,100 USD",
    twin: "1,050 EUR / 1,125 USD",
    private: "1,100 EUR / 1,200 USD",
  },
  {
    program: "15-Day Yoga Retreat",
    duration: "15 days",
    triple: "630 EUR / 700 USD",
    twin: "645 EUR / 720 USD",
    private: "700 EUR / 800 USD",
  },
  {
    program: "20-Day Yoga Retreat",
    duration: "20 days",
    triple: "900 EUR / 999 USD",
    twin: "950 EUR / 1,050 USD",
    private: "1,000 EUR / 1,100 USD",
  },
];

export default function Pricing() {
  return (
    <section className="bg-[#efeadf] px-6 py-16 md:px-10 md:py-20">
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
          <div className="mt-12 overflow-x-auto md:mt-16">
            <table className="w-full min-w-[640px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-[#22201c]/15 text-[10px] tracking-widest-plus uppercase text-[#8a8375]">
                  <th className="pb-4 pr-6 font-normal">Programme</th>
                  <th className="pb-4 pr-6 font-normal">Triple Sharing</th>
                  <th className="pb-4 pr-6 font-normal">Twin Sharing</th>
                  <th className="pb-4 font-normal">Private Room</th>
                </tr>
              </thead>
              <tbody>
                {PRICING.map((row) => (
                  <tr key={row.program} className="border-b border-[#22201c]/10">
                    <td className="py-5 pr-6">
                      <p className="font-display text-lg">{row.program}</p>
                      <p className="mt-1 text-xs text-[#8a8375]">{row.duration}</p>
                    </td>
                    <td className="py-5 pr-6 text-[#57534a]">{row.triple}</td>
                    <td className="py-5 pr-6 text-[#57534a]">{row.twin}</td>
                    <td className="py-5 text-[#57534a]">{row.private}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <p className="mt-8 max-w-xl text-xs leading-relaxed text-[#8a8375]">
            Master&apos;s Training Course add-on: 275 EUR / 299 USD. Air
            conditioning: ₹500 per room, per day. A 25% deposit confirms your
            place; the remainder is due before the course begins.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
