"use client";

import Image from "next/image";

const images = [
  "/gallery/1.jpg",
  "/gallery/3.jpeg",
  "/gallery/3.jpeg",
  "/gallery/4.jpeg",
  "/gallery/5.jpeg",
  "/gallery/6.jpeg",
  "/gallery/7.jpeg",
];

export default function ArtGallery() {
  return (
    <section id="gallery" className="bg-[#FBF4EC] py-10 overflow-hidden py-20">
      <div className="md:max-w-[1395px] md:mx-auto px-4 md:px-16">
        {/* Heading */}
        <h2
          className="text-3xl md:text-5xl text-[#9C3D14] mb-10 font-primary"
        >
          Raskrti Art Gallery
        </h2>
      </div>

      {/* ROW 1 – Right to Left */}
      <div className="h-[300px] overflow-hidden mb-6">
        <div className="flex gap-6 animate-marquee-left w-max">
          {images.concat(images).map((src, index) => (
            <div
              key={`row1-${index}`}
              className="h-[300px] w-fit rounded-xl overflow-hidden"
            >
              <Image
                src={src}
                alt="Gallery artwork"
                width={220}
                height={300}
                className="object-cover h-full w-full"
              />
            </div>
          ))}
        </div>
      </div>

      {/* ROW 2 – Left to Right */}
      <div className="h-[300px] overflow-hidden">
        <div className="flex gap-6 animate-marquee-right w-max">
          {images.concat(images).map((src, index) => (
            <div
              key={`row2-${index}`}
              className="h-[300px] w-fit rounded-xl overflow-hidden"
            >
              <Image
                src={src}
                alt="Gallery artwork"
                width={220}
                height={300}
                className="object-cover h-full w-full"
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
          animation: marquee-left 28s linear infinite;
        }

        .animate-marquee-right {
          animation: marquee-right 28s linear infinite;
        }
      `}</style>
    </section>
  );
}
