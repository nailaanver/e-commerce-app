import { faCommentDots, faEnvelope, faLocationDot, faPhone, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import '../styles/ContactForm.css'

const ContactForm = () => {
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
                <form className='contact-form-in'>
                    <div className="input-part">
                        <FontAwesomeIcon icon={faUser} className='form-icon'/>
                        <input type='text' placeholder='Your Name'/>
                    </div>
                    <div className="input-part">
                        <FontAwesomeIcon icon={faEnvelope} className='form-icon'/>
                        <input type='text' placeholder='Your Email'/>
                    </div>
                    <div className="input-part textarea-part">
                        <FontAwesomeIcon icon={faCommentDots} className='form-icon-textarea'/>
                        <textarea placeholder='Your Name'/>
                    </div>
                          <button type="submit" className="send-btn">Send Now</button>

                </form>
            </div>
        </div>
    </section>
  )
}

export default ContactForm