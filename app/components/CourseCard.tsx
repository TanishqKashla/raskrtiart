"use client";

import Image from "next/image";

interface CourseCardProps {
  image: string;
  title: string;
  description: string;
  mode: string;
  price: number;
}

export default function CourseCard({
  image,
  title,
  description,
  mode,
  price,
}: CourseCardProps) {
  return (
    <div className="w-[344px] h-[425px] bg-[#FBF4EC] flex flex-col">

      {/* Image */}
      <div className="relative w-full h-[244px]">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col justify-between flex-1 ">
        <div>
          <h3
            className="text-[24px] text-[#323232] mb-0 mt-1 font-medium "
            style={{ fontFamily: "Futura PT" }}
          >
            {title}
          </h3>

          <p
            className="text-[20px] text-[#323232] leading-snug font-book"
            style={{ fontFamily: "Futura PT" }}
          >
            {description}
          </p>
        </div>

        {/* Footer */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <span className="border border-[#9C3D14] text-[#9C3D14] text-sm px-3 py-1 rounded-full">
              {mode}
            </span>

            <span
              className="text-foreground text-lg font-regular"
              style={{ fontFamily: "Microsoft Sans Serif" }}
            >
              ₹ {price} INR/Month
            </span>
          </div>

          <button
            className="w-full bg-[#9C3D14] text-white py-2 text-lg cursor-pointer"
            style={{ fontFamily: "Futura PT" }}
          >
            Enroll Yourself
          </button>
        </div>
      </div>
    </div>
  );
}
