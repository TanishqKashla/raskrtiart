import React from 'react'
import Carousel from './components/carausal'
import Navbar from './components/navbar'
import AboutSection from './components/about'
import CourseCard from './components/CourseCard'
import ExploreArtworks from './components/ExploreArtworks'
import TrendingCard from './components/TrendingCard'
import ArtGallery from './components/ArtGallery'
import EventCarousel from './components/events'
import ShwetaSection from './components/shweta'
import ContactUs from './components/contactUs'
import Footer from './components/footer'
import Button from './components/Button';
import Testimonials from './components/Testimonials'
import { courses } from './data/coursesData'
import { storeProducts } from './data/storeData'


const page = () => {


  return (
    <div>
      <Carousel />
      <AboutSection />

      <section className='relative bg-red-400 w-full h-[450px] flex flex-col items-center justify-center gap-8 mb-16'
        style={{ backgroundImage: 'url("/banner.jpeg")', backgroundSize: "cover", backgroundPosition: "center" }}>

        {/* overlay */}
        <div className='bg-primary/80 absolute top-0 bottom-0 left-0 z-0 right-0'></div>

        <div className='relative z-10'>
          <h1 className='text-6xl font-primary text-white mb-3'>Enroll Yourself Now!</h1>
          <Button variant="outlineWhite" className="mt-4">Book Now</Button>
        </div>
      </section>

      {/* Courses Section */}
      <section className="bg-[#FBF4EC] md:py-10">
        <div className="max-w-[1395px] mx-auto px-5 md:px-0">

          {/* Heading + Button */}
          <div className="flex items-center justify-between mb-8 md:mb-16">
            <h2
              className="text-5xl text-primary font-primary"
            >
              Courses We Offer
            </h2>

            {/* <button
              className="bg-[#9C3D14] text-white px-6 py-2 text-lg cursor-pointer"
              style={{ fontFamily: "Futura PT" }}
            >
              See All
            </button> */}
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
            {courses.map((course, index) => (
              <CourseCard key={index} {...course} />
            ))}
          </div>

        </div>
      </section>
      <ExploreArtworks />

      {/* //trending and new section  */}

      <section className="md:max-w-[1395px] md:mx-auto px-4 md:px-0 py-10 pt-5 md:pt-16">
        <div className="">
          {/* Heading */}
          <div className="flex items-center justify-between mb-12">
            <h2
              className="text-5xl text-primary"
              style={{ fontFamily: "Mauline" }}
            >
              Trending and New
            </h2>

            {/* <button
            className="border border-[#9C3D14] text-[#9C3D14] px-4 py-2 text-lg cursor-pointer"
            style={{ fontFamily: "Futura PT" }}
          >
            See All
          </button> */}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-10">
            {storeProducts.map((art, index) => (
              <TrendingCard key={index} {...art} />
            ))}
          </div>
        </div>
      </section>

      <EventCarousel />
      <Testimonials />
      <ShwetaSection />
      <ArtGallery />
      <ContactUs />
      <Footer />
    </div>
  )
}

export default page
