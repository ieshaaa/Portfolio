"use client"; 

import React from 'react';
// import '../App.css';
import { useEffect, useRef } from 'react';


const About = () => {
    // const someRef = useRef(null);

    // useEffect(() => {
    //   // Use the ref in the useEffect or other client-side logic
    //   console.log(someRef.current);
    // }, []);
  
  return (
      <div id="about" className="about-container">
         <div className='skill-heading-container'>
          <div className="section-1">
          <div className="icon">
            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 16 16"  style={{
            width: "35px", height: "auto",
             fill: "#ffffff",
            }}>
  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
</svg>
          <span className='icon1-gradient' style={{backgroundColor: "#4FB7FC"}}></span>
          </div>

            <div className="git-line" style={{background: 'linear-gradient(to bottom, #4FB7FC, #161515)'}}></div>
            </div>
            <div className="section-2">
          <div className='h'>ABOUT ME</div>
          <div style={{margin:"15px 0 20px 0"}}>
        <h5 className="my-heading">
          <span className="color-head" style={{color: '#4FB7FC'}}>Hello world; take a quick glance at my biography and personality </span>
          have a good read as you get to know how I could contribute to your work In/outside technical skills.
        </h5>
      </div>

            </div>
          </div>
       <div className="about">
       
   <span className="about-img">
    <div className="developer-img">
          <img src="me.jpeg" alt="my image" />
    </div>
          </span>
          <span className='about-content' > 
        {/* <h4>About Me</h4> */}
        <span>I'm a final year undergraduate student in Electronics and Communication Engineering at Madhav Institute of Technology and Science (MITS) in Gwalior, India.👨🏽‍🎓 I'm passionate about exploring the latest technologies and applying them to my projects. 🚀</span>
        <span>I started my tech career as a backend and database developer, where I explored multiple tools and built solid projects within the technologies learnt…then diverted to Frontend engineering due to my love and interest for good designs, smooth user interfaces and experience.💻</span>
        <span>Asides being a code addict, I pick great interest in reading. I’m also a music 🎧and game lover🎮Who also loves to spend enough time with family after work.</span>
        <span>Let's build something amazing together! 🔧🌟</span>
       {/* <span><span style={{fontSize:"22px"}}>Interests:</span><span>Reading Books, Playing Games Online, Engaging with communities.</span></span> */}
        </span>
        </div>
        <div className='skill-head'>
          <div className="section-1" >

            <div className="git-line-up" style={{background: 'linear-gradient(to top, #7EE787, #161515)'}}></div>
            </div>

          </div>
        {/* <hr style={{ borderColor: 'gray', width: '90%', margin: '50px 0' }} /> */}
  </div>
   
  
  );
};

export default About;
