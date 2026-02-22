"use client";

import React, { useState } from 'react'
import Carousel from './components/carausal'
import ExploreArtworks from './components/ExploreArtworks'
import ProductCard from './components/ProductCard'
import ArtGallery from './components/ArtGallery'
import EventCarousel from './components/events'
import FounderSection from './components/FounderSection'
import ContactUs from './components/contactUs'
import Footer from './components/footer'
import Button from './components/Button';
import Testimonials from './components/Testimonials'
import { storeProducts } from './data/storeData'
import CoursesOffer from './components/CourseSection'
import ClassSection from './components/ClassSection'
import AboutSection from './components/about'


const Page = () => {

  return (
    <div>

      {/* ============Carousel Section============ */}
      <Carousel />


      {/* ============About Section============ */}
      <AboutSection />


      {/* ============ENROLL NOW BANNER============ */}
      <section className='relative bg-red-400 w-full h-[250px] md:h-[450px] flex flex-col items-center justify-center gap-8'
        style={{ backgroundImage: 'url("/banner.jpeg")', backgroundSize: "cover", backgroundPosition: "center" }}>

        {/* overlay */}
        <div className='bg-primary/80 absolute top-0 bottom-0 left-0 z-0 right-0'></div>

        <div className='relative z-10'>
          <h1 className='text-4xl md:text-6xl font-primary text-white mb-3'>Enroll Yourself Now!</h1>
          <Button variant="outlineWhite" className="mt-4">Book Now</Button>
        </div>
      </section>


      {/* ============Courses Section============ */}
      <CoursesOffer />


      {/* ============Classes Section============ */}
      <ClassSection />


      {/* ============STORE BANNER============ */}
      <ExploreArtworks />


      {/* ============trending and new section============  */}
      <section id='store' className="md:max-w-[1395px] md:mx-auto px-4 md:px-8 py-12 md:py-20">
        <div className="">
          {/* Heading */}
          <div className="flex items-center justify-between mb-12">
            <h2
              className="text-4xl md:text-5xl text-primary font-primary">
              Trending and New
            </h2>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-10">
            {storeProducts.map((product, index) => (
              <ProductCard key={index} productDetails={{
                title: product.title,
                artist: product.artist,
                size: product.dimensions,
                price: product.price,
                image: product.imageData.mainImage.src,
                slug: product.slug
              }} />
            ))}
          </div>
        </div>
      </section>

      <EventCarousel />
      <Testimonials />
      <FounderSection />
      <ArtGallery />
      <ContactUs />
    </div>
  )
}

export default Page
