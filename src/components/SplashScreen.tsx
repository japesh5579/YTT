"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const ENTER_MS = 700;
const HOLD_MS = 2200;
const FADE_MS = 500;

export default function SplashScreen() {
  const [visible, setVisible] = useState(true);
  const [entered, setEntered] = useState(false);
  const [breathing, setBreathing] = useState(false);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const enterTimer = setTimeout(() => setEntered(true), 30);
    const breatheTimer = setTimeout(() => setBreathing(true), ENTER_MS);
    const fadeTimer = setTimeout(() => setFading(true), HOLD_MS);
    const removeTimer = setTimeout(() => {
      setVisible(false);
      document.body.style.overflow = "";
    }, HOLD_MS + FADE_MS);

    return () => {
      clearTimeout(enterTimer);
      clearTimeout(breatheTimer);
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
      document.body.style.overflow = "";
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#f7f4ee] transition-opacity duration-500 ${
        fading ? "opacity-0" : "opacity-100"
      }`}
    >
      <Image
        src="/splash-meditation.png"
        alt="Light House"
        width={1330}
        height={1182}
        priority
        className={`h-auto w-40 md:w-56 ${
          breathing
            ? "animate-breathe"
            : `transition-all duration-700 ease-out ${entered ? "scale-100 opacity-100" : "scale-90 opacity-0"}`
        }`}
      />
    </div>
  );
}
