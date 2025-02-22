import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";

const Hero = () => {
  return (
    <section>
      <div className="absolute inset-0 -z-10 h-[150vh] bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] dark:bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)]" />

      <div>
        <div className="flex h-full flex-col items-center justify-center pt-20">
          <button className="group relative grid overflow-hidden rounded-full border bg-[#f2f2f2] px-4 py-1 transition-colors duration-200 dark:bg-[#161617]">
            <span className="z-10 flex items-center justify-center gap-1.5 py-0.5 text-sm">
              ✨ Introducing Metamorix UI
              <ChevronRight className="size-4" />
            </span>
          </button>

          <div className="mt-8 flex w-11/12 max-w-3xl flex-col items-center md:w-full">
            <h1 className="lg:textxl bg-gradient-to-b from-gray-900 to-gray-700 bg-clip-text text-center text-4xl font-semibold text-transparent dark:from-gray-50 dark:to-gray-300 md:text-6xl md:!leading-snug">
              Build your dream website in few minutes
            </h1>
            <p className="mt-6 text-center text-base text-gray-700 dark:text-gray-300 md:text-lg">
              Trust me when I say this, Metamorix UI is the best way to build
              your next website. It's fast, reliable, and easy to use. You can
              build your dream website in minutes.
            </p>
          </div>

          <div className="relative mx-auto border-2 border-blue-500 mt-10 flex w-full items-center justify-center ">
            <Image
              src="/cover.png"
              alt="Journal Platform"
              width={1200}
              height={800}
              quality={100}
              className="z-50 rounded-lg bg-foreground/10 shadow-2xl ring-1 ring-border "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

interface BorderBeamProps {
  className?: string;
  size?: number;
  duration?: number;
  borderWidth?: number;
  anchor?: number;
  colorFrom?: string;
  colorTo?: string;
  delay?: number;
}

const BorderBeam = ({
  className,
  size = 200,
  duration = 15,
  anchor = 90,
  borderWidth = 2,
  colorFrom = "#0000ff",
  colorTo = "#7800ff",
  delay = 0,
}: BorderBeamProps) => {
  return (
    <div
      style={
        {
          "--size": size,
          "--duration": duration,
          "--anchor": anchor,
          "--border-width": borderWidth,
          "--color-from": colorFrom,
          "--color-to": colorTo,
          "--delay": `-${delay}s`,
        } as React.CSSProperties
      }
      className={cn(
        "absolute inset-0 rounded-[inherit] [border:calc(var(--border-width)*1px)_solid_transparent]",

        // mask styles
        "![mask-clip:padding-box,border-box] ![mask-composite:intersect] [mask:linear-gradient(transparent,transparent),linear-gradient(white,white)]",

        // pseudo styles
        "after:absolute after:aspect-square after:w-[calc(var(--size)*1px)] after:animate-border-beam after:[animation-delay:var(--delay)] after:[background:linear-gradient(to_left,var(--color-from),var(--color-to),transparent)] after:[offset-anchor:calc(var(--anchor)*1%)_50%] after:[offset-path:rect(0_auto_auto_0_round_calc(var(--size)*1px))]",
        className
      )}
    />
  );
};
