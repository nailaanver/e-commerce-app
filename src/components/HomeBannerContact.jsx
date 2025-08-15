import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/HomeBannerContact.css'

const HomeBannerContact = () => {
  return (
    <>
    <section id='contact-banner'>
        <div className="contact-main">
        <div className='contact-img'>
            <img src='/images/contact-banner-1.webp'/>
        
        <div className="banner-contact container">
            <h1>CONTACT US</h1>
            <Link to = {'/'} className='bread-crums'>
                <span>HOME - Contact us</span>
            </Link>
        </div>
        </div>
        </div> 
    </section>

    <section id='contact-map'>
        <div className="map-contact container">
            <h1>Get in touch with us to design</h1>
            <h1>your dream home</h1>
        </div>
        <div className='map container'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.1628440714185!2d106.83184320931244!3d-6.372966993590625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ec093dabf58d%3A0xd3365350a2ebe2f!2sMARGOCITY!5e0!3m2!1sen!2sin!4v1755154962403!5m2!1sen!2sin" 
            width="600" 
            height="450" 
            // style={{ border : "0" } }
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade">
            </iframe>
        </div>

    </section>
    </>
  )
}

export default HomeBannerContact