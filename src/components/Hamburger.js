"use client";
import React, { useState } from 'react';
import '../app/style.css';
import NextLink from 'next/link';

function Hamburger() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <input 
      className="menu-icon" 
      type="checkbox" 
      id="menu-icon" 
      name="menu-icon" 
      checked={menuOpen}
        onChange={toggleMenu}
        />
      <label htmlFor="menu-icon"></label>
      <nav className={`nav ${menuOpen ? 'open' : ''}`}>
        <ul className="pt-5">
          <li> <NextLink href="#home" onClick={toggleMenu}>
             Home
            </NextLink></li>
          <li><NextLink href="#about" onClick={toggleMenu}>
              About
            </NextLink></li>
          <li><NextLink href="#experience" onClick={toggleMenu}>Experience</NextLink></li>
          <li><NextLink href="#skills" onClick={toggleMenu}>Skills</NextLink></li>
          <li><NextLink href="#projects" onClick={toggleMenu}>Projects</NextLink></li>
          
     
        </ul>
      </nav>
    </>
  );
}

export default Hamburger;
