"use client";

import React, { useState } from "react";
import Image from "next/image";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import { TestimonialsData } from "../data/testimonials";

const videos = [
  "/testimonials/video1.mp4",
  "/testimonials/video2.mp4",
  "/testimonials/video3.mp4",
];

const sideImages = [
  "/testimonials/img1.jpeg",
  "/testimonials/img3.jpeg",
  "/testimonials/shweta.png",
];

const Testimonials = () => {
  const totalSlides = videos.length + TestimonialsData.length;
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const isVideo = currentIndex < videos.length;
  const testimonialIndex = currentIndex - videos.length;

  return (
    <section className="max-w-[1395px] mx-auto py-10">

      {/* Heading */}
      <div className="flex justify-between mb-6 px-4 md:px-8">
        <h1 className="text-3xl md:text-5xl font-primary text-primary">
          WHAT PEOPLE SAY
        </h1>

        <div className="flex gap-5">
          <LuChevronLeft
            onClick={prevSlide}
            className="text-2xl text-primary hover:cursor-pointer hover:text-[#9C3D14]"
          />
          <LuChevronRight
            onClick={nextSlide}
            className="text-2xl text-primary hover:cursor-pointer hover:text-[#9C3D14]"
          />
        </div>
      </div>

      {/* VIDEO + IMAGE LAYOUT */}
      {isVideo && (
        <div className="flex justify-center px-4 md:px-8">
          <div className="flex flex-col md:flex-row gap-4 w-full max-w-3xl">

            {/* LEFT IMAGE */}
            <div className="relative w-full md:w-1/3 h-[360px] md:h-[480px] rounded-xl overflow-hidden shadow-xl">
              <Image
                src={sideImages[currentIndex]}
                alt="testimonial visual"
                fill
                className="object-cover object-left"
              />
            </div>

            {/* RIGHT VIDEO */}
            <div className="w-full md:w-2/3 bg-[#FBF4EC] rounded-xl shadow-xl p-2">
              <video
                key={videos[currentIndex]}
                className="rounded-lg w-full h-[360px] md:h-[480px] object-cover"
                controls
              >
                <source src={videos[currentIndex]} type="video/mp4" />
              </video>
            </div>

          </div>
        </div>
      )}

      {/* TEXT TESTIMONIAL */}
      {!isVideo && TestimonialsData[testimonialIndex] && (
        <div className="flex justify-center px-4 md:px-2">
          <div className="bg-[#FBF4EC] rounded-xl shadow-xl p-6 max-w-xl w-full text-center">

            <p className="text-lg md:text-xl italic text-foreground mb-8 mt-8 pb-2 pt-2">
              "{TestimonialsData[testimonialIndex].testimonial}"
            </p>

            <p className="text-lg font-semibold text-primary">
              {TestimonialsData[testimonialIndex].name}
            </p>

          </div>
        </div>
      )}

    </section>
  );
};

export default Testimonials;