import Image from "next/image";
import Reveal from "./Reveal";
import RevealImage from "./RevealImage";
import { shimmerPlaceholder } from "@/lib/placeholder";

const TEACHERS = [
  {
    name: "Sarvadaman Banerji",
    role: "Founder — Krishnaji",
    bio: "Enlightened at the age of 36 and in meditation for over thirty years. Once a well-known actor — best remembered for playing Lord Krishna in Ramanand Sagar's Shri Krishna and Adi Shankaracharya in the National Award-winning film — he founded Light House to help others connect with the Divine Energy.",
    img: "/teacher-krishnaji-v2.jpg",
    instagram: ["@krishnasarvadaman", "@krsnasarvadaman"],
  },
  {
    name: "Alankrita Banerjee",
    role: "Programme Director · Founder, PANKH",
    bio: "Founder of PANKH — The Creative School. Has conducted over 100 meditation and stress-management workshops for international groups, institutions and corporates, and authored five books on the philosophies of life. Specialises in Yogic Philosophy and Kundalini Yoga.",
    img: "/teacher-ankita.jpg",
    instagram: ["@alankrita.banerjee.pankh"],
  },
  {
    name: "Rajat Purwal",
    role: "Lead Trainer",
    bio: "Holds a degree in Yoga and postgraduate studies in Yogacharya, with specialised knowledge in Naturopathy. Trained extensively in Hatha and Ashtanga yoga, with teachings kept aligned to modern advancements in the practice.",
    img: "/teacher-rajat.jpg",
  },
  {
    name: "Vikash Bisht",
    role: "Yoga Instructor",
    bio: "Holds a B.P.Ed in Physical Education, a PG Diploma, and an MA in Yogic Science, with ERYT 500-hour certification from Yoga Alliance USA. Trained in acupressure, naturopathy and yoga therapy, specialising in Hatha yoga.",
    img: "/teacher-vikas.jpg",
  },
];

export default function Teachers() {
  return (
    <section className="min-w-0 py-16 md:py-20">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <Reveal>
          <p className="mb-4 text-xs tracking-widest-plus uppercase text-[#8a8375]">
            Our Teachers
          </p>
          <h2 className="font-display max-w-lg text-3xl font-light leading-snug md:text-4xl">
            Meet your teachers
          </h2>
        </Reveal>
      </div>

      <div className="no-scrollbar mx-auto mt-12 flex max-w-[1600px] min-w-0 items-start gap-8 overflow-x-auto overscroll-x-contain touch-pan-x touch-pan-y pb-2 pl-6 pr-6 md:mt-16 md:gap-10 md:pl-10 md:pr-10">
        {TEACHERS.map((teacher, i) => (
          <Reveal
            key={teacher.name}
            delay={(i % 4) * 100}
            className="w-[220px] shrink-0 sm:w-[260px] md:w-[280px]"
          >
            <RevealImage className="relative aspect-square bg-[#e7e2d6]">
              <Image
                src={teacher.img}
                alt={teacher.name}
                fill
                draggable={false}
                sizes="(min-width: 768px) 25vw, 50vw"
                placeholder="blur"
                blurDataURL={shimmerPlaceholder(600, 600)}
                className="img-subtle object-cover select-none [-webkit-user-drag:none] [-webkit-touch-callout:none]"
              />
            </RevealImage>
            <h3 className="font-display mt-4 text-lg md:text-xl">{teacher.name}</h3>
            <p className="mt-1 text-[10px] tracking-widest-plus uppercase text-[#8a8375]">
              {teacher.role}
            </p>
            <p className="mt-3 text-xs leading-relaxed text-[#57534a]">{teacher.bio}</p>
            {teacher.instagram && (
              <p className="mt-3 text-xs text-[#8a8375]">
                {teacher.instagram.join(" · ")}
              </p>
            )}
          </Reveal>
        ))}
      </div>
    </section>
  );
}
