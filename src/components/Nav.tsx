"use client";

import { useState } from "react";
import Link from "next/link";

const LEFT_LINKS = [
  { label: "Courses", href: "/#destinations" },
  { label: "Curriculum", href: "/#journal" },
];

const RIGHT_LINKS = [
  { label: "Philosophy", href: "/about" },
  { label: "Apply", href: "/programs" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-[#f7f4ee] text-[#22201c] shadow-[0_1px_0_rgba(0,0,0,0.06)]">
      <div className="relative mx-auto flex h-20 max-w-[1600px] items-center justify-between px-6 md:px-10">
        <nav className="hidden gap-10 text-xs tracking-widest-plus uppercase md:flex">
          {LEFT_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="opacity-85 transition-opacity duration-300 hover:opacity-100"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <Link
          href="/"
          className="font-display absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-xl tracking-widest-plus uppercase md:text-2xl"
        >
          Lighthouse YTT
        </Link>

        <nav className="hidden gap-10 text-xs tracking-widest-plus uppercase md:flex">
          {RIGHT_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="opacity-85 transition-opacity duration-300 hover:opacity-100"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="ml-auto flex flex-col gap-1.5 md:hidden"
          aria-label="Toggle menu"
        >
          <span
            className={`h-px w-6 bg-current transition-transform duration-300 ${
              open ? "translate-y-[3.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-px w-6 bg-current transition-transform duration-300 ${
              open ? "-translate-y-[3.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-6 bg-[#f7f4ee] px-6 pb-8 text-sm tracking-widest-plus uppercase md:hidden">
          {[...LEFT_LINKS, ...RIGHT_LINKS].map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
