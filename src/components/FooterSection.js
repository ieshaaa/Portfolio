import React from 'react';
import { Link } from 'react-router-dom';
// import '../App.css'



const Footersection = () => {
  return (
      <div id="footer" className="footer-container">
       <div className="footer">
   <span className="first-footer">
          <div>Let’s Connect</div>
          <div className='footer-contact-img'>
   <span><img src="linkdin.svg" alt="my image" /><a href="https://www.linkedin.com/in/isha-gupta-84a730217"></a></span>
   <span><img src="github.svg" alt="my image" /><a href="https://github.com/ieshaaa"></a></span>
   <span><img src="twitter.svg" alt="my image" /><a href="https://x.com/IshaGupta168?t=WMEajVsDJAX34kKQgvBh-w&s=09"></a></span>
   <span><img src="instagram.svg" alt="my image" /><a href="https://www.instagram.com/_i.eshaa_/?igsh=MzRlODBiNWFlZA%3D%"></a></span>         
    </div>
    </span>
    <span className="second-footer">
          <div className='sec-c'>
          <span className='white'>Made with ❤️ by</span>
          <span className='green'> Isha Gupta</span>   
           
    </div>
          <div className='sec-d'>
          <span>© 2023 Isha Gupta. All rights reserved.</span>
    </div>
    </span>
        </div>

 </div>
   
  
  );
};

export default Footersection;
