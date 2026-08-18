import Hero from "@/components/Hero";
import CourseDetails from "@/components/CourseDetails";
import ExperienceCarousel from "@/components/ExperienceCarousel";
import Teachers from "@/components/Teachers";
import WhyLighthouse from "@/components/WhyLighthouse";
import Accreditations from "@/components/Accreditations";

const SEASONAL_ITEMS = [
  {
    img: "/curriculum-meditation-v2.jpg",
    alt: "A student seated in meditation",
    eyebrow: "Curriculum",
    title: "Asana Practice",
    description:
      "Ashtanga Vinyasa and Hatha yoga, with an in-depth exploration of the twelve fundamental postures.",
    href: "/programs",
  },
  {
    img: "/curriculum-pranayama.jpg",
    alt: "A student practicing alternate-nostril breathing",
    eyebrow: "Curriculum",
    title: "Pranayama",
    description:
      "Twelve breathing techniques, including Anulom Viloma, Bhastrika, and Kapalbhati.",
    href: "/programs",
  },
  {
    img: "/curriculum-philosophy.jpg",
    alt: "A student practicing a shoulder stand asana",
    eyebrow: "Curriculum",
    title: "Yoga Philosophy",
    description:
      "Indian philosophy, the Bhagavad Gita and Ashtavakra Gita, and the Four Yogas — Karma, Bhakti, Jnana, and Raja.",
    href: "/programs",
  },
  {
    img: "/curriculum-meditation.jpg",
    alt: "A student meditating by the riverside at sunrise",
    eyebrow: "Curriculum",
    title: "Meditation",
    description:
      "Eleven meditation techniques, including chakra balancing, kundalini yoga, and mantra yoga.",
    href: "/programs",
    imgPositionClass: "object-left",
  },
];

export default function Home() {
  return (
    <>
      <Hero />
      <CourseDetails />
      <ExperienceCarousel
        heading="The Curriculum"
        description="Comprehensive instruction in Yogasanas and alignment, Yoga Anatomy, Pranayama, Mudras, Bandhas, and Yoga Philosophy."
        items={SEASONAL_ITEMS}
      />
      <Teachers />
      <WhyLighthouse />
      <Accreditations />
    </>
  );
}
