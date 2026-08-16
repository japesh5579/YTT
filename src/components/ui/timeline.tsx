"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

export interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full min-w-0 font-sans" ref={containerRef}>
      <div ref={ref} className="relative mx-auto min-w-0 max-w-4xl">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex min-w-0 justify-start pt-10 md:gap-10 md:pt-20"
          >
            <div className="sticky top-32 z-40 flex max-w-xs shrink-0 flex-col items-center self-start md:top-40 md:w-56 md:flex-row lg:max-w-sm">
              <div className="absolute left-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#f7f4ee] md:left-3">
                <div className="h-3 w-3 rounded-full border border-[#33456a]/40 bg-[#33456a]" />
              </div>
              <p className="hidden text-xs tracking-widest-plus uppercase text-[#8a8375] md:block md:pl-16">
                {item.title}
              </p>
            </div>

            <div className="relative w-full min-w-0 pl-16 pr-4 md:pl-4">
              <p className="mb-4 block text-xs tracking-widest-plus uppercase text-[#8a8375] md:hidden">
                {item.title}
              </p>
              {item.content}
            </div>
          </div>
        ))}
        <div
          style={{ height: height + "px" }}
          className="absolute left-8 top-0 w-px overflow-hidden bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-[#22201c]/15 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{ height: heightTransform, opacity: opacityTransform }}
            className="absolute inset-x-0 top-0 w-px rounded-full bg-[#33456a]"
          />
        </div>
      </div>
    </div>
  );
};
