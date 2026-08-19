"use client";

import { useState } from "react";
import {
  Flower2,
  Activity,
  Wind,
  Brain,
  Sparkles,
  Sun,
  Moon,
  BookOpen,
  HandHeart,
  Briefcase,
  Music,
  Leaf,
  Feather,
  Heart,
  Handshake,
  Home,
  ArrowLeft,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import type { Highlight, HighlightIcon } from "@/lib/courses";

const ICONS: Record<HighlightIcon, LucideIcon> = {
  flower: Flower2,
  activity: Activity,
  wind: Wind,
  brain: Brain,
  sparkles: Sparkles,
  sun: Sun,
  moon: Moon,
  book: BookOpen,
  "hand-heart": HandHeart,
  briefcase: Briefcase,
  music: Music,
  leaf: Leaf,
  feather: Feather,
  heart: Heart,
  handshake: Handshake,
  home: Home,
};

export default function CoversCarousel({ items }: { items: Highlight[] }) {
  const [index, setIndex] = useState(0);
  const item = items[index];
  const Icon = ICONS[item.icon];

  const goPrev = () => setIndex((i) => (i - 1 + items.length) % items.length);
  const goNext = () => setIndex((i) => (i + 1) % items.length);

  return (
    <>
      {/* Mobile: one card at a time, swipeable via arrows/dots */}
      <div className="border border-[#22201c]/10 bg-[#f7f4ee] px-6 py-10 md:hidden">
        <div className="flex flex-col items-center text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#33456a]/8">
            <Icon className="h-7 w-7 text-[#33456a]" strokeWidth={1.5} />
          </div>

          <h4 className="font-display mt-6 text-xl font-light">{item.title}</h4>
          <span className="mt-3 h-px w-10 bg-[#33456a]/40" />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-[#57534a]">
            {item.description}
          </p>
        </div>

        {item.tags.length > 0 && (
          <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-6 border-t border-[#22201c]/10 pt-8">
            {item.tags.map((tag) => (
              <p
                key={tag}
                className="text-center text-[10px] leading-relaxed tracking-widest-plus uppercase text-[#8a8375]"
              >
                {tag}
              </p>
            ))}
          </div>
        )}

        <div className="mt-8 flex items-center justify-between border-t border-[#22201c]/10 pt-6">
          <p className="text-xs tracking-widest-plus uppercase text-[#8a8375]">
            <span className="text-[#33456a]">{String(index + 1).padStart(2, "0")}</span>
            {" / "}
            {String(items.length).padStart(2, "0")}
          </p>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={goPrev}
              aria-label="Previous"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[#22201c]/15 text-[#22201c] transition-colors hover:bg-[#22201c]/5"
            >
              <ArrowLeft className="h-4 w-4" strokeWidth={1.5} />
            </button>
            <button
              type="button"
              onClick={goNext}
              aria-label="Next"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-[#33456a] text-[#f7f4ee] transition-colors hover:bg-[#2a3854]"
            >
              <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
            </button>
          </div>
        </div>

        <div className="mt-6 flex justify-center gap-2">
          {items.map((h, i) => (
            <button
              key={h.title}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Go to ${h.title}`}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? "w-5 bg-[#33456a]" : "w-1.5 bg-[#22201c]/15"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Desktop: all cards visible at once, compact grid */}
      <div className="hidden gap-4 md:grid md:grid-cols-2 lg:grid-cols-3">
        {items.map((h) => {
          const ItemIcon = ICONS[h.icon];
          return (
            <div key={h.title} className="border border-[#22201c]/10 bg-[#f7f4ee] px-5 py-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#33456a]/8">
                <ItemIcon className="h-5 w-5 text-[#33456a]" strokeWidth={1.5} />
              </div>
              <h4 className="font-display mt-4 text-base font-light">{h.title}</h4>
              <p className="mt-2 text-xs leading-relaxed text-[#57534a]">{h.description}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
