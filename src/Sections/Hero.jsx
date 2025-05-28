import 'aos/dist/aos.css'
import  heroing from '../assets/images/hero1.jpg'
import { useDarkMode } from '../Components/DarkModeContext'
import React, { useEffect } from 'react'
import Aos from 'aos'

const Hero = () => {

  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    });
    },[])

    const {darkMode, toggleDarkMode} = useDarkMode();
    
  return (
   <>
   
 <div className={`${darkMode ? 'dark bg-black' : 'light bg-white'}`}>
    <section id='hero' className='w-[95%] h-[600px] m-auto bg-cover bg-center rounded-xl flex flex-col
     lg:flex-col items-start justify-center lg:px-28 px-10 gap-7 z-20'
     style={{backgroundImage: `url(${heroing})`}}>
<h1 data-aos='zoom-in' className='text-5xl text-blue-50 font-semibold lg:pr-[500px] pr-0
 lg:leading-[70px] leading-[60px] '>Experience Luxury And 
 Comfort In Our Elegant 2 BHK Flats Designed For Modern Living.</h1>
    </section>
   </div>
   </>
  )
}

export default Hero