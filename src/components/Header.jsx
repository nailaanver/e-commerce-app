import React, { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import '../styles/Header.css'
import { getFromLocalStorage } from "../utils/Helpers"
const Header = () => {

    const handleLogout = () => {
        window.localStorage.clear()
    }
    const [isLoggedIn ,setIsLoggedIn] = useState(false)
    const location = useLocation()
    const [hidden, setHidden] = useState(false)

    useEffect (() => {
        // console.log(location.pathname)
        const token = getFromLocalStorage('access_token')
        // const token = window.localStorage.getItem('access-token')

        if(!token) {
            setIsLoggedIn(false)
        } else{
            setIsLoggedIn(true)
        }
    }, [location.pathname])

    useEffect(()=>{
        if(location.pathname === '/login' || location.pathname === '/signup'){
            setHidden(true)
        }else {
            setHidden(false)
        }
    },[location.pathname])
    
    return(
    
        <header className="head" style={{ display : hidden ? 'none' : '', position : 'relative'}}>
            <div className="container head-content">
                <div className="logo">
                    <img src="/images/logo.png"/>
                </div>
                {/* <div className="head-right"> */}
                <nav >
                    <ul className="list-items">
                        <li><Link to = {'/'}>
                            <span>Home</span>
                        </Link></li>
                        <li><Link to = {'/services'}>
                            <span>Services</span>
                        </Link></li>
                        <li><Link to = {'/contact'}>
                            <span>Contact</span>
                        </Link></li>
                        <li><Link to = {'/blog'}>
                            <span>Blog</span>
                        </Link></li>
                        {/* <li><Link to = {'/login'}><button>Login</button></Link></li> */}
                    </ul>
                </nav>
                {/* <div> */}
                    { !isLoggedIn && location.pathname !=='/login' && <Link to={'/login'}><button>Login</button></Link>}
                    { isLoggedIn && <Link to={'/login'}><button onClick={handleLogout}>Logout</button></Link>} 
                {/* </div> */}
                {/* </div> */} 
            </div>
        </header>
    )
}
export default Header