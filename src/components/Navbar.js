"use client";

import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

import About from './About';
import NextLink from 'next/link';
import Hamburger from './Hamburger';



const Navbar = () => {
  return (
   

    <>
    {/* <div className='ham'>
      <Hamburger />
    </div> */}
    <div className='navbar-container'>
      <nav className="glass">
        {/* Logo */}
        <NextLink href="/" style={{ textDecoration: 'none' }}>
        <div className="logo" >
          Isha.
        </div>
          
        </NextLink>

        {/* Navigation Links */}
        <div className="nav-links">
          <NextLink href="#home">
          
              Home
            
          </NextLink>
          <NextLink href="#about">
            
              About
            
          </NextLink>
          {/* Add similar links for other sections */}
          <NextLink href="#experience">
          
              Experience
            
          </NextLink>
          <NextLink href="#skills">
          
              Skills
            
          </NextLink>
          <NextLink href="#projects">
          
              Projects
            
          </NextLink>
        </div>

        {/* Get In Touch Link */}
        <NextLink href="mailto:ishagupta16801@gmail.com" className="custom-link hiremebtn">
          
            Get In Touch
          
        </NextLink>
      </nav>
    </div>
  </>

  );
};

export default Navbar;
