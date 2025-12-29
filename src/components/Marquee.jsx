import { twMerge } from "tailwind-merge";
import React from "react";
export default function Marquee({
  className,
  reverse = true,
  pauseOnHover = false,
  children,
  vertical = false,
  duration = "40s",
  gap = "1rem",
  ...props
}) {
  const items = React.Children.toArray(children);

  return (
    <div
      {...props}
      className={twMerge(
        `relative flex overflow-hidden [--duration:${duration}] [--gap:${gap}] ${
          vertical ? "flex-col" : "flex-row"
        }`,
        className
      )}
    >
      {/* Wrap items twice for seamless looping */}
      <div
        className={twMerge(
          "flex shrink-0 [gap:var(--gap)] items-center",
          vertical
            ? "animate-marquee-vertical flex-col"
            : "animate-marquee flex-row",
          pauseOnHover && "[animation-play-state:paused]",
          reverse && "[animation-direction:reverse]"
        )}
      >
        {items}
        {items} {/* Duplicate inline for seamless loop */}
      </div>
    </div>
  );
}
