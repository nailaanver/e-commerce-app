import React from "react"
import { Link } from "react-router-dom"
import '../styles/Header.css'
const Header = () => {
    return(
        <header className="head">
            <div className="container head-content">
                <div className="logo">
                    <img src="/images/logo.png"/>
                </div>
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
                    </ul>
                </nav>
            </div>
        </header>
    )
}
export default Header