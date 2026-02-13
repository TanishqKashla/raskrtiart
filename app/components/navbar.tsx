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

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset =0; // Adjust based on navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 bg-primary transition-transform duration-300 py-5 md:pt-10 ${show ? "translate-y-0" : "-translate-y-full"
          }`}
      >
        <div className="max-w-[1395px] mx-auto px-4 md:px-20">
          <div className="flex items-center justify-between">

            {/* Logo */}
            <a href="/" className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="Raskrti Art"
                width={45}
                height={45}
              />
              <span
                className="text-white text-3xl cursor-pointer"
                style={{ fontFamily: "Mauline" }}
              >
                Raskrti Art
              </span>
            </a>

            {/* Nav Links – Desktop only */}
            <ul
              className="hidden md:flex gap-8 text-white text-lg"
              style={{ fontFamily: "Futura PT" }}
            >
              <li className="hover:underline underline-offset-4 cursor-pointer">
                Home
              </li>
              <li className="hover:underline underline-offset-4 cursor-pointer">
                <a href="#courses" onClick={(e) => handleSmoothScroll(e, "courses")}>
                  Courses
                </a>
              </li>
              <li className="hover:underline underline-offset-4 cursor-pointer">
                <a href="#gallery" onClick={(e) => handleSmoothScroll(e, "gallery")}>
                  Gallery
                </a>
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
