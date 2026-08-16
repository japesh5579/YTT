export default function Footer() {
  return (
    <footer className="mt-auto bg-[#efeadf] px-6 py-16 md:px-10">
      <div className="mx-auto grid max-w-[1600px] grid-cols-2 gap-10 text-sm md:grid-cols-4">
        <div className="col-span-2 md:col-span-1">
          <p className="font-display text-lg tracking-widest-plus uppercase">
            Lighthouse YTT
          </p>
          <p className="mt-4 max-w-[220px] text-xs leading-relaxed text-[#57534a]">
            A yoga teacher training and retreat centre on the banks of the
            Ganges, Rishikesh.
          </p>
          <p className="mt-4 max-w-[220px] text-xs leading-relaxed text-[#8a8375]">
            Plot 96, Nirmal-C, Tehri Visthapith, Rishikesh, Uttarakhand
            249204, India
          </p>
        </div>

        <div>
          <p className="mb-4 text-[10px] tracking-widest-plus uppercase text-[#8a8375]">
            Courses
          </p>
          <ul className="space-y-2 text-[#57534a]">
            <li>100-Hour YTT</li>
            <li>200-Hour YTT</li>
            <li>Yoga Retreats</li>
            <li>Master's Training Course</li>
          </ul>
        </div>

        <div>
          <p className="mb-4 text-[10px] tracking-widest-plus uppercase text-[#8a8375]">
            Company
          </p>
          <ul className="space-y-2 text-[#57534a]">
            <li>
              <a href="/about" className="transition-colors hover:text-[#22201c]">
                Philosophy
              </a>
            </li>
            <li>
              <a href="/#journal" className="transition-colors hover:text-[#22201c]">
                Curriculum
              </a>
            </li>
            <li>Careers</li>
            <li>Press</li>
          </ul>
        </div>

        <div>
          <p className="mb-4 text-[10px] tracking-widest-plus uppercase text-[#8a8375]">
            Contact
          </p>
          <ul className="space-y-2 text-[#57534a]">
            <li>lighthousekrishna@gmail.com</li>
            <li>+91 9495415951</li>
            <li>@lighthousekrishna</li>
            <li>@lighthousekrsna</li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-14 flex max-w-[1600px] flex-col-reverse items-start justify-between gap-4 border-t border-[#22201c]/10 pt-6 text-[10px] tracking-widest-plus uppercase text-[#8a8375] md:flex-row md:items-center">
        <span suppressHydrationWarning>© {new Date().getFullYear()} Lighthouse YTT</span>
        <div className="flex gap-6">
          <span>Privacy</span>
          <span>Terms</span>
        </div>
      </div>
    </footer>
  );
}
