import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll'
import { useDarkMode } from './DarkModeContext';
import { FaPhoneAlt, FaUserCircle, FaFacebookF, FaTwitter, 
  FaYoutube, FaMoon, FaSun, FaArrowUp,
  FaInstagram} from 'react-icons/fa'

const Footer = () => {

  const { darkMode, toggleMode } = useDarkMode();
  return (
    <>
    <footer className={`${darkMode ? 'dark bg-black':'light bg-gray-800 '} w-full m-auto justify-center items-start lg:gap-20 gap-10 
     lg:px-20 p-0 sticky top-0 z-30 grid lg:grid-cols-3 grid-cols-1 mt-10 `}>

      <div className='flex flex-col justify-center items-start gap-5 mt-3'>
       <h1 className='text-white text-2xl font-semibold'> Luxury
      </h1>
       <p className='text-justify text-slate-200 mt-3 '> Experience modern elegance in your new home.</p>
      </div>

      <div id='social-media' className='flex justify-start items-center gap-4 mt-7'>
<div className='p-3 rounded-xl bg-white hover:bg-blue-600
 hover:text-white cursor-pointer transform hover:scale-110 transition-transform duration-300'>
  <FaFacebookF className='size-5'></FaFacebookF>
</div>
<div className='p-3 rounded-xl bg-white hover:bg-blue-600
 hover:text-white cursor-pointer transform hover:scale-110 transition-transform duration-300'>
  <FaInstagram className='size-5'></FaInstagram>
</div>
<div className='p-3 rounded-xl bg-white hover:bg-blue-600
 hover:text-white cursor-pointer transform hover:scale-110 transition-transform duration-300'>
  <FaYoutube className='size-5'></FaYoutube>
</div>
      </div>
      <p className='text-white  text-2xl mt-5 '>Comfort.. +91 7385785948 <br></br>info@royalcourt.net</p><br></br>
      <p className='text-white  text-xl '>© 2025. All rights reserved.</p>
    </footer>
    
    </>
  )
}

export default Footer