"use client"
import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import '../App.css'
import { Link as ScrollLink } from 'react-scroll';
import NextLink from 'next/link';
import Hamburger from './Hamburger';


const Home = () => {
  // const [scrolled, setScrolled] = useState(false);

  const handleResumeClick = () => {
    // Add logic to open the resume PDF when the button is clicked
    // For simplicity, let's assume your PDF file is in the public directory
    window.open('https://drive.google.com/file/d/1SyvQf2ZdNbyVbNRyYzFUPeC0ATXtIDF-/view?usp=drive_link', '_blank');
  };

  // useEffect(() => {
  //   // Scroll to the target element when the component mounts
  //   if (!scrolled) {
  //     setScrolled(true);
  //     window.scrollTo({
  //       top: document.getElementById('home').offsetTop,
  //       behavior: 'smooth',
  //     });
  //   }
  // }, [scrolled]);


  return (
    
    <>
     <div>
    <div className="Gradient-top"></div>
    </div>
      <div id="home" className="home-container">
    <h1>Hi, I’m <span className='name'> &nbsp;Isha Gupta</span></h1>
    {/* <h2>Software Developer</h2> */}
    <h2 className="custom-heading">Full Stack Developer;</h2>

    <div className="social-media-icons">
    <NextLink href="https://www.linkedin.com/in/isha-gupta-84a730217" >
  
    <img src="linkdin.svg" alt="Social Media Icon 2" />
</NextLink>

<NextLink href="https://github.com/ieshaaa" >
          <img src="github.svg" alt="Social Media Icon 1" />
          </NextLink> 
          <NextLink href="https://x.com/IshaGupta168?t=WMEajVsDJAX34kKQgvBh-w&s=09" >
          <img src="twitter.svg" alt="Social Media Icon 3" />
          </NextLink>
          {/* <NextLink href="https://www.linkedin.com/in/your-linkedin-username/" passHref>
          <img src="medium.svg" alt="Social Media Icon 5" />
          </NextLink> */}
          <NextLink href="https://www.instagram.com/_i.eshaa_/?igsh=MzRlODBiNWFlZA%3D%" >
          <img src="instagram.svg" alt="Social Media Icon 4" />
          </NextLink>
        </div>
        
   <div className="mainbutton">
    <button style={{backgroundImage: "linear-gradient(to right, #038198, #4adda9dd)", color: 'rgb(37 37 37)'} } onClick={handleResumeClick}>Resume</button>
    <NextLink href="#contact">
          
    <button style={{ backgroundColor: '#303030', color: '#1fbabf' }}>Contact</button>
        
      </NextLink>
    {/* <ScrollLink to="contact" spy={true} smooth={true} offset={50} duration={500}>
        <button style={{ backgroundColor: '#303030', color: '#1fbabf' }}>Contact</button>
      </ScrollLink> */}
   </div>
   <ScrollLink to="about" smooth={true} duration={500}>
   <div className="arrow-container">
      <img
        className="arrow-image"
        src="down.png"
        alt="collapsearrow"
        loading="lazy"
      />
    </div>
      </ScrollLink>

      <div className="Gradient"></div>

   </div>

   </>
  );
};

export default Home;
