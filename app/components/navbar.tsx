"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShow(false);
      } else {
        setShow(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 bg-primary transition-transform duration-300 py-5 md:py-10 ${
          show ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="max-w-8xl mx-auto px-4 md:pl-39 md:pr-39">
          <div className="flex items-center justify-between">
            
            {/* Logo */}
            <div className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="Raskrti Art"
                width={35}
                height={35}
              />
              <span
                className="text-white text-2xl cursor-pointer"
                style={{ fontFamily: "Mauline" }}
              >
                Raskrti Art
              </span>
            </div>

            {/* Nav Links – Desktop only */}
            <ul
              className="hidden md:flex gap-8 text-white text-lg"
              style={{ fontFamily: "Futura PT" }}
            >
              <li className="hover:underline underline-offset-4 cursor-pointer">
                Home
              </li>
              <li className="hover:underline underline-offset-4 cursor-pointer">
                Courses
              </li>
              <li className="hover:underline underline-offset-4 cursor-pointer">
                Gallery
              </li>
              <li className="hover:underline underline-offset-4 cursor-pointer">
                About Us
              </li>
              <li className="hover:underline underline-offset-4 cursor-pointer">
                Contact
              </li>
            </ul>

          </div>
        </div>
      </nav>
    </>
  );
}
