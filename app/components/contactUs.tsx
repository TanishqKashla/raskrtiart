"use client";

import Image from "next/image";
import { LuMail, LuMapPin, LuPhone } from "react-icons/lu";

export default function ContactUs() {
  return (
    <section
      id="contact-us"
      className="relative py-10"
      style={{
        backgroundImage: "url('/contactus-bg.jpeg')",
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
            <h2 className="text-4xl mb-6" style={{ fontFamily: "Mauline" }}>
              Contact Us
            </h2>

            <p
              className="text-[20px] font-book leading-relaxed mb-14 max-w-md"
              style={{ fontFamily: "Futura PT" }}
            >
              At Raskrti Art School, we welcome art lovers of all ages to explore and grow their creativity. Whether you're interested in hobby classes, certified courses, workshops, or diploma programs, our team is here to guide you. Reach out to us for course details, fees, timings, or enrollment support - and let's create something beautiful together.
            </p>

            <ul
              className="space-y-5  text-[20px] font-book"
              style={{ fontFamily: "Futura PT" }}
            >
              <li className="flex items-center gap-3">
                <span><LuPhone className="text-xl" /></span>
                <span>+91 9643940236</span>
              </li>

              <li className="">
                <a className="flex items-center gap-3 hover:underline" href="mailto:raskrtiartandpaintingschool@gmail.com">
                  <span><LuMail className="text-xl" /></span>
                  <span>raskrtiartandpaintingschool@gmail.com</span>
                </a>
              </li>

              <li className="flex items-start gap-3">
                <span><LuMapPin className="text-xl" /></span>
                <span>
                  Raskrti Art school 136, Vasant Enclave, Vasant Vihar, New
                  Delhi, Delhi 110057
                </span>
              </li>
            </ul>
          </div>

          {/* RIGHT MAP */}
          <div className="bg-white h-[300px] md:h-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.8787529021624!2d77.1580974111193!3d28.573403375595767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1d48d4c461db%3A0xea00e469429b2db6!2sRaskrti%20Art%20school!5e0!3m2!1sen!2sin!4v1770744228300!5m2!1sen!2sin"
              width="100%"
              height="100%"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
