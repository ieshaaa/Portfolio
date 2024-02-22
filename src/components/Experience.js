import React from 'react';
import { Link } from 'react-router-dom';
// import '../App.css'
import NextLink from 'next/link';



const Experience = () => {
  return (
    <div id="experience" className="exp-container">

<div className='skill-heading-container'>
          <div className="section-1">
          <div className="icon">
            <svg xmlns="http://www.w3.org/2000/svg" style={{
            width: "35px", height: "auto",
             fill: "#ffffff",
            }}viewBox="0 0 16 16">
  <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5m1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0M1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5"/>
</svg>
          <span className='icon1-gradient' style={{backgroundColor: "#F97F51"}}>h</span>
          </div>

            <div className="git-line" style={{background: 'linear-gradient(to bottom, #F97F51, #161515)'}}></div>
            </div>
            <div className="section-2">
          <div className='h'>EXPERIENCE</div>
          <div style={{margin:"15px 0 20px 0"}}>
        <h5 className="my-heading">
          <span className="color-head"  style={{color: '#F97F51'}}>Throughout my tenure in web and software development </span>
          I excel in using industry tools for seamless and unique user experiences        </h5>
      </div>

            </div>
          </div>


       <div  className="exp">
       <div className="Gradient" style={{bottom: "120px",  background: "radial-gradient(circle at bottom right, #1467db, #14dbdb)"}}></div>

   <span className="eduheading">
          {/* <h4>Experience</h4>
          <hr/> */}
          </span>
          <span className='exp-content'> 
          <span style={{margin: '0'}}>
        <h5>Software Developer Intern</h5>
        <h4 ><span style={{color:" #1fbabf"}}>Gravit InfoSystems Pvt. Ltd.</span> | June - October 2023 | Gwalior, India</h4>
        {/* <span>Learned and worked on React, Redux, TypeScript, and FluentUI, writing test cases. During the internship, I worked on a number of approaches, which taught me a lot about the application and its functioning.</span> */}
        <span>
        <ul style={{ paddingInlineStart: '23px'}}>
  <li style={{ marginBottom: "10px" }}>
    I gained practical experience in building web applications using MySQL, Express.js, Sequelize, React, and Node.js.
  </li>
  <li style={{ marginBottom: "10px" }}>
  I had a opportunity to work on an online marketplace project, where I contributed to both the frontend and backend development. I handled the frontend of the administrator panel, improving user interfaces for enhanced usability.  </li>
  <li style={{ marginBottom: "10px" }}>
  Additionally, I utilized Node.js and Sequelize to create the backend, efficiently managing the database using MySQL. I also honed my skills in API integration, and problem-solving in a collaborative team environment.
  </li>
  <li style={{ marginBottom: "10px" }}>
    Developed new features and maintained existing ones, ensuring the scalability and performance of the application.
  </li>
</ul>
        </span>
        <div className='skill-content-box'>
        <div className='skill-box'style={{fontWeight: "500", color:"#1fbabf"}}>
          Visit
          <NextLink href="https://dev.digilanxer.com/" passHref>
          <img src="right-arrow.svg" alt="Social Media Icon 1" style={{width: "20px",display:"flex", alignContent:"center"}}/>
          </NextLink> 
          </div>
          </div>
        </span>
        </span>
       
        </div>
        <div className='skill-head'>
          <div className="section-1" >

            <div className="git-line-up" style={{background: 'linear-gradient(to top, #FFC312, #161515)'}}></div>
            </div>

          </div>

 </div>
   
  
  );
};

export default Experience;
