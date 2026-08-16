import Reveal from "./Reveal";

export default function Newsletter() {
  return (
    <section id="reserve" className="mx-auto max-w-[1600px] px-6 py-24 md:px-10 md:py-32">
      <Reveal>
        <div className="flex flex-col items-start justify-between gap-8 border-t border-[#22201c]/10 pt-14 md:flex-row md:items-end">
          <h2 className="font-display max-w-lg text-3xl font-light leading-snug md:text-4xl">
            Ready to begin your training? Enquiries and applications are
            handled by our team directly.
          </h2>

          <form className="flex w-full max-w-sm flex-col gap-3 sm:flex-row sm:gap-0">
            <input
              type="email"
              placeholder="Email address"
              className="w-full border-b border-[#22201c]/30 bg-transparent px-1 py-3 text-sm outline-none placeholder:text-[#8a8375] focus:border-[#22201c]"
            />
            <button
              type="submit"
              className="mt-3 shrink-0 border border-[#22201c] px-6 py-3 text-xs tracking-widest-plus uppercase transition-colors hover:bg-[#22201c] hover:text-[#f7f4ee] sm:mt-0 sm:ml-3"
            >
              Enquire now
            </button>
          </form>
        </div>
      </Reveal>
    </section>
  );
}
