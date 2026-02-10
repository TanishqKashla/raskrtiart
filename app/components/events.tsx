"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const events = [
  {
    image: "/events/1.png",
    title: "Best Out of Waste Workshop",
    date: "18th Dec 2025",
  },
  {
    image: "/events/1.png",
    title: "Best Out of Waste Workshop",
    date: "18th Dec 2025",
  },
  {
    image: "/events/1.png",
    title: "Best Out of Waste Workshop",
    date: "18th Dec 2025",
  },
  {
    image: "/events/1.png",
    title: "Best Out of Waste Workshop",
    date: "18th Dec 2025",
  },
];

export default function EventCarousel() {
  const [index, setIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      setVisibleItems(window.innerWidth >= 768 ? 3 : 1);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, events.length - visibleItems);

  useEffect(() => {
    if (index > maxIndex) setIndex(maxIndex);
  }, [visibleItems, maxIndex, index]);

  const prev = () => {
    setIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const next = () => {
    setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  return (
    <section className="bg-[#FBF4EC] py-10">
      <div className="md:max-w-7xl md:mx-auto px-4 md:px-16">

        {/* Heading */}
        <h2
          className="text-4xl text-[#9C3D14] mb-12"
          style={{ fontFamily: "Mauline" }}
        >
          Events and Workshops
        </h2>

        {/* Carousel Wrapper */}
        <div className="relative flex items-center mx-8 md:mx-0">

          {/* Left Arrow */}
          <button
            onClick={prev}
            className="absolute -left-6 z-10 w-10 h-10 rounded-full bg-[#E5A24A] text-white flex items-center justify-center text-2xl text-center"
          >
            ‹
          </button>

          {/* Slides */}
          <div className="overflow-hidden w-full">
            <div
              className="flex gap-8 transition-transform duration-500"
              style={{
                transform: `translateX(calc(-${index} * (100% + 32px) / ${visibleItems}))`,
              }}
            >
              {events.map((event, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 w-full md:w-[calc((100%-64px)/3)]"
                >
                  <Image
                    src={event.image}
                    alt={event.title}
                    width={344}
                    height={372}
                    className="w-full h-auto object-cover"
                  />

                  <div className="bg-[#9C3D14] text-white text-center py-3 mt-[-4px]">
                    <p
                      className="text-lg font-medium mb-1"
                      style={{ fontFamily: "Futura PT" }}
                    >
                      {event.title}
                    </p>
                    <p className="text-[15px] opacity-90">
                      {event.date}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={next}
            className="absolute -right-6 z-10 w-10 h-10 rounded-full bg-[#E5A24A] text-white flex items-center justify-center text-2xl"
          >
            ›
          </button>
        </div>

      </div>
    </section>
  );
}
