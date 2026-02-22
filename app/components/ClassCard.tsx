"use client";

import Image from "next/image";

interface ClassCardProps {
  thumbnail: string;
  className: string;
  ageGroup: string;
  fee: string;
  totalClasses: number;
  days: string;
  timings: string;
  materials?: string;
}

export default function ClassCard({
  thumbnail,
  className,
  ageGroup,
  fee,
  totalClasses,
  days,
  timings,
  materials,
}: ClassCardProps) {

  const WHATSAPP_NUMBER = "919643940236";

  const generateWhatsAppLink = () => {
    const message = `Hello Raskrti Art,

I would like to enroll in the following class:

*Class: ${className}*
• Age Group: ${ageGroup}
• Days: ${days}
• Timings: ${timings}
• Fee: ${fee}

Please share further details regarding enrollment.

Thank you!`;

    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="max-w-7xl h-fit w-full bg-[#FBF4EC] flex flex-col p-4 md:p-0">

      {/* Image */}
      <div className="relative overflow-hidden w-full h-[244px] mb-3">
        <Image
          src={thumbnail}
          alt={className}
          fill
          className="object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col justify-between flex-1 gap-2">
        <div>
          <h3
            className="text-[24px] text-[#323232] font-medium uppercase mb-2"
            style={{ fontFamily: "Futura PT" }}
          >
            {className}
          </h3>
          <div className="flex gap-3">
            <span className="border border-[#9C3D14] text-[#9C3D14] text-sm px-3 py-1 rounded-full w-fit ">
              {days}
            </span>
            {materials && <span className="border border-[#9C3D14] text-[#9C3D14] text-sm px-3 py-1 rounded-full w-fit ">
              {materials}
            </span>}
          </div>

          <div className="space-y-1 mt-2">
            <p className="text-[18px] text-[#323232] font-book flex justify-between" style={{ fontFamily: "Futura PT" }}>
              <span>Age Group:</span>
              <span className="font-medium">{ageGroup}</span>
            </p>
            <p className="text-[18px] text-[#323232] font-book flex justify-between" style={{ fontFamily: "Futura PT" }}>
              <span>Total Classes:</span>
              <span className="font-medium">{totalClasses}</span>
            </p>
            <p className="text-[18px] text-[#323232] font-book flex justify-between" style={{ fontFamily: "Futura PT" }}>
              <span>Timings:</span>
              <span className="font-medium">{timings}</span>
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-4">
          <div className="flex items-center justify-end mb-3">
            <span
              className="text-[#9C3D14] text-xl font-bold"
              style={{ fontFamily: "Microsoft Sans Serif" }}
            >
              ₹ {fee}
            </span>
          </div>

          <button
            onClick={() => window.open(generateWhatsAppLink(), "_blank")}
            className="w-full bg-[#9C3D14] text-white py-2 text-lg cursor-pointer hover:bg-[#833310] transition-colors"
            style={{ fontFamily: "Futura PT" }}
          >
            Enroll Yourself
          </button>
        </div>
      </div>
    </div>
  );
}
