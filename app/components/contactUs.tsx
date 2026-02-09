"use client";

import Image from "next/image";

export default function ContactUs() {
  return (
    <section
      className="relative py-10"
      style={{
        backgroundImage: "url('/carousel/4.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#9C3D14]/85" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <div className="text-white">
            <h2
              className="text-4xl mb-6"
              style={{ fontFamily: "Mauline" }}
            >
              Contact Us
            </h2>

            <p
              className="text-[20px] font-book leading-relaxed mb-8 max-w-md"
              style={{ fontFamily: "Futura PT" }}
            >
              Donec consequat ultrices neque, asce lersqu nulla varius at.
              Praesent tolbero, luctus vestibul umnuncmonc consequat versqu
              nulla varius at. Donec consequat ultrices neque, asce lersqu
              nulla varius at.
            </p>

            <ul
              className="space-y-2 text-[20px] font-book"
              style={{ fontFamily: "Futura PT" }}
            >
              <li className="flex items-center gap-3">
                <span>📞</span>
                <span>+91 12345-12345</span>
              </li>

              <li className="flex items-center gap-3">
                <span>📞</span>
                <span>+91 54321-54321</span>
              </li>

              <li className="flex items-center gap-3">
                <span>✉️</span>
                <span>contact@raskrtiart.com</span>
              </li>

              <li className="flex items-start gap-3">
                <span>📍</span>
                <span>
                  Vasant Enclave, Vasant Vihar,<br />
                  New Delhi - 1100XX
                </span>
              </li>
            </ul>
          </div>

          {/* RIGHT MAP */}
          <a
            href="https://www.google.com/maps/place/Raskrti+Art+school/@28.5740847,77.1602978,18.05z/data=!4m6!3m5!1s0x390d1d48d4c461db:0xea00e469429b2db6!8m2!3d28.5734034!4d77.1606777!16s%2Fg%2F11h_v6bq0t!17m2!4m1!1e3!18m1!1e1?entry=ttu&g_ep=EgoyMDI2MDIwNC4wIKXMDSoKLDEwMDc5MjA3MUgBUAM%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer"
          >
            <Image
              src="/contact/map.png"
              alt="Raskrti Art Location Map"
              width={593}
              height={412}
              className="object-cover"
            />
          </a>

        </div>
      </div>
    </section>
  );
}
