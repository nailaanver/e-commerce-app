import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/ServiceBanner.css'

const ServicesBanner = () => {
  return (
    <section id='service-banner'>
      <div className="service-banner-content">
        <img src='/images/service-bg.webp' />

        <div className='service-head container'>
          <h1>DESIGN PLANNING</h1>
          <Link to={'/'} className='bread-crums'>
            Home <span>—</span> Services <span>—</span> Design Planing
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ServicesBanner