"use client";

import Image from "next/image";

const images = [
  "/gallery/1.jpeg",
  "/gallery/2.jpeg",
  "/gallery/3.jpeg",
  "/gallery/4.jpeg",
  "/gallery/5.jpeg",
  "/gallery/6.jpeg",
  "/gallery/7.jpeg",
  "/gallery/8.jpeg",
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
          animation: marquee-left 90s linear infinite;
        }

        .animate-marquee-right {
          animation: marquee-right 90s linear infinite;
        }
      `}</style>
    </section>
  );
}
