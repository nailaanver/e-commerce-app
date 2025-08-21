import { faCommentDots, faEnvelope, faLocationDot, faPhone, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import '../styles/ContactForm.css'
import  { useState } from "react";



    

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formUrl =
      "https://docs.google.com/forms/d/e/1FAIpQLScTlCsCrAqbhvpYZsGIcSR96hYi_2SQZbLrd9XdA0AdOtAGuA/viewform?usp=preview"; // your formResponse URL

    const formDataObj = new FormData();
    formDataObj.append("YPqjbf", formData.name);     // replace with your entry ID for Name
    formDataObj.append("XmnwAc", formData.email);    // replace with your entry ID for Email
    formDataObj.append("YPqjbf", formData.message);  // replace with your entry ID for Message

    fetch(formUrl, {
      method: "POST",
      body: formDataObj,
      mode: "no-cors", // needed for Google Forms
    })
      .then(() => {
        alert("Form submitted successfully!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((err) => console.error("Error:", err));
  };



  return (
    <section id='contact-form'>
        <div className="contact-form-main container">

            
            <div className="contact-content">
                <h2>Talk with our expert designers</h2>
                <p>Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl.
                Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna.</p>
                <div className="office">
                    <p>Our Office</p>
                    <div className="icon-with-text">
                        <FontAwesomeIcon icon={faLocationDot}  className='icon-color'/>
                        <p>70 Washington Square South New York, NY 10012, United States</p>
                    </div>
                    <div className="icon-with-text">
                        <FontAwesomeIcon icon={faEnvelope} className='icon-color' />
                        <p>contact_info@homekins.com</p>
                    </div>
                    <div className="icon-with-text">
                        <FontAwesomeIcon icon={faPhone} className='icon-color' />
                        <p>+92 423 567 7</p>
                    </div>
                </div>
            </div>

            <div className="contact-form-part">
                <form className='contact-form-in'  onSubmit={handleSubmit}>
                    <div className="input-part">
                        <FontAwesomeIcon icon={faUser} className='form-icon'/>
                        <input type='text' placeholder='Your Name' name='name' onChange={handleChange}/>
                    </div>
                    <div className="input-part">
                        <FontAwesomeIcon icon={faEnvelope} className='form-icon'/>
                        <input type='text' placeholder='Your Email' name='email' onChange={handleChange}/>
                    </div>
                    <div className="input-part textarea-part">
                        <FontAwesomeIcon icon={faCommentDots} className='form-icon-textarea'/>
                        <textarea placeholder='Your Name' name='messege' onChange={handleChange}/>
                    </div>
                          <button type="submit" className="send-btn">Send Now</button>
                           

                </form>
            </div>
        </div>
    </section>
  )
}

export default ContactForm