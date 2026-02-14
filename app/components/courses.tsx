"use client";

import Image from "next/image";
import { courses } from "../data/coursesData";

export default function CoursesWeOffer() {
  return (
    <section id="courses" className="bg-[#FBF4EC]  pt-20">
      <div className="max-w-[1395px] mx-auto h-fit px-5 md:px-8 flex flex-col ">
        {/* Heading */}
        <h2 className="text-5xl text-primary mb-12 font-primary">
          Courses We Offer
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 ">
          {courses.map((course, index) => (
            <div key={index} className="flex flex-col h-full gap-2">
              {/* Image */}
              <div className="relative overflow-hidden h-100 w-full">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex flex-col justify-between flex-1">
                <div>
                  {/* Title */}
                  <h3
                    className="text-[24px] text-[#323232]  font-medium "
                    style={{ fontFamily: "Futura PT" }}
                  >
                    {course.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="text-[18px] text-[#323232] leading-snug font-book"
                    style={{ fontFamily: "Futura PT" }}
                  >
                    {course.description}
                  </p>
                </div>

                <div className="">
                  <div className="flex justify-end mb-2">
                    {/* Duration */}
                    <span className="border border-[#9C3D14] text-[#9C3D14] text-sm px-2 py-0 my-2 rounded-full w-fit ">
                      {course.duration}
                    </span>
                  </div>
                  {/* Enroll Button */}
                  <button
                    className="w-full bg-[#9C3D14] text-white py-2 text-lg cursor-pointer"
                    style={{ fontFamily: "Futura PT" }}
                  >
                    Enroll Yourself
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
