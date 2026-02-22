

          "use client";

          import Image from "next/image";
          import { useEffect, useRef, useState } from "react";

          export default function FounderSection() {
            const sectionRef = useRef<HTMLElement | null>(null);
            const [inView, setInView] = useState(false);

            useEffect(() => {
              if (!sectionRef.current) return;
              const obs = new IntersectionObserver(
                (entries) => {
                  entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                      setInView(true);
                      obs.disconnect();
                    }
                  });
                },
                { threshold: 0.4 }
              );

              obs.observe(sectionRef.current);
              return () => obs.disconnect();
            }, []);

            return (
              <section ref={sectionRef} className="bg-[#51200b] py-10">
                <div className="md:max-w-7xl md:mx-auto py-10 px-4 md:px-8">
                  <h2 className="text-4xl md:text-5xl text-white mb-20 leading-snug font-primary">Meet the Founder</h2>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

                    {/* Left section */}
                    <div className="flex justify-center lg:justify-end">
                      <div
                        className={`relative rounded-xl overflow-hidden h-90 aspect-5/7 transform transition-all duration-1000 ease-out ${
                          inView ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
                        }`}
                      >
                        <Image
                          src="/shweta.jpeg"
                          alt="Shweta Singh - Founder Raskrti Art"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>

                    {/* Right Section */}
                    <div>

                      <p className="text-5xl font-medium text-white font-secondary mb-7">Shweta Singh,<br /> Founder Raskrti Art</p>
                      <p
                        className="text-xl font-book text-white leading-relaxed mb-4 font-secondary">
                       Shweta Singh, Founder of Raskrti Art School, is an experienced artist and mentor with over 30 years in fine arts. Trained at Ranglok Lalit Kala Academy and Triveni Kala Sangam, she specializes in Tanjore painting, relief art, and various traditional and contemporary art forms. A Fevicryl Expert Art Teacher and registered artisan with the Government of India, she continues to inspire creativity and nurture aspiring artists through her passion and guidance.
                      </p>

                    </div>




                  </div>
                </div>
              </section>
            );
          }
