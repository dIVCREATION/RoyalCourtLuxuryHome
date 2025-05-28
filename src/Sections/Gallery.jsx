import React from 'react'
import Aos from "aos"
import { useEffect } from "react"
import { useDarkMode } from "../Components/DarkModeContext"
import 'aos/dist/aos.css'

const Gallery = () => {
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
               justify-center items-center lg:px-20 px-6 py-10 gap-20 mt-20`}>
          <div id='top' className='w-full grid lg:grid-flow-row-3 grid-cols-1 justify-center items-center gap-8'>
            <div>
              <h1 data-aos='zoom-in' data-aos-delay='200' className=' text-blue-800 dark:text-white text-4xl font-bold justify-center lg:text-center'>GALLERY</h1>
              <p data-aos='zoom-in' data-aos-delay='400' className='text-lg text-white font-medium justify-center lg:text-center
   dark:text-white text-justify'>BEAUTIFUL VIEWS</p>
            </div>
            <div className='grid lg:grid-cols-2 col-span-2 grid-cols-1 justify-center item-center gap-3'>
              <div data-aos='zoom-in' data-aos-delay='200' style={{ backgroundImage: `url("src/assets/images/area1.jpg")` }}
                className='rounded-xl h-[300px] bg-cover bg-center'>
              </div>
              <div data-aos='zoom-in' data-aos-delay='200' style={{ backgroundImage: `url("src/assets/images/area2.png")` }}
                className='rounded-xl h-[300px] bg-cover bg-center'>

              </div>
              <div data-aos='zoom-in' data-aos-delay='200' style={{ backgroundImage: `url("src/assets/images/prop3.png")` }}
                className='rounded-xl h-[300px] bg-cover bg-center'>

              </div>

              <div data-aos='zoom-in' data-aos-delay='200' style={{ backgroundImage: `url("src/assets/images/area3.png")` }}
                className='rounded-xl h-[300px] bg-cover bg-center'>
              </div>
              <div data-aos='zoom-in' data-aos-delay='200' style={{ backgroundImage: `url("src/assets/images/prop2.jpg")` }}
                className='rounded-xl h-[300px] bg-cover bg-center'>
              </div>
              <div data-aos='zoom-in' data-aos-delay='200' style={{ backgroundImage: `url("src/assets/images/area2.jpg")` }}
                className='rounded-xl h-[300px] bg-cover bg-center'>

              </div>
            </div>
                     </div>
        </section>
      </div>

    </>
  )
}

export default Gallery