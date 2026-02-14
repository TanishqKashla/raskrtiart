"use client";

import Image from "next/image";

export default function ExploreArtworks() {
  return (
    <section className="bpy-10 pb-0">
      <div className="">
        {/* Parent Wrapper */}
        <div className="w-full flex flex-col md:flex-row items-center">
          
          {/* LEFT DIV */}
          <div
            className="relative flex items-center bg-cover bg-center w-full md:w-1/2 h-fit md:h-[538px] p-5 py-12 xl:pl-24 xl:pr-20"
            style={{
              backgroundImage: "url('/store/banner.png')",
            }}
          >

            {/* Content */}
            <div className="relative z-10 text-white">
              <h2
                className="text-4xl md:text-5xl font-regular mb-4 md:leading-16 font-primary"
              >
                Take Home a Piece <br />
                of Art You'll Love
                
              </h2>

              <p
                className="text-[18px] md:text-[20px] font-book leading-snug mb-0"
                style={{ fontFamily: "Futura PT" }}
              >
                Explore the Raskrti Art Store, where creativity transforms into beautifully handcrafted masterpieces. From traditional Tanjore and Madhubani paintings to elegant relief artworks and unique resin creations, each piece reflects passion and precision. Our artworks are thoughtfully designed to add culture, color, and character to your space. Discover art that speaks to you and make it a part of your story.
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
                src="/gallery/15.jpeg"
                alt="Artwork for Sale"
                width={360}
                height={438}
                className="object-cover"
              />
            </ div>
          </div>
        </div>
      </div>
    </section>
  );
}
