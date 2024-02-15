'use client'

import React, { useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import '../App.css'


const Skills = () => {

 

  return (
    <>
      <div id="skills" className="skill-container">
        
        <div className='skill-heading-container'>
          <div className="section-1">
          <div className="icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"  style={{
            width: "35px", height: "auto",
             fill: "#ffffff",
            }}><path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"/></svg>
          <span className='icon1-gradient' style={{backgroundColor: "#FFC312"}}></span>
          </div>

            <div className="git-line" style={{background: 'linear-gradient(to bottom, #FFC312, #161515)'}}></div>
            </div>
            <div className="section-2">
          <div className='h'>SKILLS</div>
          <div style={{margin:"15px 0 20px 0"}}>
        <h5 className="my-heading">
          <span className="color-head" style={{color: '#FFC312'}}>Over my years of experience in web and software <development></development></span>
          below are the Technologies and tools I use in problem solving, providing smooth and unique UI to users.
        </h5>
      </div>

            </div>
          </div>

      <div className='skill'>
      {/* <div className="Gradient" style={{top: "120px", left: "40px", background: "radial-gradient(circle at bottom right, #e3da2e, #f4f4f4dd)", opacity: "0.4"}}></div> */}

      <div className="Gradient" style={{bottom: "120px"}}></div>

         <span className='skill-content'> 
          <span>
        <h5>Frontend Languages:</h5>
          <div className='skill-content-box'>
        <div className='skill-box'>
          <img src="html.svg" alt="" />HTML5
          </div>
        <div className='skill-box'>
          <img src="css.svg" alt="" />CSS3
          </div>
        <div className='skill-box'>
          <img src="js.svg" alt="" />JavaScript
          </div>
        <div className='skill-box'>
          <img src="react.svg" alt="" />Reactjs
          </div>
        <div className='skill-box'>
          <img src="react.svg" alt="" />Redux
          </div>
        <div className='skill-box'>
          <img src="boot.svg" alt="" />BootStrap
          </div>
        <div className='skill-box'>
          <img src="tailwind-css.svg" alt="" />Tailwind
          </div>
        <div className='skill-box'>
          <img src="nextjs.svg" alt="" />Nextjs
          </div>
        </div>
        </span>
        <span>
        <h5>Backend Languages and DataBases:</h5>
        <div className='skill-content-box'>
        <div className='skill-box'>
          <img src="node-js.svg" alt="" />Nodejs
          </div>
          <div className='skill-box'>
          <img src="express.svg" alt="" />Expressjs
          </div>
          <div className='skill-box'>
          <img src="sequelize.svg" alt="" />Sequelize
          </div>
          <div className='skill-box'>
          <img src="mysql.svg" alt="" />MySQL
          </div>
          <div className='skill-box'>
          <img src="mongodb.svg" alt="" />MongoDB
          </div>
          <div className='skill-box'>
          <img src="firebase.svg" alt="" />FireBase
        </div>
        </div>
        </span>
       
        <span>
        <h5>Tools:</h5>
        <div className='skill-content-box'>
        <div className='skill-box'>
          <img src="postman.svg" alt="" />Postman
          </div>
          <div className='skill-box'>
          <img src="vs-code.svg" alt="" />VSCode
          </div>
          <div className='skill-box'>
          <img src="github.svg" alt="" />GitHub
          </div>
        </div>
        </span>
        </span>
        </div>
        <div className='skill-head'>
          <div className="section-1" >

            <div className="git-line-up" style={{background: 'linear-gradient(to top, #fc5c65, #161515)'}}></div>
            </div>

          </div>
  </div>
   </>
  
  );
};

export default Skills;
