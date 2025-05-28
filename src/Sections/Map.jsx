import Aos from 'aos'
import React, { useEffect, useMemo } from 'react'
import { useDarkMode } from '../Components/DarkModeContext'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api'



    const containerStyle = {
        width: '400px',
        height: '400px',
      }
      
      const center = {
        lat: -3.745,
        lng: -38.523,
      }
      const Map = () => {

        useEffect(()=>{
            Aos.init({
                offset: 200,
                duration: 800,
                easing: 'easy-in-sine',
                delay:100
            })
        },[]) 



        const loaderOptions = useMemo(() => ({
            version: "weekly",
            apiKey: "https://maps.app.goo.gl/BVFruFix9tbn2os68", // Replace with a valid API key
            id: "google-map-script",
            libraries: ["maps"],
            language: "en",
            region: "US"
          }), []);
          
          const { isLoaded } = useJsApiLoader(loaderOptions);
               
      
        const [map, setMap] = React.useState(null)
      
        const onLoad = React.useCallback(function callback(map) {
          // This is just an example of getting and using the map instance!!! don't just blindly copy!
          const bounds = new window.google.maps.LatLngBounds(center)
          map.fitBounds(bounds)
      
          setMap(map)
        }, [])
      
        const onUnmount = React.useCallback(function callback(map) {
          setMap(null)
        }, [])

    const {darkMode, toggleMode} = useDarkMode();
  return (
    
      <>
    <div className={`${darkMode ? 'dark bg-black': 'light bg-transparent'}`}>
    <section className={`${darkMode ? 'dark bg-gray-600' : 'light bg-blue-950'} lg:w-[90%]
            w-full h-fit  justify-center items-center lg:px-44 p-6 py-20 gap-10 mt-10 m-auto
             rounded-xl grid lg:grid-cols-2 grid-cols-1`}>
                 
                   <div data-aos='zoom-in' className='bg-white dark:bg-black mt-5 px-6 py-3 flex flex-col
                rounded-xl items-start  gap-4 justify-center '> 
                  <h1 data-aos='zoom-in' className='text-2xl text-black font-semibold dark:text-white mt-1' >Our Location</h1>
                  <h1 data-aos='zoom-in' data-aos-delay='200' className=' text-black dark:text-white text-2xl
                 font-semibold '>Address
                 Rahatani Link Rd, beside Anand Park, Shrikrushna Colony, Thergaon, 
                 Pimpri-Chinchwad, Maharashtra 411033 </h1>
                 <h1 data-aos='zoom-in' data-aos-delay='200' className=' text-black dark:text-white text-xl
                  '>We are here to assist you with inquiries about Royal Court
                  Contact us for more information.</h1>
                 <h1 data-aos='zoom-in' data-aos-delay='200' className=' text-black dark:text-white text-xl
                  '>Contact +91 7385785948</h1>
<h1 data-aos='zoom-in' data-aos-delay='200' className=' text-black dark:text-white 
text-xl '>Hours 9 AM - 6 PM</h1>   </div>
                   
                   
           
<div  className='px-6 py-3 lg:p-24 flex flex-col rounded-xl items-start  gap-8 justify-center bg-white'>
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {/* Child components, such as markers, info windows, etc. */}
      
    </GoogleMap>
            
                    
                    </div>




        </section>
    </div>

    
    </>
  )
}

export default React.memo(Map)