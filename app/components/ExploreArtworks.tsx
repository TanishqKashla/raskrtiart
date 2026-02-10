"use client";

import Image from "next/image";

export default function ExploreArtworks() {
  return (
    <section className="bg-[#FBF4EC] py-10 pb-0">
      <div className="">
        {/* Parent Wrapper */}
        <div className="w-full flex flex-col md:flex-row items-center">
          {/* LEFT DIV */}
          <div
            className="relative flex items-center bg-cover bg-center pl-0 w-full md:w-1/2 h-fit md:h-[538px]"
            style={{
              backgroundImage: "url('/store/banner.png')",
            }}
          >

            {/* Content */}
            <div className="relative z-10 text-white p-5 py-12 md:pl-32 md:pr-20">
              <h2
                className="text-4xl md:text-5xl font-regular mb-4 md:leading-16"
                style={{ fontFamily: "Mauline" }}
              >
                Explore Artworks <br />
                Available for Sale
              </h2>

              <p
                className="text-[18px] md:text-[20px] font-book leading-snug mb-0"
                style={{ fontFamily: "Futura PT" }}
              >
                Donec consequat ultrices neque, asce lersqu nulla varius at.
                Praesent tolbero, luctus vestibul umnuncmonc consequat versqu
                nulla varius at. Donec consequat ultrices neque, asce lersqu
                nulla varius at. Praesent tolbero, luctus vestibul umnuncmonc
                consequat versqu nulla varius at.
              </p>

              <button
                className="bg-[#9C3D14] w-full md:w-fit px-6 py-3 mt-8 text-lg cursor-pointer"
                style={{ fontFamily: "Futura PT" }}
              >
                Shop Now
              </button>
            </div>
          </div>

          {/* RIGHT DIV */}
          <div
            className="flex items-center justify-center p-6 md:p-0 md:w-1/2"
          >
            <div>
              <Image
                src="/courses/1.png"
                alt="Artwork for Sale"
                width={460}
                height={538}
                className="object-cover"
              />
            </ div>
          </div>
        </div>
      </div>
    </section>
  );
}
