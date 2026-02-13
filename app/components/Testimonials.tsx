"use client";
import Image from 'next/image';
import React, { useState } from 'react';
import { LuChevronLeft, LuChevronRight } from 'react-icons/lu';
import { TestimonialsData } from '../data/testimonials';

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? TestimonialsData.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % TestimonialsData.length);
    };

    const currentData = TestimonialsData[currentIndex];

    // Safety check in case data is empty
    if (!currentData) return null;

    return (
        <section className='max-w-[1395px] mx-auto py-28'>
            <div className='flex justify-between mb-20 px-4 md:px-8'>
                <h1 className='text-3xl md:text-5xl font-primary text-primary'>WHAT PEOPLE SAY</h1>

                {/* left right button */}
                <div className='flex gap-5'>
                    <LuChevronLeft
                        onClick={prevSlide}
                        className='text-2xl text-primary hover:cursor-pointer hover:text-[#9C3D14] transition-colors select-none'
                    />
                    <LuChevronRight
                        onClick={nextSlide}
                        className='text-2xl text-primary hover:cursor-pointer hover:text-[#9C3D14] transition-colors select-none'
                    />
                </div>
            </div>

            <div key={currentIndex} className='flex flex-col md:flex-row px-5 md:px-24 justify-between w-full animate-slide-in'>

                {/* photo and name */}
                <div className="shrink-0 mb-8 md:mb-0 flex flex-col items-start bg-transparent">
                    <div className='relative rounded-tr-full rounded-tl-full overflow-hidden h-50 md:h-80 aspect-[10/11] mb-3 shadow-lg'>
                        <Image
                            src={currentData.image}
                            alt={currentData.name}
                            fill
                            className='object-cover object-top'
                        />
                    </div>
                    <p className='text-xl font-semibold text-primary'>{currentData.name}</p>
                    <p className='text-xl text-gray-600'>{currentData.about}</p>
                </div>

                {/* testimonial text */}
                <div className='md:w-2/3 flex items-center pl-0 md:pl-10'>
                    <p className='text-xl md:text-2xl leading-relaxed italic opacity-90 text-foreground'>
                        "{currentData.testimonial}"
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Testimonials