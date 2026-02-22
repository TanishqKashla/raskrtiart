"use client";

import Image from "next/image";

export default function Footer() {
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 0;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

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
                className="mb-3 text-[20px] font-book underline"
                style={{ fontFamily: "Futura PT" }}
              >
                Links
              </h4>
              <ul
                className="space-y-1 text-[20px] font-book cursor-pointer"
                style={{ fontFamily: "Futura PT" }}
              >
                <li>
                  <a href="#courses" onClick={(e) => handleSmoothScroll(e, "courses")}>
                    Courses
                  </a>
                </li>
                <li>
                  <a href="#classes" onClick={(e) => handleSmoothScroll(e, "classes")}>
                    Classes
                  </a>
                </li>
                <li>
                  <a href="#store" onClick={(e) => handleSmoothScroll(e, "store")}>
                    Store
                  </a>
                </li>
                
              </ul>
            </div>

            {/* Column 2 */}
            <div>
              <h4
                className="mb-3 text-[20px] font-book underline"
                style={{ fontFamily: "Futura PT" }}
              >
                Social Media
              </h4>
              <ul
                className="space-y-2 text-[20px] font-book cursor-pointer"
                style={{ fontFamily: "Futura PT" }}
              >
                <li>
                  <a href="https://www.instagram.com/raskrti/">Instagram</a>
                </li>
                <li>
                  <a href="https://www.facebook.com/share/1DcTKqtgtZ/">Facebook</a>
                </li>
                <li>
                  <a href="mailto:raskrtiartandpaintingschool@gmail.com">Email</a>
                </li>
                
              </ul>
            </div>

          </div>
    
      </div>

      {/* Bottom */}
      <div className="bg-[#6e2b0e]  py-3  text-white text-center text-sm md:text-[20px] font-book" style={{ fontFamily: "Futura PT" }}>
        © 2026 Raskrti Art School
      </div>
    </footer>
  );
}
