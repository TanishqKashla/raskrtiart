"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#9C3D14]">

      {/* top row */}
      <div className="md:max-w-7xl mx-auto px-4  md:px-16 text-white flex flex-col md:flex-row justify-between py-10 gap-10">
          {/* Logo */}
        <div className="flex gap-3">
            <img
              src="/logo.png"
              alt="Raskrti Art"
              className="w-12 h-12 object-contain"
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
                className="space-y-1 text-[20px] font-book cursor-pointer"
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
      <div className="bg-[#6e2b0e]  py-3  text-white text-center text-sm md:text-[20px] font-book" style={{ fontFamily: "Futura PT" }}>
        © 2026 Raskrti Art Society
      </div>
    </footer>
  );
}
