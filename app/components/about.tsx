"use client";
import { aboutData } from "../data/aboutSection";

import Image from "next/image";
import Button from "./Button";

export default function AboutSection() {
  return (
    
    <section className="mx-auto max-w-[1390px] flex flex-col md:flex-row justify-between gap-7 px-4 md:px-8 py-24 pb-24 md:pb-32">
      <div className="flex flex-col items-center md:items-start gap-6 md:gap-24">
        <h1 className="text-5xl text-primary text-3xl font-primary text-center md:text-left">{aboutData.title}</h1>
        <Button variant="primary" className="text-4xl">Explore Courses</Button>
      </div>
      <div className="md:max-w-1/2 text-xl md:pl-6 text-center md:text-left">
        <p>{aboutData.description}
        </p>
      </div>
    </section>
  );
}
