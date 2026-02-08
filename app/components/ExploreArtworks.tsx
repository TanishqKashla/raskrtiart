"use client";

import Image from "next/image";

export default function ExploreArtworks() {
  return (
    <section className="bg-[#FBF4EC] py-20">
      <div className="max-w-7xl mx-auto pl-0 pr-16">
        {/* Parent Wrapper */}
        <div className="flex gap-20 items-center">
          {/* LEFT DIV */}
          <div
            className="relative flex items-center bg-cover bg-center pl-0"
            style={{
              width: "724px",
              height: "555px",
              backgroundImage: "url('/carousel/5.jpg')",
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50" />

            {/* Content */}
            <div className="relative z-10 text-white px-16">
              <h2
                className="text-4xl font-regular mb-4 leading-snug"
                style={{ fontFamily: "Mauline" }}
              >
                Explore Artworks <br />
                Available for Sale
              </h2>

              <p
                className="text-[20px] font-book leading-relaxed mb-0"
                style={{ fontFamily: "Futura PT" }}
              >
                Donec consequat ultrices neque, asce lersqu nulla varius at.
                Praesent tolbero, luctus vestibul umnuncmonc consequat versqu
                nulla varius at. Donec consequat ultrices neque, asce lersqu
                nulla varius at. Praesent tolbero, luctus vestibul umnuncmonc
                consequat versqu nulla varius at.
              </p>

              <p
                className="text-[20px] font-book leading-relaxed mb-6"
                style={{ fontFamily: "Futura PT" }}
              >
                Praesent tolbero, luctus vestibul umnuncmonc consequat versqu
                nulla varius at. Donec consequat ultrices neque, asce lersqu
                nulla varius at.
              </p>

              <button
                className="bg-[#9C3D14] px-6 py-3 text-lg cursor-pointer"
                style={{ fontFamily: "Futura PT" }}
              >
                Shop Now
              </button>
            </div>
          </div>

          {/* RIGHT DIV */}
          <div
            className="flex items-center justify-center"
            style={{ width: "460px", height: "538px" }}
          >
            <Image
              src="/courses/1.png"
              alt="Artwork for Sale"
              width={460}
              height={538}
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
