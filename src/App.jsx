import Header from './Components/Header'
import './App.css'
import Footer from './Components/Footer'
import Hero from './Sections/Hero'
import { DarkModeProvider } from './Components/DarkModeContext'
import About from './Sections/About'
import Features from './Sections/Features'
import Gallery from './Sections/Gallery'
import Contact from './Sections/Contact'
import Map from './Sections/Map'
//import ReactDOM from "react-dom/client";
//import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
 
  return (
    <>

 
 {/* <Routes>
 <Route path="/Header" element={<Header />} />
  <Route path="/Hero" element={<Hero />} />
  <Route path="/About" element={<About />} />
  <Route path="/Features" element={<Features />} />
  <Route path="/Gallery"   element={<Gallery />} />
  <Route path="/Contact" element={<Contact />} />
  <Route path="/Footer" element={<Footer />} />
</Routes> */}

    <DarkModeProvider>
    <Header></Header>
    <Hero></Hero>
    <About></About>
    <Features></Features>
    <Gallery></Gallery>
    <Contact></Contact>
    {/* <Map></Map> */}
     <Footer></Footer>
     </DarkModeProvider>
    </>
  )
}

export default App

