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
    <div className="w-full flex justify-center bg-[#FBF4EC] pt-24 pb-1 pl-16 pr-16">
      <div className="relative w-[1295px] h-[485px] overflow-hidden rounded-md">

        {/* Slides */}
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === current ? "opacity-100" : "opacity-0"
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
          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white flex items-center justify-center shadow"
        >
          ❮
        </button>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white flex items-center justify-center shadow"
        >
          ❯
        </button>

        
// Dots
      </div>
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, index) => (
            <span
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-2.5 h-2.5 rounded-full cursor-pointer ${
                index === current ? "bg-primary" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
    </div>
  );
}
