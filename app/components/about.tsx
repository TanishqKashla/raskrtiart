"use client";
import { aboutData } from "../data/aboutSection";

import Image from "next/image";
import Button from "./Button";

export default function AboutSection() {
  return (
    
    <section className="mx-auto max-w-[1390px] flex justify-between py-24 pb-32">
      <div className="flex flex-col gap-24">
        <h1 className="text-7xl text-primary text-3xl font-primary">{aboutData.title}</h1>
        <Button variant="primary" className="text-4xl">Explore Courses</Button>
      </div>
      <div className="max-w-1/2 text-3xl">
        <p>{aboutData.description}
        </p>
      </div>
    </section>
  );
}
