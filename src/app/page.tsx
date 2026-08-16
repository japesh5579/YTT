import Hero from "@/components/Hero";
import FeaturedGrid from "@/components/FeaturedGrid";
import ExperienceCarousel from "@/components/ExperienceCarousel";
import Teachers from "@/components/Teachers";
import Accreditations from "@/components/Accreditations";
import Newsletter from "@/components/Newsletter";

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

const WORLD_ITEMS = [
  {
    img: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1400&q=80",
    alt: "A private residence terrace at Vela Cove, Algarve",
    eyebrow: "Highlight",
    title: "Dual Certification",
    description:
      "Graduate certified by both Yoga Alliance International and the World Yoga Federation.",
    href: "/programs",
  },
  {
    img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1400&q=80",
    alt: "A timber pathway used for private transfers",
    eyebrow: "Highlight",
    title: "Placement Assistance",
    description:
      "Structured support to help graduates find teaching opportunities after certification.",
    href: "/programs",
  },
  {
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80",
    alt: "A minimal stone and timber interior",
    eyebrow: "Highlight",
    title: "Aura Healing & Meditation",
    description: "Guided sessions in aura healing, alongside daily dynamic meditation.",
    href: "#journal",
  },
  {
    img: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1400&q=80",
    alt: "Coastline at Sable Point, Nova Scotia",
    eyebrow: "Highlight",
    title: "Karma Yoga at PANKH",
    description:
      "Selfless service opportunities teaching and volunteering at the PANKH NGO school.",
    href: "#reserve",
  },
  {
    img: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1400&q=80",
    alt: "Forested hills near Kōra Hills, Nagano",
    eyebrow: "Highlight",
    title: "Mantra Chanting & Prayers",
    description:
      "Evening prayers and mantra chanting sessions as part of the daily rhythm.",
    href: "#journal",
  },
];

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedGrid />
      <ExperienceCarousel
        heading="The Curriculum"
        description="Comprehensive instruction in Yogasanas and alignment, Yoga Anatomy, Pranayama, Mudras, Bandhas, and Yoga Philosophy."
        items={SEASONAL_ITEMS}
      />
      <Teachers />
      <ExperienceCarousel
        heading="Why Lighthouse YTT"
        items={WORLD_ITEMS}
        variant="centered"
      />
      <Accreditations />
      <Newsletter />
    </>
  );
}
