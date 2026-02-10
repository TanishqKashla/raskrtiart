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
      <div className="absolute inset-0 bg-[#4d1f0bf1]" />

      {/* Content */}
      <div className="relative z-10 md:max-w-7xl mx-auto px-4 md:px-16">
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
          <div className="bg-white h-[300px] md:h-full">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.8787529021624!2d77.1580974111193!3d28.573403375595767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1d48d4c461db%3A0xea00e469429b2db6!2sRaskrti%20Art%20school!5e0!3m2!1sen!2sin!4v1770744228300!5m2!1sen!2sin" width="100%" height="100%" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>

        </div>
      </div>
    </section>
  );
}
