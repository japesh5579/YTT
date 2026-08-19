/** Icon shown on each Covers card — keys map to lucide-react components in CoversCarousel. */
export type HighlightIcon =
  | "flower"
  | "activity"
  | "wind"
  | "brain"
  | "sparkles"
  | "sun"
  | "moon"
  | "book"
  | "hand-heart"
  | "briefcase"
  | "music"
  | "leaf"
  | "feather"
  | "heart"
  | "handshake"
  | "home";

export type Highlight = {
  title: string;
  description: string;
  tags: [string, string, string, string];
  icon: HighlightIcon;
};

export type Course = {
  slug: string;
  img: string;
  alt: string;
  secondaryImg?: string;
  secondaryAlt?: string;
  imgPositionClass?: string;
  eyebrow: string;
  title: string;
  /** Short, evergreen badge text — never a fixed date, since those go stale. */
  scheduleNote?: string;
  /** Real upcoming batch dates for this specific course. */
  batches?: { range: string; month: string; year: number; startDate: string }[];
  stats: { value: string; label: string }[];
  paragraphs: string[];
  highlights: Highlight[];
  schedule?: { time: string; activity: string; period: string }[];
  pricing: { label: string; price: string }[];
  applyHref?: string;
};

const YTT_APPLY_HREF =
  "https://lighthousekrishna.com/course-registration/yoga-teacher-training/";
const MTC_APPLY_HREF =
  "https://lighthousekrishna.com/course-registration/masters-training-course/";

const YTT_SCHEDULE = [
  { time: "07:00 – 07:30 AM", activity: "Shatkarma (first 4 days)", period: "Morning" },
  { time: "07:30 – 09:00 AM", activity: "Vinyasa Yoga", period: "Morning" },
  { time: "09:00 – 09:30 AM", activity: "Pranayam", period: "Morning" },
  { time: "10:00 – 10:30 AM", activity: "Breakfast", period: "Morning" },
  { time: "11:00 – 11:45 AM", activity: "Anatomy", period: "Midday" },
  { time: "11:45 – 12:30 PM", activity: "Yoga Alignment", period: "Midday" },
  { time: "01:00 – 02:00 PM", activity: "Lunch", period: "Midday" },
  { time: "03:30 – 04:00 PM", activity: "Tea Break", period: "Afternoon" },
  { time: "04:00 – 05:00 PM", activity: "Yoga Philosophy", period: "Afternoon" },
  { time: "05:00 – 06:30 PM", activity: "Hatha Yoga", period: "Evening" },
  { time: "06:30 – 07:30 PM", activity: "Meditation / Mantra Chanting / Aura Healing / Kriya", period: "Evening" },
  { time: "08:00 – 09:00 PM", activity: "Dinner", period: "Evening" },
];

const RETREAT_SCHEDULE = [
  { time: "09:00 – 09:30 AM", activity: "Breakfast", period: "Morning" },
  { time: "09:30 AM – 01:00 PM", activity: "Free time — contemplation, nature walks, exploration", period: "Morning" },
  { time: "01:00 – 01:30 PM", activity: "Lunch", period: "Midday" },
  { time: "01:30 – 04:00 PM", activity: "Break", period: "Midday" },
  { time: "04:00 – 05:15 PM", activity: "Ashtanga Vinyasa Yoga", period: "Afternoon" },
  { time: "05:15 – 05:30 PM", activity: "Tea", period: "Afternoon" },
  { time: "05:30 – 06:30 PM", activity: "Philosophy", period: "Afternoon" },
  { time: "06:30 – 07:30 PM", activity: "Meditation", period: "Evening" },
  { time: "07:30 – 08:00 PM", activity: "Dinner", period: "Evening" },
];

export const COURSES: Course[] = [
  {
    slug: "100-hour-ytt",
    img: "/course-graduation.jpg",
    alt: "Graduates holding their Light House certificates",
    secondaryImg: "/course-workshop.jpg",
    secondaryAlt: "A wellness and stress-management workshop session at Light House",
    imgPositionClass: "object-top",
    eyebrow: "Yoga Teacher Training",
    title: "100-Hour YTT",
    scheduleNote: "Batches Monthly",
    batches: [
      { range: "01 – 15", month: "November", year: 2026, startDate: "2026-11-01" },
      { range: "01 – 15", month: "February", year: 2027, startDate: "2027-02-01" },
    ],
    stats: [
      { value: "15", label: "Days" },
      { value: "100", label: "Training Hours" },
      { value: "CYT", label: "Certified Yoga Teacher" },
    ],
    paragraphs: [
      "A 15-day foundational training in Yogasanas and alignment, Pranayama, Mudras and Bandhas, alongside very effective and unique meditation techniques, taught by highly qualified and exceptional teachers.",
      "We are affiliated to Yoga Alliance International and the World Yoga Federation. After successful completion, you can become a Certified Yoga Teacher (CYT).",
    ],
    highlights: [
      {
        title: "8-Limbed Ashtanga Yoga",
        description: "Learn the complete eight limbs of yoga for a balanced life.",
        tags: ["Ancient Wisdom", "Holistic Practice", "Mind-Body Balance", "Inner Growth"],
        icon: "flower",
      },
      {
        title: "Yoga Alignment",
        description: "Build a safe, precise foundation for every posture you'll teach.",
        tags: ["Physical Strength", "Body Awareness", "Injury Prevention", "Precision"],
        icon: "activity",
      },
      {
        title: "Pranayama and Shatkarma",
        description: "Master breath control and traditional cleansing techniques.",
        tags: ["Breath Awareness", "Purification", "Vital Energy", "Ancient Wisdom"],
        icon: "wind",
      },
      {
        title: "Human Anatomy and Physiology",
        description: "Understand the body's systems so you can teach safely and confidently.",
        tags: ["Structured Learning", "Body Awareness", "Safety First", "Science-Backed"],
        icon: "brain",
      },
      {
        title: "Self-healing with Sound and Aura Healing",
        description: "Explore vibrational and energetic practices for deep restoration.",
        tags: ["Energetic Healing", "Sacred Knowledge", "Inner Growth", "Total Wellness"],
        icon: "sparkles",
      },
      {
        title: "Kriya Meditation / Cosmutation",
        description: "Experience the spontaneous meditation technique unique to Light House.",
        tags: ["Present Awareness", "Self-Discovery", "Inner Growth", "Sacred Knowledge"],
        icon: "sun",
      },
    ],
    schedule: YTT_SCHEDULE,
    pricing: [
      { label: "Triple Sharing", price: "675 EUR / 750 USD" },
      { label: "Twin Sharing", price: "700 EUR / 770 USD" },
      { label: "Single Room", price: "750 EUR / 820 USD" },
      { label: "Shared (INR)", price: "50,000 INR" },
      { label: "Private (INR)", price: "60,000 INR" },
    ],
    applyHref: YTT_APPLY_HREF,
  },
  {
    slug: "200-hour-ytt",
    img: "/curriculum-asana.jpg",
    alt: "Graduates holding their Certificate of Completion at Light House",
    secondaryImg: "/course-graduation-2.jpg",
    secondaryAlt: "Graduates holding their Light House certificates with marigold garlands",
    imgPositionClass: "object-top",
    eyebrow: "Advanced Certification",
    title: "200-Hour YTT",
    scheduleNote: "Batches Monthly",
    batches: [
      { range: "01 – 20", month: "November", year: 2026, startDate: "2026-11-01" },
      { range: "01 – 20", month: "February", year: 2027, startDate: "2027-02-01" },
    ],
    stats: [
      { value: "20", label: "Days" },
      { value: "200", label: "Training Hours" },
      { value: "Dual", label: "Certification Available" },
    ],
    paragraphs: [
      "A comprehensive 20-day training building on the 100-Hour syllabus, with deeper study of Yoga Anatomy, Kriyas, Mudras and Meditation, plus placement assistance on completion.",
      "Dual certification (Yoga Alliance International and World Yoga Federation) is available for this course, subject to an extra payment.",
    ],
    highlights: [
      {
        title: "Everything in the 100-Hour syllabus",
        description: "Build directly on your foundational training, with no gaps in the syllabus.",
        tags: ["Structured Learning", "Holistic Practice", "Ancient Wisdom", "Continuity"],
        icon: "briefcase",
      },
      {
        title: "6 Schools of Thought",
        description: "Study the major philosophical schools underpinning yogic practice.",
        tags: ["Sacred Knowledge", "Structured Learning", "Self-Discovery", "Ancient Wisdom"],
        icon: "book",
      },
      {
        title: "Upanishads, Bhagavad Gita, Ashtavakra Gita",
        description: "Read the foundational texts that shape yogic and Vedantic philosophy.",
        tags: ["Sacred Knowledge", "Ancient Wisdom", "Self-Discovery", "Inner Growth"],
        icon: "book",
      },
      {
        title: "Introduction to Chakras and Kundalini",
        description: "Explore the subtle energy body and the awakening of Kundalini energy.",
        tags: ["Energetic Healing", "Sacred Knowledge", "Inner Growth", "Self-Discovery"],
        icon: "sparkles",
      },
      {
        title: "Massage and Cleansing",
        description: "Learn hands-on bodywork and cleansing techniques for holistic care.",
        tags: ["Holistic Practice", "Total Wellness", "Energetic Healing", "Hands-On Skill"],
        icon: "hand-heart",
      },
      {
        title: "Placement assistance",
        description: "Get structured support finding teaching opportunities after graduation.",
        tags: ["Career Ready", "Community Care", "Structured Learning", "Continuity"],
        icon: "briefcase",
      },
    ],
    schedule: YTT_SCHEDULE,
    pricing: [
      { label: "Triple Sharing", price: "990 EUR / 1,100 USD" },
      { label: "Twin Sharing", price: "1,050 EUR / 1,125 USD" },
      { label: "Single Room", price: "1,100 EUR / 1,200 USD" },
      { label: "Shared (INR)", price: "60,000 INR" },
      { label: "Private (INR)", price: "70,000 INR" },
    ],
    applyHref: YTT_APPLY_HREF,
  },
  {
    slug: "15-day-retreat",
    img: "/course-meditation.jpg",
    alt: "Students in seated meditation at Light House",
    secondaryImg: "/course-havan.jpg",
    secondaryAlt: "A havan prayer ceremony with marigolds at Light House",
    imgPositionClass: "object-top",
    eyebrow: "Retreat",
    title: "15-Day Yoga Retreat",
    scheduleNote: "Batches Monthly",
    batches: [
      { range: "01 – 15", month: "November", year: 2026, startDate: "2026-11-01" },
      { range: "01 – 15", month: "February", year: 2027, startDate: "2027-02-01" },
    ],
    stats: [
      { value: "15", label: "Days" },
      { value: "Relaxed", label: "Daily Pace" },
      { value: "Cert.", label: "Of Appreciation" },
    ],
    paragraphs: [
      "A relaxed daily schedule built around Ashtanga Vinyasa, philosophy and meditation, with free time each morning for contemplation, nature walks and exploring the riverside.",
      "All participants are awarded a certificate of appreciation by Light House on successful completion.",
    ],
    highlights: [
      {
        title: "Ashtanga Vinyasa Yoga",
        description: "Move through a flowing, breath-linked sequence of postures each day.",
        tags: ["Physical Strength", "Breath Awareness", "Mind-Body Balance", "Holistic Practice"],
        icon: "flower",
      },
      {
        title: "Yoga Philosophy",
        description: "Reflect on the deeper teachings behind the practice, at a relaxed pace.",
        tags: ["Sacred Knowledge", "Self-Discovery", "Ancient Wisdom", "Inner Growth"],
        icon: "book",
      },
      {
        title: "Meditation and mantra chanting",
        description: "Settle the mind through guided sitting practice and sacred sound.",
        tags: ["Present Awareness", "Inner Growth", "Sacred Knowledge", "Total Wellness"],
        icon: "music",
      },
      {
        title: "Free time for contemplation and nature walks",
        description: "Unhurried mornings by the Ganges, with space for stillness and reflection.",
        tags: ["Self-Discovery", "Total Wellness", "Present Awareness", "Nature Connection"],
        icon: "leaf",
      },
      {
        title: "Evening prayers",
        description: "Close each day with a quiet, communal prayer ceremony.",
        tags: ["Sacred Knowledge", "Community Care", "Inner Growth", "Present Awareness"],
        icon: "moon",
      },
    ],
    schedule: RETREAT_SCHEDULE,
    pricing: [
      { label: "Triple Sharing", price: "630 EUR / 700 USD" },
      { label: "Twin Sharing", price: "645 EUR / 720 USD" },
      { label: "Single Room", price: "700 EUR / 800 USD" },
    ],
    applyHref: YTT_APPLY_HREF,
  },
  {
    slug: "20-day-retreat",
    img: "/course-prayer.jpg",
    alt: "Evening prayer ceremony with marigold garlands at Light House",
    secondaryImg: "/course-meditation-2.jpg",
    secondaryAlt: "Students in a group meditation session at Light House",
    imgPositionClass: "object-top",
    eyebrow: "Retreat",
    title: "20-Day Yoga Retreat",
    scheduleNote: "Batches Monthly",
    batches: [
      { range: "01 – 20", month: "November", year: 2026, startDate: "2026-11-01" },
    ],
    stats: [
      { value: "20", label: "Days" },
      { value: "Relaxed", label: "Daily Pace" },
      { value: "Cert.", label: "Of Appreciation" },
    ],
    paragraphs: [
      "An extended stay along the Ganges, built around Hatha yoga, evening prayers and mantra chanting, with the same relaxed rhythm as our 15-day retreat.",
      "All participants are awarded a certificate of appreciation by Light House on successful completion.",
    ],
    highlights: [
      {
        title: "Hatha Yoga",
        description: "Practice slow, deliberate postures that build strength and steadiness.",
        tags: ["Physical Strength", "Mind-Body Balance", "Holistic Practice", "Present Awareness"],
        icon: "flower",
      },
      {
        title: "Evening prayers and mantra chanting",
        description: "Wind down each day with communal chanting and quiet devotion.",
        tags: ["Sacred Knowledge", "Community Care", "Inner Growth", "Present Awareness"],
        icon: "moon",
      },
      {
        title: "Meditation",
        description: "Build a steady daily sitting practice at an unhurried pace.",
        tags: ["Present Awareness", "Inner Growth", "Self-Discovery", "Total Wellness"],
        icon: "sun",
      },
      {
        title: "Free time for contemplation and nature walks",
        description: "Extended open mornings by the river, for stillness and reflection.",
        tags: ["Self-Discovery", "Total Wellness", "Present Awareness", "Nature Connection"],
        icon: "leaf",
      },
    ],
    schedule: RETREAT_SCHEDULE,
    pricing: [
      { label: "Triple Sharing", price: "900 EUR / 999 USD" },
      { label: "Twin Sharing", price: "950 EUR / 1,050 USD" },
      { label: "Single Room", price: "1,000 EUR / 1,100 USD" },
    ],
    applyHref: YTT_APPLY_HREF,
  },
  {
    slug: "mtc",
    img: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1400&q=80",
    alt: "Cedar-clad rooms above the forest floor at Kōra Hills, Nagano",
    secondaryImg: "/curriculum-meditation-v2.jpg",
    secondaryAlt: "A student seated in meditation",
    eyebrow: "Master's Programme",
    title: "Master's Training Course",
    scheduleNote: "By Availability",
    stats: [
      { value: "5", label: "Days, Add-On" },
      { value: "1:1", label: "With Krishnaji" },
      { value: "Yogi", label: "/ Yogini Title" },
    ],
    paragraphs: [
      "The Art of Spontaneous Meditation (Cosmutation), taught directly by our founder, Krishnaji. Once connected with the Cosmic Light, you begin to live meditation twenty-four hours a day. Psychologically, it means the end of time, which is the end of the root of fear.",
      "This is not a traditional meditation course. There is no meditator, no effort, and therefore no psychological conflict.",
      "This is an optional module, subject to the Master's availability. If taken alongside YTT or YRT, your course extends by 5 days. Admission to MTC is at the Master's discretion, and independent of admission to YTT or YRT.",
    ],
    highlights: [
      {
        title: "Spontaneous Kriya Meditation",
        description: "Enter a meditation that arises on its own, without technique or effort.",
        tags: ["Present Awareness", "Self-Discovery", "Inner Growth", "Sacred Knowledge"],
        icon: "sparkles",
      },
      {
        title: "Connection with the Cosmic Light / Energy",
        description: "Open to a direct experience of the Cosmic Light described by Krishnaji.",
        tags: ["Energetic Healing", "Sacred Knowledge", "Inner Growth", "Self-Discovery"],
        icon: "sun",
      },
      {
        title: "No meditator, no effort, no psychological conflict",
        description: "Release the sense of striving, so meditation happens by itself.",
        tags: ["Present Awareness", "Inner Growth", "Self-Discovery", "Total Wellness"],
        icon: "feather",
      },
      {
        title: "Personally taught by Krishnaji",
        description: "Learn directly from Light House's founder, who lives this practice daily.",
        tags: ["Sacred Knowledge", "Ancient Wisdom", "Community Care", "Inner Growth"],
        icon: "heart",
      },
    ],
    pricing: [{ label: "Add-on Fee", price: "275 EUR / 299 USD" }],
    applyHref: MTC_APPLY_HREF,
  },
  {
    slug: "karma-yoga",
    img: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1400&q=80",
    alt: "A cove reachable by private tender at Isola Piana, Sardinia",
    secondaryImg: "/karma-yoga-seva.jpg",
    secondaryAlt: "A warm embrace between Krishnaji and a graduate at Light House",
    eyebrow: "Seva",
    title: "Karma Yoga at PANKH",
    stats: [
      { value: "Flexible", label: "Duration" },
      { value: "Seva", label: "Selfless Service" },
      { value: "PANKH", label: "Partner NGO" },
    ],
    paragraphs: [
      "An opportunity for selfless service, teaching and volunteering at PANKH — The Creative School, our partner NGO founded by Alankrita Banerjee.",
      "The programme includes food, accommodation and optional wellness packages alongside your volunteering.",
    ],
    highlights: [
      {
        title: "Teaching and volunteering at PANKH",
        description: "Share your skills directly with students at our partner NGO school.",
        tags: ["Service & Seva", "Community Care", "Self-Discovery", "Holistic Practice"],
        icon: "handshake",
      },
      {
        title: "Food and accommodation included",
        description: "Stay and eat with us for the full duration of your volunteering.",
        tags: ["Total Wellness", "Community Care", "Service & Seva", "Continuity"],
        icon: "home",
      },
      {
        title: "Optional wellness packages",
        description: "Add on yoga, meditation or spa sessions alongside your volunteering.",
        tags: ["Total Wellness", "Holistic Practice", "Inner Growth", "Self-Discovery"],
        icon: "hand-heart",
      },
    ],
    pricing: [],
  },
];

export function getCourse(slug: string): Course | undefined {
  return COURSES.find((c) => c.slug === slug);
}

/** Groups a flat schedule into period buckets (Morning, Midday, ...) in first-seen order. */
export function groupScheduleByPeriod(
  schedule: NonNullable<Course["schedule"]>
) {
  const order: string[] = [];
  const groups = new Map<string, typeof schedule>();

  for (const row of schedule) {
    if (!groups.has(row.period)) {
      groups.set(row.period, []);
      order.push(row.period);
    }
    groups.get(row.period)!.push(row);
  }

  return order.map((period) => ({ period, rows: groups.get(period)! }));
}
