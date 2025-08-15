import '../styles/Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareTwitter, faFacebook, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faLocationDot, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { useEffect,useState } from 'react'
import { useLocation } from 'react-router-dom'



const Footer = () => {
    const [hidden, setHidden] = useState(false)
    const location = useLocation()
    useEffect(()=>{
            if(location.pathname === '/login' || location.pathname === '/signup'){
                setHidden(true)
            }else {
                setHidden(false)
            }
        },[location.pathname])
    
    return (
        <footer className="foot" style={{ display : hidden ? 'none' : '', position : 'relative'}}>
            <div className="container foot-content">
                <div className="col-first">
                    <img src='/images/logo.png' />
                    <p>We provides a full range of interior design architectural design natural materials.</p>
                    <div className="foot-icons">
                        <button><FontAwesomeIcon className='foot-icon-style' icon={faSquareTwitter}  /></button>
                        <button><FontAwesomeIcon icon={faFacebook} /></button>
                        <button><FontAwesomeIcon icon={faLinkedin} /></button>
                        <button><FontAwesomeIcon icon={faInstagram} /></button>

                    </div>
                </div>
                <div className='col-second'>
                    <h3>Contacts</h3>
                    <div className="col2-row2">
                        <FontAwesomeIcon icon={faLocationDot} />
                        <p> 92490 North, New York City</p>
                    </div>
                    <div className="col2-row3">
                        <FontAwesomeIcon icon={faEnvelope} />
                        <p> hellocohous@cohous.com</p>
                    </div>
                    <div className="col2-row4">
                        <FontAwesomeIcon icon={faPhone} />
                        <p> +2-789-123-654</p>
                    </div>
                </div>
                <div className='col-third'>
                    <h3>Latest Project</h3>
                    <p>Emerald Appartment</p>
                    <p>Private House in Spanyol</p>
                    <p>Caffee & Resto in Paris</p>
                </div>
                <div className='col-four'>
                    <h3>Subscribe</h3>
                    <form className="search-form">
                        <input type="text" placeholder="Search..." className="search-input" />
                        <button type="submit" className="search-button">SUBMIT</button>
                    </form>
                    <p>Follow our newsletter to stay updated about agency.</p>
                </div>
            </div>
            <div className="hr-line container">
                <hr></hr>
            </div>
            <div className="copyright container">
                <p>
                    Copyright©2021 Cohous All Rights Reserved.
                </p>
                <p>
                    Terms of use | Privacy Environmental Policy.
                </p>
            </div>
        </footer>
    )
}
export default Footer