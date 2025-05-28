import Aos from "aos"
import { useEffect } from "react"
import { useDarkMode } from "../Components/DarkModeContext"
import 'aos/dist/aos.css'
import abouting from '../assets/images/about.jpg'

const About = () =>{
useEffect(()=>{
Aos.init({
    offset:200,
    duration: 800,
    easing: 'ease-in-sine',
    delay: 100,
});
},[])
const {darkMode , toggleMode} = useDarkMode(); 

    return(
        <>
         <section id='about' className={`${darkMode ? 'dark bg-black' : 'light bg-transparent'} w-full
    m-auto lg:px-40 py-10 grid lg:grid-cols-2 grid-cols-1 justify-center items-center gap-10`}>
      <div>
        <img data-aos ="zoom-in" src={abouting} alt="about-image" className='rounded-2xl 
        lg:w-[700px] lg:h-[600px]'></img>        
        </div> 
        <div className='flex flex-col justify-center items-start gap-8'>

<h1 data-aos='zoom-in' data-aos-delay='200' className=' text-black text-[40px]
font-semibold leading-10 dark:text-white'>Discover Luxury Living At Royal Court
  </h1>
<p data-aos='zoom-in' data-aos-delay='400' className='text-xl text-gray-600
 dark:text-white text-justify'>Royal Court presents spacious and thoughtfully designed 2 BHK flats 
 that seamlessly blend style, convenience, and value, 
 offering an exceptional living experience for you and your loved ones.</p>
 
  <button className='bg-red-800 dark:bg-red-800 hover:bg-black
  dark:hover:bg-white dark:hover:text-black text-lg p-4  text-white
  font-semibold rounded-xl cursor-pointer transform hover:scale-110
  transition-transform duration-300'>Read More</button> </div>
        </section>
        </>
    )
}
export default About;