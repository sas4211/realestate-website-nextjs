"use client";

import React, { useEffect } from 'react'
import Hero from './Hero/Hero'
import ApartmentTypes from './ApartmentTypes/ApartmentTypes';
import Properties from './Properties/Properties';
import CityProperties from './CityProperties/CityProperties';
import BuildingPicture from './BuildingPicture/BuildingPicture';
import Reviews from './Reviews/Reviews';
import Blog from './Blog/Blog';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {

  useEffect(()=>{
    const initAOS = async () => {
      await import("aos"); 
      AOS.init({
        duration:1000,
        easing: "ease",
        once:true,
        anchorPlacement:"top-bottom",
      });
    };

    initAOS();
  }, [])
  return( 
    <div className='overflow-hidden'>
      <Hero />
      <ApartmentTypes />
      <Properties />
      <CityProperties />
      <BuildingPicture />
      <Reviews />
      <Blog />
     </div>
  );
};

export default Home