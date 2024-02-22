"use client"
import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';

// import '../App.css'

const Contact = () => {
  const initialFormState = {
    Name: '',
    Email: '',
    Mobile: '',
    Message: '',
  };

  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState(initialFormState);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    try {
      setSubmitting(true);
      // Submit form data to the server endpoint
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        console.log("Message sent successfully");
        throw new Error(`Invalid response: ${response.status}`);
      }

      toast.success('Thanks for contacting me! I will get back to you soon.', { duration: 3000 });
      setFormData(initialFormState);

    } catch (error) {
      console.error(error);
      toast.error("We can't submit the form. Please try again later." , { duration: 3000 });
    } finally {
      setSubmitting(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };


  return (
    <>
      <div id="contact" className="contact-container">
    <div className='heading-contact'>
    <h2 className="custom-heading-2">Get In Touch!</h2>

    {/* <h4>Want to Connect with Me?</h4> */}
    <h6>Wanna Hire me, Collaborate, or have a few chats about technologies and sharing ideas? You're an email away from that.🚀</h6>
    </div>
       <div className="contact">
   <div className='first'>
   <span><img src="mail.svg" alt="my image" /><h6>ishagupta16801@gmail.com</h6></span>
   <span><img src="location.svg" alt="my image" /><h6>Roxy Talkies, Lashkar, Gwalior, Madhya Pradesh, 474001</h6></span>
   <span><img src="linkdin.svg" alt="my image" /><h6>@ishagupta</h6></span>
   <span><img src="github.svg" alt="my image" /><h6>@ieshaaa</h6></span>
   <span><img src="twitter.svg" alt="my image" /><h6>@IshaGupta168</h6></span>
   <span><img src="instagram.svg" alt="my image" /><h6>@i.eshaa</h6></span>
   </div>
   {/* <hr/>/ */}
    {/* <form action='https://formspree.io/f/xgegvdjy' method='POST'> */}
    <form onSubmit={handleSubmit}>
   <div className='second'>
        <input 
        type='text' 
        name='Name'
        // errorBorderColor="red.300"
        placeholder='Name'
        required
        value={formData.Name}  // Controlled input value
        onChange={handleInputChange}
        /> 
        <input 
        type='email'
        name='Email'
        placeholder='Email'
        required
        value={formData.Email}  // Controlled input value
        onChange={handleInputChange}
        />
        <input 
        type='number'
        name="Mobile"
        placeholder='Mobile'
        required
        value={formData.Mobile}  // Controlled input value
        onChange={handleInputChange}
        />
        <textarea 
        name="Message" 
        placeholder='Message' 
        required
        value={formData.Message}  // Controlled input value
        onChange={handleInputChange}
        />
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

        <button type='submit' disabled={submitting} className='jump-animation'>Submit</button>
       
   </div>
    </form>
        </div>    
        <hr style={{ borderColor: 'gray', width: '95%', marginTop: '30px'}} />
        </div>

  </>
  );
};

export default Contact;
