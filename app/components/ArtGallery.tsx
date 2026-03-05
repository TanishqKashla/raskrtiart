"use client";

import Image from "next/image";
<<<<<<< Updated upstream
import { useState, useRef } from "react";

const row1Images = [
  "/gallery/1.jpeg",
  "/gallery/2.jpeg",
=======
import { useState } from "react";

/**
 * Add ALL your gallery images here (no repeats)
 * Only these will ever be shown
 */
const allImages = [
  "/gallery/1.jpg",
  "/gallery/2.jpg",
>>>>>>> Stashed changes
  "/gallery/3.jpeg",
  "/gallery/4.jpeg",
  "/gallery/5.jpeg",
  "/gallery/6.jpeg",
  "/gallery/7.jpeg",
  "/gallery/8.jpeg",
<<<<<<< Updated upstream
  "/gallery/9.jpg",
  "/gallery/10.jpeg",
  "/gallery/11.jpeg",
  "/gallery/12.jpg",
  "/gallery/13.jpeg",
  "/gallery/14.jpg",
  "/gallery/15.jpeg",
  "/gallery/16.jpeg",
  "/gallery/17.jpeg",
  "/gallery/18.jpg",
  "/gallery/19.jpeg",
  "/gallery/20.jpeg",
  "/gallery/21.jpeg",
  "/gallery/22.jpg",
  "/gallery/23.jpg",
  "/gallery/24.jpg",
  "/gallery/25.jpg",
  "/gallery/26.jpg",
];

const row2Images = [
  "/gallery/27.jpg",
  "/gallery/28.jpg",
  "/gallery/29.jpg",
  "/gallery/30.jpg",
  "/gallery/31.jpg",
  "/gallery/32.jpg",
  "/gallery/33.jpg",
  "/gallery/34.jpg",
  "/gallery/35.jpg",
  "/gallery/36.jpg",
  "/gallery/37.jpg",
  "/gallery/38.jpg",
  "/gallery/39.jpeg",
  "/gallery/40.jpeg",
  "/gallery/41.jpeg",
  "/gallery/42.jpeg",
  "/gallery/43.jpeg",
  "/gallery/44.jpeg",
  "/gallery/45.jpeg",
  "/gallery/46.jpeg",
  "/gallery/47.jpeg",
  "/gallery/48.jpeg",
  "/gallery/49.jpeg",
  "/gallery/50.jpeg",
  "/gallery/51.jpeg",
  "/gallery/52.jpeg",
]

export default function ArtGallery() {
  const [drag, setDrag] = useState<{ row: 1 | 2; startX: number; scrollLeft: number } | null>(null);
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent, row: 1 | 2) => {
    const scrollContainer = row === 1 ? row1Ref.current : row2Ref.current;
    if (!scrollContainer) return;
    setDrag({
      row,
      startX: e.pageX,
      scrollLeft: scrollContainer.scrollLeft,
    });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!drag) return;
    const scrollContainer = drag.row === 1 ? row1Ref.current : row2Ref.current;
    if (!scrollContainer) return;

    const distance = e.pageX - drag.startX;
    scrollContainer.scrollLeft = drag.scrollLeft - distance;
  };

  const handleMouseUp = () => {
    setDrag(null);
  };

  const handleTouchStart = (e: React.TouchEvent, row: 1 | 2) => {
    const scrollContainer = row === 1 ? row1Ref.current : row2Ref.current;
    if (!scrollContainer) return;
    setDrag({
      row,
      startX: e.touches[0].pageX,
      scrollLeft: scrollContainer.scrollLeft,
    });
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!drag) return;
    const scrollContainer = drag.row === 1 ? row1Ref.current : row2Ref.current;
    if (!scrollContainer) return;

    const currentX = e.touches[0].pageX;
    const distance = currentX - drag.startX; // Calculate distance moved
    scrollContainer.scrollLeft = drag.scrollLeft - distance;
  };
  return (
    <section id="gallery" className="bg-[#FBF4EC] py-10 overflow-hidden py-20">
      <div className="md:max-w-[1395px] md:mx-auto px-4 md:px-16">
=======
  "/gallery/9.jpeg",
  "/gallery/10.jpeg",
  "/gallery/11.jpeg",
  "/gallery/12.jpeg",
  "/gallery/13.jpeg",
  "/gallery/14.jpeg",
  "/gallery/15.jpeg",
  "/gallery/16.jpeg",
  
];

const IMAGES_PER_LOAD = 12;

export default function ArtGallery() {
  const [visibleCount, setVisibleCount] = useState(IMAGES_PER_LOAD);

  const visibleImages = allImages.slice(0, visibleCount);
  const hasMore = visibleCount < allImages.length;

  const loadMore = () => {
    setVisibleCount((prev) =>
      Math.min(prev + IMAGES_PER_LOAD, allImages.length)
    );
  };

  return (
    <section className="bg-[#FBF4EC] py-10">
      <div className="max-w-7xl mx-auto px-4 md:px-16">

>>>>>>> Stashed changes
        {/* Heading */}
        <h2
          className="text-3xl md:text-5xl text-[#9C3D14] mb-10 font-primary"
        >
          Raskrti Art Gallery
        </h2>

<<<<<<< Updated upstream
      {/* ROW 1 – Right to Left */}
      <div
        ref={row1Ref}
        className="h-[230px] md:h-[300px] overflow-hidden mb-6 cursor-grab active:cursor-grabbing touch-pan-y"
        onMouseDown={(e) => handleMouseDown(e, 1)}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={(e) => handleTouchStart(e, 1)}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleMouseUp}
        style={{ userSelect: "none" }}
      >
        <div className="flex gap-6 animate-marquee-left w-max">
          {row1Images.concat(row1Images).map((src, index) => (
            <div
              key={`row1-${index}`}
              className="h-[230px] md:h-[300px] w-fit rounded-xl overflow-hidden"
=======
        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6">
          {visibleImages.map((src, index) => (
            <div
              key={index}
              className="mb-6 break-inside-avoid rounded-xl overflow-hidden group"
>>>>>>> Stashed changes
            >
              <Image
                src={src}
                alt="Gallery artwork"
<<<<<<< Updated upstream
                width={220}
                height={300}
                draggable={false}
                className="object-cover h-full w-full pointer-events-none"
=======
                width={800}
                height={1000}
                className="
                  w-full h-auto object-contain
                  transition-transform duration-500 ease-out
                  group-hover:translate-y-2
                "
>>>>>>> Stashed changes
              />
            </div>
          ))}
        </div>

<<<<<<< Updated upstream
      {/* ROW 2 – Left to Right */}
      <div
        ref={row2Ref}
        className="h-[230px] md:h-[300px] overflow-hidden cursor-grab active:cursor-grabbing touch-pan-y"
        onMouseDown={(e) => handleMouseDown(e, 2)}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={(e) => handleTouchStart(e, 2)}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleMouseUp}
        style={{ userSelect: "none" }}
      >
        <div className="flex gap-6 animate-marquee-right w-max">
          {row2Images.concat(row2Images).map((src, index) => (
            <div
              key={`row2-${index}`}
              className="h-[230px] md:h-[300px] w-fit rounded-xl overflow-hidden"
            >
              <Image
                src={src}
                alt="Gallery artwork"
                width={220}
                height={300}
                quality={80}
                draggable={false}
                className="object-cover h-full w-full pointer-events-none"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Animations */}
      <style jsx global>{`
        @keyframes marquee-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes marquee-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-marquee-left {
          animation: marquee-left 100s linear infinite;
        }

        .animate-marquee-right {
          animation: marquee-right 100s linear infinite;
        }

        /* Pause animation on hover or drag */
        .animate-marquee-left:hover,
        .animate-marquee-right:hover {
          animation-play-state: paused;
          cursor: grab;
        }

        .animate-marquee-left:active,
        .animate-marquee-right:active {
          cursor: grabbing;
        }
      `}</style>
=======
        {/* Load More (only if more images exist) */}
        {hasMore && (
          <div className="flex justify-center mt-12">
            <button
              onClick={loadMore}
              className="bg-[#9C3D14] text-white px-8 py-3 text-sm"
              style={{ fontFamily: "Futura PT" }}
            >
              Load More
            </button>
          </div>
        )}

      </div>
>>>>>>> Stashed changes
    </section>
  );
}
