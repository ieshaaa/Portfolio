import React from 'react';
import { Link } from 'react-router-dom';
// import '../App.css'



const Education = () => {
  return (
      <div id="education" className="edu-container">
         <div className='skill-heading-container'>
         {/* <div className="git-line-upp">iiiiii</div> */}

          <div className="section-1">
          <div className="icon">
          
            <svg xmlns="http://www.w3.org/2000/svg" style={{
            width: "35px", height: "auto",
             fill: "#ffffff",
            }}viewBox="0 0 16 16">
  <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917zM8 8.46 1.758 5.965 8 3.052l6.242 2.913z"/>
  <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466zm-.068 1.873.22-.748 3.496 1.311a.5.5 0 0 0 .352 0l3.496-1.311.22.748L8 12.46z"/>
</svg>
          <span className='icon1-gradient'>h</span>
          </div>

            <div className="git-line"></div>
            </div>
            <div className="section-2">
          <div className='h'>EDUCATION</div>
          <div style={{margin:"15px 0 45px 0"}}>
        <h5 className="my-heading">
          <span className="color-head">Throughout my educational path, spanning from high school to college <development></development></span>
          I cultivated expertise in crafting intuitive user interfaces.
        </h5>
      </div>

            </div>
          </div>

      <span className='edu'>
      <div className="Gradient" style={{bottom: "120px",  background: "radial-gradient(circle at bottom right, #1467db, #14dbdb)"}}></div>

          <span className='edu-content'> 
          <span>
        <h5>Bachelor of Technology</h5>
        <h4>Madhav Institute of Technology and Science, Gwalior</h4>
        <span>2020 - 2024 | Score: 8.3 CGPA (aggregate)</span>
        </span>
        <span>
        <h5>12th Standard</h5>
        <h4 >Snaskar Public School, Gwalior</h4>
        <span>2019 - 2020 | Score: 81.5%</span>
        </span>
        <span>
        <h5>10th Standard</h5>
        <h4>The Radiant School, Gwalior</h4>
        <span>2017 - 2018 | Score: 9.2 CGPA</span>
        </span>
        </span>
        
        </span>
        <div className='skill-head' >
          <div className="section-1" >

            <div className="git-line-up" style={{background: 'linear-gradient(to top, #F97F51, #161515)'}}></div>
            </div>

          </div>


  </div>
   
  
  );
};

export default Education;
