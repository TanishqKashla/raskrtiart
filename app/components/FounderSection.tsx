"use client";

import Image from "next/image";

export default function FounderSection() {
  return (
    <section className="bg-[#51200b] py-10">
      <div className="md:max-w-7xl md:mx-auto py-10 px-4 md:px-8">
        <h2 className="text-4xl md:text-5xl text-white mb-20 leading-snug font-primary">Meet the Founder</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

          {/* Left section */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative rounded-xl overflow-hidden h-90 aspect-5/7">
              <Image
                src="/shweta.jpeg"
                alt="Shweta Singh - Founder Raskrti Art"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Section */}
          <div>

            <p className="text-5xl font-medium text-white font-secondary mb-7">Shweta Singh,<br /> Founder Raskrti Art</p>
            <p
              className="text-xl font-book text-white leading-relaxed mb-4 font-secondary">
              Donec consequat ultrices neque, asce lersqu nulla varius at.
              Praesent tolbero, luctus vestibul umnuncmonc consequat versqu
              nulla varius at. Donec consequat ultrices neque, asce lersqu
              nulla varius at. Praesent tolbero, luctus vestibul umnuncmonc
              consequat versqu nulla varius at.
            </p>

          </div>



        </div>
      </div>
    </section>
  );
}
