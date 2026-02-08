"use client";

import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="bg-[#FBF4EC] py-20 pl-16 pr-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT DIV */}
          <div>
            <h2
              className="text-4xl text-primary mb-6"
              style={{ fontFamily: "Mauline" }}
            >
              Raskrti Art
            </h2>

            <p
              className="text-lg text-[#333] leading-relaxed mb-4"
              style={{ fontFamily: "Futura PT" }}
            >
              Donec consequat ultrices neque, asce lersqu nulla varius at.
              Praesent tolbero, luctus vestibul umnuncmonc consequat versqu
              nulla varius at. Donec consequat ultrices neque, asce lersqu nulla
              varius at. Praesent tolbero, luctus vestibul umnuncmonc consequat
              versqu nulla varius at.
            </p>

            <p
              className="text-lg text-[#333] leading-relaxed mb-8"
              style={{ fontFamily: "Futura PT" }}
            >
              Praesent tolbero, luctus vestibul umnuncmonc consequat versqu
              nulla varius at. Donec consequat ultrices neque, asce lersqu nulla
              varius at. Praesent tolbero, luctus vestibul umnuncmonc consequat
              versqu nulla varius at.
            </p>

            <button
              className="bg-primary text-white px-6 py-3 text-lg cursor-pointer"
              style={{ fontFamily: "Futura PT" }}
            >
              Explore Courses
            </button>
          </div>

          {/* RIGHT DIV */}
          <div>
            {/* Image */}
            <div className="mb-10">
              <Image
                src="/carousel/2.jpg"
                alt="Raskrti Art"
                width={558}
                height={360}
                className="object-cover"
              />
            </div>

            {/* Stats */}
            <div className="flex justify-between text-center">
              <div>
                <h3 className="text-4xl text-[#9C3D14] font-semibold">40+</h3>
                <p
                  className="text-lg text-[#333]"
                  style={{ fontFamily: "Futura PT" }}
                >
                  Years of Experience
                </p>
              </div>

              <div className="border-l border-dashed border-gray-400 px-6">
                <h3 className="text-4xl text-[#9C3D14] font-semibold">6+</h3>
                <p
                  className="text-lg text-[#333]"
                  style={{ fontFamily: "Futura PT" }}
                >
                  Classes Offered
                </p>
              </div>

              <div className="border-l border-dashed border-gray-400 px-6">
                <h3 className="text-4xl text-[#9C3D14] font-semibold">6+</h3>
                <p
                  className="text-lg text-[#333]"
                  style={{ fontFamily: "Futura PT" }}
                >
                  Classes Offered
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
