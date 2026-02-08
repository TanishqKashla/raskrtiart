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

const page = () => {

  const courses = [
    {
      image: "/courses/1.png",
      title: "Madhubani Canvas Painting",
      description:
        "Course description idhar ayega and thoda sa lamba hoga",
      mode: "Offline",
      price: 1500,
    },
    {
      image: "/courses/1.png",
      title: "Warli Art",
      description:
        "Course description idhar ayega and thoda sa lamba hoga",
      mode: "Offline",
      price: 1200,
    },
    {
      image: "/courses/1.png",
      title: "Pattachitra",
      description:
        "Course description idhar ayega and thoda sa lamba hoga",
      mode: "Offline",
      price: 1800,
    },
    {
      image: "/courses/1.png",
      title: "Miniature Painting",
      description:
        "Course description idhar ayega and thoda sa lamba hoga",
      mode: "Offline",
      price: 2000,
    },
    {
      image: "/courses/1.png",
      title: "Gond Art",
      description:
        "Course description idhar ayega and thoda sa lamba hoga",
      mode: "Offline",
      price: 1400,
    },
    {
      image: "/courses/1.png",
      title: "Kalamkari",
      description:
        "Course description idhar ayega and thoda sa lamba hoga",
      mode: "Offline",
      price: 1600,
    },
  ];


   const trendingArtworks = [
    {
      image: "/carousel/1.jpg",
      title: "Name of Painting Goes Here",
      artist: "Shweta Singh",
      size: "30 in X 20 in",
      price: 25000,
    },
    {
      image: "/carousel/2.jpg",
      title: "Name of Painting Goes Here",
      artist: "Shweta Singh",
      size: "30 in X 20 in",
      price: 25000,
    },
    {
      image: "/carousel/3.jpg",
      title: "Name of Painting Goes Here",
      artist: "Shweta Singh",
      size: "30 in X 20 in",
      price: 25000,
    },
    {
      image: "/carousel/4.jpg",
      title: "Name of Painting Goes Here",
      artist: "Shweta Singh",
      size: "30 in X 20 in",
      price: 25000,
    },
  ];


  return (
    <div>
      <Navbar />
      <Carousel />
      <AboutSection />

      {/* Courses Section */}
      <section className="bg-[#FBF4EC] py-20">
        <div className="max-w-7xl mx-auto px-16">

          {/* Heading + Button */}
          <div className="flex items-center justify-between mb-12">
            <h2
              className="text-4xl text-[#9C3D14]"
              style={{ fontFamily: "Mauline" }}
            >
              Courses We Offer
            </h2>

            <button
              className="bg-[#9C3D14] text-white px-6 py-2 text-lg cursor-pointer"
              style={{ fontFamily: "Futura PT" }}
            >
              See All
            </button>
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

      <section className="bg-[#FBF4EC] py-10">
      <div className="max-w-7xl mx-auto px-16">
        {/* Heading */}
        <div className="flex items-center justify-between mb-12">
          <h2
            className="text-4xl text-[#9C3D14]"
            style={{ fontFamily: "Mauline" }}
          >
            Trending and New
          </h2>

          <button
            className="border border-[#9C3D14] text-[#9C3D14] px-4 py-2 text-lg cursor-pointer"
            style={{ fontFamily: "Futura PT" }}
          >
            See All
          </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-4 gap-10">
          {trendingArtworks.map((art, index) => (
            <TrendingCard key={index} {...art} />
          ))}
        </div>
      </div>
    </section>

    <ArtGallery/>
    <EventCarousel/>
    <ShwetaSection/>
    </div>
  )
}

export default page
