import React from 'react'
import Aos from "aos"
import { useEffect } from "react"
import { useDarkMode } from "../Components/DarkModeContext"
import 'aos/dist/aos.css'
import abouting from '../assets/images/about1.jpg'

const Features = () => {
    useEffect(() => {
        Aos.init({
            offset: 200,
            duration: 800,
            easing: 'ease-in-sine',
            delay: 100,
        });
    }, [])
    const { darkMode, toggleMode } = useDarkMode();

    return (
        <>
            <div className={`${darkMode ? 'dark bg-black' : 'light bg-transparent'}`}>
                <section className={`${darkMode ? 'dark bg-gray-600' : 'light bg-blue-950'} lg:w-[90%]
            w-full h-fit m-auto bg-cover bg-center rounded-xl flex flex-col item-center
             justify-center items-center lg:px-20 px-6 py-10 gap-20`}>
                    <div id='top' className='w-full grid lg:grid-flow-row-3 grid-cols-1 justify-center items-center gap-8'>
                        <div>
                            <h1 data-aos='zoom-in' data-aos-delay='200' className=' text-blue-800 dark:text-white text-4xl font-bold justify-center lg:text-center'>Essentials At A Glance</h1>
                            <p data-aos='zoom-in' data-aos-delay='400' className='text-lg text-gray-800 font-medium justify-center lg:text-center
 dark:text-white text-justify'>2BHK flats,Thoughtfully Designed with contemporary layouts,
                                modern amenities, providing an ideal living space for your family</p>
                        </div>
                        <div className='grid lg:grid-cols-3 col-span-2 grid-cols-1 justify-center item-center gap-6'>
                            <div data-aos='zoom-in' data-aos-delay='200' style={{ backgroundImage: `url(${abouting})` }}
                                className='rounded-xl h-[300px] bg-cover bg-center'>
                            </div>
                            <div data-aos='zoom-in' data-aos-delay='200' style={{ backgroundImage: `url(${abouting})` }}
                                className='rounded-xl h-[300px] bg-cover bg-center'>

                            </div>

                            <div data-aos='zoom-in' data-aos-delay='200' style={{backgroundImage:`url(${abouting})`}}
                            className='rounded-xl h-[300px] bg-cover bg-center'>
                                                            </div>
                        </div>
                        <div id='bottom' className='w-full grid lg:grid-cols-3 grid-cols-1
                        lg:justify-center justify-start items-center gap-6'> 
<div data-aos='slide-up' data-aos-delay='200' 
className='flex justify-center lg:item-center gap-8 w-full'>
<div className='lg:text-center justify-center '>
<h1 className='text-blue-400 text-2xl font-semibold rounded-md 
 dark:text-white bg-blue-100'>Property Features</h1>
<p className='text-black text-lg bg-blue-100 rounded-md '>
    Explore luxurious amenities and thoughtful designs that enhance your living 
    experience at Royal Court, designed to elevate your lifestyle.</p></div>
</div>
<div data-aos='slide-up' data-aos-delay='200' 
className='flex justify-center lg:item-center gap-8 w-full'>
<div className='lg:text-center justify-center '>
<h1 className='text-blue-400 text-2xl font-semibold rounded-md 
 dark:text-white  bg-blue-100'>Floor Plans</h1>
<p className='text-black text-lg  bg-blue-100 rounded-md '>
Explore expertly designed floor plans at Royal Court, tailored to provide 
the perfect blend of space, comfort, and functionality for your dream home.</p></div>
</div>
<div data-aos='slide-up' data-aos-delay='200' 
className='flex justify-center lg:item-center gap-8 w-full'>
<div className='lg:text-center justify-center '>
<h1 className='text-blue-400 text-2xl font-semibold rounded-md 
 dark:text-white  bg-blue-100'>Amenities Overview</h1>
<p className='text-black text-lg  bg-blue-100 rounded-md '>
Experience a seamless combination of comfort and elegance with the exceptional 
amenities offered at Royal Court, designed to elevate your lifestyle.</p></div>
</div>
                         </div>
                    </div>
                </section>
            </div>

        </>
    )
};
export default Features;