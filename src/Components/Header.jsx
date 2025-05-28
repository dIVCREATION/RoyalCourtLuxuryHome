import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll'
//import { Link } from "react-router-dom";

import { useDarkMode } from './DarkModeContext';
import { FaPhoneAlt, FaUserCircle } from 'react-icons/fa'


const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const {darkMode, toggleDarkMode} = useDarkMode();

    const toggleMenu=() =>{
        setIsMenuOpen(!isMenuOpen)
    }
const closeMenu =() =>{
    setIsMenuOpen(false)
}

const navItems = [
    {
        link : 'Home', path:'home'
    },
    {
        link : 'About', path: 'about'
    },
    {
        link : 'Gallery' , path: 'gallery'
    },
    {
        link : 'Contact', path: 'contact'
    },
    {
        link : 'Blog', path: 'blog'
    }
]

   
  return (
    <>
    <nav className={`${darkMode ? 'dark bg-black' 
     : 'light bg-white'} ' flex justify-between items-center gap-4 
     lg:px-20 px-4 py-3 sticky top-0 z-30 '`}
    >
        <div id='logo'>
            <img src='src\assets\logoRIl.jpg' alt='logo' className='lg:w-[165px] w-[130px] dark:invert rounded-xl '></img>
           </div>
           <ul className='lg:flex justify-center items-center gap-8 hidden'>
             {
        navItems.map(({link, path}) =>  (<Link key={path} className='text-black text-[20px] 
          uppercase font-semibold cursor-pointer px-3 py-2 dark:text-white rounded-lg hover:bg-red-800 hover:text-white'
        to={`${path}`}>{link} </Link>))
      }
       </ul>
       <div className='flex justify-center items-center lg:gap-8 gap-2'>
    <div className='flex justify-center items-center lg:gap-3 gap-1'>
      <FaPhoneAlt className='size-5 text-red-800'/>
      <h1 className='lg:text-xl text-sm text-black dark:text-white font-semibold'>999 999 999</h1>
      </div>
      <FaUserCircle className='size-6 text-red-800'></FaUserCircle></div> 
        
    </nav>
    
    
    </>
  )
}

export default Header