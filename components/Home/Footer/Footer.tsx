import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import { FaHouse } from 'react-icons/fa6'

const Footer = () => {
  return (
    <div className="pt-20 pb-12 bg-black">
        <div className='w-[80%] mx-auto grid items-start grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-8 border-b-[1.5px] border-white border-opacity-20 '>
          {/* First Section Of Footer*/}
          <div>
          {/* Logo */}
          <div className='flex items-center space-x-2'>
                <div className='md:w-10 md:h-10 w-7 h-7 rounded-full bg-rose-700 text-white flex items-center justify-center flex-col'>
                    <FaHouse />
                </div>
                <h1 className='text-white font-bold text-sm sm:text-base md:text-xl'>
                    PrettyHomes RealEstate
              </h1>
            </div> 
            <p className='text-gray-300 mt-6'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa similique voluptas asperiores, accusamus ducimus autem delectus unde maiores, quos quam ab dolorum illum dolor quibusdam! Tempora ab minus repellendus aperiam.</p>
            <p className='text-gray-300 mt-4 font-semibold'>xyz@gmail.com</p>
            <p className='text-gray-300 mt-4 font-semibold'>+1234567890</p>
            {/* serial Links */}
            <div className='flex items-center space-x-4 mt-6'>
                <FaFacebook className='w-6 h-6 text-blue-600'/>
                <FaTwitter  className='w-6 h-6 text-sky-500'/>
                <FaYoutube className='w-6 h-6 text-red-700'/>
                <FaInstagram className='w-6 h-6 text-pink-600'/>
                </div>
            </div>
            {/* 2nd section of footer */}
            <div className="md:mx-auto">
                <h1 className="footer__heading">Most Searched</h1>
                <p className='footer__link'>Apartments For Rent</p>
                <p className='footer__link'>Apartments For Sale</p>
                <p className='footer__link'>Offices For Rent</p>
                <p className='footer__link'>Offices For Sale</p>
             </div>
             {/* 3rd section of footer */}
             <div className="lg:mx-auto">
                <h1 className="footer__heading">Quick Links</h1>
                <p className='footer__link'>Terms To Use</p>
                <p className='footer__link'>Pricing Policy</p>
                <p className='footer__link'>About Us</p>
                <p className='footer__link'>privacy Policy</p>
                <p className='footer__link'>Contact Us</p>
                <p className='footer__link'>Careers</p>
                <p className='footer__link'>FAQs</p>
                </div>
                {/* 4th section of footer */}
                <div className="md:mx-auto">
                  <h1 className="footer__heading">Discover</h1>
                    <p className="footer__link">Miami</p>
                    <p className='footer__link'>New York</p>
                    <p className='footer__link'>Chicago</p>
                    <p className='footer__link'>LosAngeles</p>
                    <p className='footer__link'>London</p>
                    </div>
                </div>
                <p className='text-center mt-4 text-base text-white opacity-70'>Copyright 2024 by TechSamina</p>
             </div>
        );
}

export default Footer