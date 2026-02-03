"use client";
import {
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
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
    <div
      className="w-full bg-gradient-to-b from-neutral-950 to-[#071025] font-sans md:px-10"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto pt-20 px-4 md:px-8 lg:px-10">
        <h1 className="text-3xl md:text-4xl text-center font-bold text-white">
          Experience & Education
        </h1>
        <p className="text-center text-sm text-neutral-300 mt-2 max-w-2xl mx-auto">
          Selected roles, projects, and academic highlights — concise and focused.
        </p>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div key={index} className="flex items-start gap-6 md:gap-10 py-8">
            <div className="sticky top-40 self-start max-w-[12rem] md:max-w-xs z-40 flex items-center">
              <div className="h-8 w-8 absolute left-3 rounded-full bg-neutral-50 dark:bg-neutral-800 ring-1 ring-neutral-200 dark:ring-neutral-700 flex items-center justify-center shadow-sm" aria-hidden>
                <div className="h-2 w-2 rounded-full bg-purple-500" />
              </div>

              <h3 className="hidden md:block text-sm md:pl-20 font-medium text-neutral-400 uppercase tracking-wide">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-12 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-sm mb-3 font-medium text-neutral-400 uppercase tracking-wide">
                {item.title}
              </h3>

              <div className="bg-white dark:bg-neutral-900 rounded-lg p-6 border border-neutral-200 dark:border-neutral-800 shadow-sm hover:shadow-md transition-shadow">
                {item.content}
              </div>
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[1px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent via-neutral-300 dark:via-neutral-700 to-transparent"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[1px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
