"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const images = [
  "/carousel/1.jpg",
  "/carousel/2.jpg",
  "/carousel/3.jpg",
  "/carousel/4.jpg",
  "/carousel/5.jpg",
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);

  // Auto slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="w-full relative flex justify-center bg-[#FBF4EC] pt-24 pb-1 px-4 md:px-16">
      <div className="relative w-full md:w-[1295px] h-[550px] md:h-[485px] overflow-hidden rounded-md">

        {/* Slides */}
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ${index === current ? "opacity-100" : "opacity-0"
              }`}
          >
            <div className="relative h-full w-full p-4">
              <Image
                src={img}
                alt={`Slide ${index + 1}`}
                fill
                className="object-cover rounded-sm"
                priority={index === 0}
              />
            </div>
          </div>
        ))}

        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 w-7 h-7 md:w-10 md:h-10 rounded-full bg-white flex items-center justify-center shadow"
        >
          ❮
        </button>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute right-3 md:right-4 top-1/2 -translate-y-1/2 w-7 h-7 md:w-10 md:h-10 rounded-full bg-white flex items-center justify-center shadow"
        >
          ❯
        </button>
      </div>

      {/*x Dots */}
      <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-2.5 h-2.5 rounded-full cursor-pointer ${index === current ? "bg-primary" : "bg-gray-300"
              }`}
          />
        ))}
      </div>
    </div>
  );
}
