import About from "@/components/About";
import Contact from "@/components/Contact";
import Footersection from "@/components/FooterSection";
import Navbar from "@/components/Navbar";
import ProjectsSection from "@/components/ProjectSection";
import Skills from "@/components/Skills";
import "./globals.css"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import {Toaster} from 'react-hot-toast'
import Home from "@/components/Home";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Hamburger from "@/components/Hamburger";
// import Skillsheading from "@/components/skillsheading";
export default function Page() {
  return (
    <div>
       <Toaster 
      position='top-center'
 >
      </Toaster>
      <div className='ham'>
      <Hamburger />
    </div>
    <Navbar/>
    <div>
        <Home/>
    <About />
    {/* <Skillsheading/> */}
    <Education/>
    <Experience/>
    <Skills />
   <ProjectsSection/>
    <Contact/>
    </div>
    <Footersection />
  </div>
  )
}
