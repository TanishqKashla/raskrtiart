"use client";

import Image from "next/image";

export default function ShwetaSection() {
  return (
    <section className="bg-[#FBF4EC] py-10">
      <div className="md:max-w-7xl md:mx-auto px-4 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

          {/* LEFT CONTENT */}
          <div>
            <h2
              className="text-4xl text-[#9C3D14] mb-6 leading-snug font-regular"
              style={{ fontFamily: "Mauline" }}
            >
              Some Good lines from <br /> the founder
            </h2>

            <p
              className="text-[18px] font-book text-[#323232] leading-relaxed mb-4"
              style={{ fontFamily: "Futura PT" }}
            >
              Donec consequat ultrices neque, asce lersqu nulla varius at.
              Praesent tolbero, luctus vestibul umnuncmonc consequat versqu
              nulla varius at. Donec consequat ultrices neque, asce lersqu
              nulla varius at. Praesent tolbero, luctus vestibul umnuncmonc
              consequat versqu nulla varius at.
            </p>

            <p
              className="text-[18px] font-book text-[#323232] leading-relaxed mb-8"
              style={{ fontFamily: "Futura PT" }}
            >
              Praesent tolbero, luctus vestibul umnuncmonc consequat versqu
              nulla varius at. Donec consequat ultrices neque, asce lersqu
              nulla varius at. Praesent tolbero, luctus vestibul umnuncmonc
              consequat versqu nulla varius at. Donec consequat ultrices neque,
              asce lersqu nulla varius at.
            </p>

            <p
              className="text-lg font-semibold text-foreground"
              style={{ fontFamily: "Futura PT" }}
            >
              - Shweta Singh, Founder Raskrti Art
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center lg:justify-end">
            <Image
              src="/shweta.png"
              alt="Shweta Singh - Founder Raskrti Art"
              width={371}
              height={472}
              className="object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
