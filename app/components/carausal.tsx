"use client";
import { CarouselImages } from "../data/heroCarousel"
import { LuChevronRight, LuChevronLeft} from "react-icons/lu";

import { useEffect, useState } from "react";
import Image from "next/image";


export default function Carousel() {
  const [current, setCurrent] = useState(0);

  // Auto slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % CarouselImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? CarouselImages.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % CarouselImages.length);
  };

  return (
    <section id="home" className="w-full relative flex justify-center bg-[#FBF4EC] px-4  pb-1 md:mb-8">
      <div className="relative w-full md:max-w-[1395px] h-[400px] md:h-[600px] overflow-hidden rounded-lg md:rounded-2xl">

        {/* Slides */}
        {CarouselImages.map((img, index) => (
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

        <div className="flex gap-4 absolute bottom-5 right-10">
          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className=" w-7 h-7 md:w-10 md:h-10 rounded-full bg-white/40 backdrop-blur-lg hover:cursor-pointer hover:bg-[#ffffff] flex items-center justify-center shadow"
          >
            <LuChevronLeft className="text-xl" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="w-7 h-7 md:w-10 md:h-10 rounded-full bg-white/40 backdrop-blur-lg hover:cursor-pointer hover:bg-[#ffffff] flex items-center justify-center shadow"
          >
            <LuChevronRight className="text-xl" />
          </button>
        </div>
      </div>

      {/*x Dots */}
      <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
        {CarouselImages.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-2.5 h-2.5 rounded-full cursor-pointer ${index === current ? "bg-primary" : "bg-gray-300"
              }`}
          />
        ))}
      </div>
    </section>
  );
}
