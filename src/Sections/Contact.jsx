import Aos from 'aos'
import React, { useEffect } from 'react'
import { useDarkMode } from '../Components/DarkModeContext'

const Contact = () => {

    useEffect(()=>{
        Aos.init({
            offset: 200,
            duration: 800,
            easing: 'easy-in-sine',
            delay:100
        })
    },[])

    const {darkMode, toggleMode} = useDarkMode();
  return (
    <>
    <div className={`${darkMode ? 'dark bg-black': 'light bg-transparent'}`}>
    <section className={`${darkMode ? 'dark bg-gray-600' : 'light bg-blue-950'} lg:w-[90%]
            w-full h-fit  justify-center items-center lg:px-36 p-6 py-20 gap-10 mt-10 m-auto
             rounded-xl grid lg:grid-cols-2 grid-cols-1`}>
                 
                   <div data-aos='zoom-in' className='bg-white dark:bg-black mt-5 px-6 py-3 flex flex-col
                rounded-xl items-start  gap-4 justify-center '> 
                  <h1 data-aos='zoom-in' className='text-2xl text-black font-semibold dark:text-white mt-1' >Send Us A Message</h1>
                    <label>Enter your Name</label>
                    <input type='text' placeholder='Enter Your Full Name Here' 
                    className='w-full rounded-xl border-2 px-6 py-3 mt-1 border-gray-200'></input>
                    <label>Enter your Contact Number</label>
                    <input type='number' placeholder='Enter Your Number Here' 
                    className='w-full rounded-xl border-2 px-6 py-3 mt-1 border-gray-200'></input>
                    <label>Enter your Message and Inquiry</label>
                    <textarea type='text' placeholder='Enter Your Message Here' name='' id='' cols="30" rows="5"
                    className='w-full rounded-xl border-2 px-6 py-3 mt-1 border-gray-200'></textarea>
                    
                    <button className='bg-red-800 dark:bg-red-800 hover:bg-black mt-1
  dark:hover:bg-white dark:hover:text-black text-lg p-4  text-white
  font-semibold rounded-xl cursor-pointer transform hover:scale-110
  transition-transform duration-300'>SUBMIT</button> 
  </div>
           
<div  className='px-6 py-3 lg:p-32 flex flex-col rounded-xl items-start  gap-8 justify-center bg-white'>
                   <h1 data-aos='zoom-in' data-aos-delay='200' className=' text-black dark:text-white text-2xl
                 font-semibold '>Get In Touch With Us</h1>
                 <h1 data-aos='zoom-in' data-aos-delay='200' className=' text-black dark:text-white text-xl
                  '>We are here to assist you with inquiries about Royal Court
                  Contact us for more information.</h1>
                 <h1 data-aos='zoom-in' data-aos-delay='200' className=' text-black dark:text-white text-xl
                  '>Contact
+91 7385785948</h1>
<h1 data-aos='zoom-in' data-aos-delay='200' className=' text-black dark:text-white text-xl
                 '>Support
info@royalcourt.net</h1>         
                    
                    </div>




        </section>
    </div>

    
    </>
  )
}

export default Contact