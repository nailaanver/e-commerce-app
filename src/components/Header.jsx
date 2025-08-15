import React, { useEffect, useState } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import '../styles/Header.css'
import { getFromLocalStorage } from "../utils/Helpers"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleUser, faUser, faHeart, faMessage, faGear, faArrowRightFromBracket, } from "@fortawesome/free-solid-svg-icons"



const Header = () => {

    const navigator = useNavigate()
    const location = useLocation()

    const handleLogout = () => {
        window.localStorage.clear()
        setIsLoggedIn(false)
        setLogout(true)

        navigator('/login')
    }

    const [isLogout, setLogout] = useState(false)
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [hidden, setHidden] = useState(false)
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)

    useEffect(() => {
        // console.log(location.pathname)
        const token = getFromLocalStorage('access_token')

        if (!token) {
            setIsLoggedIn(false)
        } else {
            setIsLoggedIn(true)
        }
    }, [location.pathname])

    useEffect(() => {
        if (location.pathname === '/login' || location.pathname === '/signup') {
            setHidden(true)
        } else {
            setHidden(false)
        }
    }, [location.pathname])

    return (



        <header className="head" style={{ display: hidden ? 'none' : '', position: 'relative' }}>
            <div className="container head-content">
                <div className="logo">
                    <img src="/images/logo.png" />
                </div>
                {/* <div className="head-right"> */}
                <nav >
                    <ul className="list-items">
                        <li><Link to={'/'}>
                            <span>HOME</span>
                        </Link></li>
                        <li><Link to={'/services'}>
                            <span>SERVICES</span>
                        </Link></li>
                        <li><Link to={'/contact'}>
                            <span>CONTACT</span>
                        </Link></li>


                       


                        <li><Link to = {'/blog'}>
                            <span>SHOP</span>
                        </Link></li>

                        {/* <li><Link to = {'/login'}><button>Login</button></Link></li> */}
                    </ul>
                </nav>




                <div className="header-icon">
                    <div className="header-profile-icon">
                        <button className="profile-icon" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                            <FontAwesomeIcon icon={faCircleUser} />
                        </button>
                        {isDropdownOpen && (
                            <div className="profile-dropdown">
                                <Link to="/profile" className="dropdown-item">
                                    <FontAwesomeIcon icon={faUser} />Profile
                                </Link>
                                <Link to="/wishlist" className="dropdown-item">
                                    <FontAwesomeIcon icon={faHeart} />Wishlilst
                                </Link>
                                <Link to="/messages" className="dropdown-item">
                                    <FontAwesomeIcon icon={faMessage} /> Messages
                                </Link>
                                <Link to="/settings" className="dropdown-item">
                                    <FontAwesomeIcon icon={faGear} />Settings
                                </Link>
                                {isLoggedIn && (
                                    <>
                                        <button onClick={handleLogout} className="dropdown-item logout-btn">
                                            <FontAwesomeIcon icon={faArrowRightFromBracket} /> Logout
                                        </button>
                                        {isLogout && location.pathname !== '/login' && <Link to={'/login'}></Link>}
                                    </>
                                )}
                            </div>
                        )}

                    </div>
                    {!isLoggedIn && location.pathname !== '/login' && <Link to={'/login'} />}
                    {/* <button>Login</button></Link>
                    { isLoggedIn && <Link to={'/login'}><button onClick={handleLogout}>Logout</button></Link>} 
             */}
                </div>
            </div>
        </header>



    )
}
export default Header



