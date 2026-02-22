"use client";

import Image from "next/image";
import { courses } from "../data/coursesData";

export default function CoursesSection() {
  return (
    <section id="courses" className="bg-[#FBF4EC]  pt-20">
      <div className="max-w-[1395px] mx-auto h-fit px-5 md:px-8 flex flex-col ">
        {/* Heading */}
        <h2 className="text-5xl text-primary mb-12 font-primary">
          Certified Courses
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 ">
          {courses.map((course, index) => (
            <div key={index} className="flex flex-col h-full gap-2">
              {/* Image */}
              <div className="relative overflow-hidden h-90 w-full">
                <Image
                  src={course.thumbnail}
                  alt={course.className}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute bottom-2 right-2 bg-[#ffffff] text-[#9C3D14] text-sm px-2 py-1 rounded-full">
                  Age Group: {course.ageGroup}
                </span>
              </div>

              <div className="flex flex-col justify-between flex-1">
                <div>
                  {/* Title */}
                  <h3
                    className="text-[24px] text-[#323232]  font-medium "
                    style={{ fontFamily: "Futura PT" }}
                  >
                    {course.className}
                  </h3>

                  <h4 className="text-[16px] text-[#9C3D14] font-medium mb-2">{course.classType && course.classType}</h4>

                  <div className="flex gap-3 mb-2">
                    <span className="border border-[#9C3D14] text-[#9C3D14] text-sm px-3 py-1 rounded-full w-fit ">
                     {course.days}
                    </span>
                    <span className="border border-[#9C3D14] text-[#9C3D14] text-sm px-3 py-1 rounded-full w-fit ">
                     {course.materials && course.materials}
                    </span>
                  </div>
                </div>

                <div className="mt-3">
                  <div className="space-y-1">
                    <p className="text-[18px] text-[#323232] font-book flex justify-between" style={{ fontFamily: "Futura PT" }}>
                      <span>Total Classes:</span>
                      <span className="font-medium">{course.totalClasses}</span>
                    </p>
                    <p className="text-[18px] text-[#323232] font-book flex justify-between" style={{ fontFamily: "Futura PT" }}>
                      <span>Timings:</span>
                      <span className="font-medium">{course.timings}</span>
                    </p>
                  </div>
                  <div className="flex items-center justify-end my-3">
                    <span
                      className="text-[#9C3D14] text-xl font-bold"
                      style={{ fontFamily: "Microsoft Sans Serif" }}
                    >
                      ₹ {course.fee}
                    </span>
                  </div>
                  {/* Enroll Button */}
                  <button
                    className="w-full bg-[#9C3D14] text-white py-2 text-lg font-medium cursor-pointer"
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
