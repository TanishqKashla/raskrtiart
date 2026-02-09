"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#9C3D14] py-10">
      <div className="max-w-7xl mx-auto px-16 text-white">

        {/* Top Row */}
        <div className="flex justify-between items-start mb-6">

          {/* Logo */}
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Raskrti Art"
              width={47}
              height={48}
            />
            <span
              className="text-[32px] font-regular"
              style={{ fontFamily: "Mauline" }}
            >
              Raskrti Art
            </span>
          </div>

          {/* Links */}
          <div className="flex gap-24">

            {/* Column 1 */}
            <div>
              <h4
                className="mb-3 text-[20px] font-book"
                style={{ fontFamily: "Futura PT" }}
              >
                Links
              </h4>
              <ul
                className="space-y-2 text-[20px] font-book cursor-pointer"
                style={{ fontFamily: "Futura PT" }}
              >
                <li>Courses</li>
                <li>Store</li>
                <li>Links</li>
                <li>Links</li>
              </ul>
            </div>

            {/* Column 2 */}
            <div>
              <h4
                className="mb-3 text-[20px] font-book"
                style={{ fontFamily: "Futura PT" }}
              >
                Social Media
              </h4>
              <ul
                className="space-y-2 text-[20px] font-book cursor-pointer"
                style={{ fontFamily: "Futura PT" }}
              >
                <li>Social Media</li>
                <li>Social Media</li>
                <li>Social Media</li>
                <li>Social Media</li>
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom */}
        <div className="text-center text-[20px] font-book" style={{ fontFamily: "Futura PT" }}>
          © 2026 Raskrti Art Society
        </div>

      </div>
    </footer>
  );
}
