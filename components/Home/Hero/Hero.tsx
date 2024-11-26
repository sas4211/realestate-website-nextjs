import SearchBox from '@/components/Helper/SearchBox';
import React from 'react'

const Hero = () => {
  return (
    <div className="w-full pt-[4vh] md:pt-[12vh] h-screen bg-[#0f0715] overflow-hidden relative bg-[url('/images/hero.jpg')] bg-cover bg-centre">
      {/* Black Overlay*/}
      <div className="absolute inset-0 bg-black opacity-70"></div>
    {/* content*/}
    <div className='flex justify-center items-center flex-col w-[95%] sm:w-[85%] h-full mx-auto relative z-10'>
      <h1 
      data-aos="fade-left" 
      className='text-white text-opacity-80 text-center text-base sm:text-lg uppercase font-medium'>
        Welcome to our website</h1>
        <h1 
        data-aos="fade-right" 
        data-aos-delay="150"
        className='text-center font-semibold text-3xl sm:text-5xl text-white mt-4'>
          Find Your Dream Property With Us
        </h1>
<p 
data-aos="fade-up" 
data-aos-delay="300" 
className='mt-4 text-center text-sm sm:text-base text-gray-200'>
  We are a team of passionate real estate professionals dedicated to helping you find your dream property. With
  our extensive knowledge of the local market and our commitment to exceptional customer service, we can help you
  find the perfect property for you and your family.
</p>
<div 
data-aos="zoom-in" 
data-aos-delay="450"
className='mt-12 w-full'>
<SearchBox />
</div>
      </div> 
        </div>
  );
};

export default Hero