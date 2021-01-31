import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import './Nav.css'

const Nav = () => {

    const [navActive, setNavActive] = useState('')

    const resetNav = () => {
        setNavActive('')
    }

    const navToggle = (e) => {
        e.target.classList.toggle('toggle')
        if (navActive === '') {
            setNavActive('nav-active')
        } else {
            setNavActive('')
        }
    }

    return (
        <div className="Nav">
            <div className="container" style={navStyle}>
                <Link style={linkStyle} to='/'>
                <div className="logo"><span className="highlight">HOT</span>FLIX</div>
                </Link>
                <div id={navActive} className="nav-bar">
                    <Link style={linkStyle} to='/'>
                    <div onClick={resetNav}>Home</div>
                    </Link>
                    <Link style={linkStyle} to='/catalog'>
                    <div onClick={resetNav}>Catalog</div>
                    </Link>                  
                </div>
                <div onClick={navToggle} className="burger">
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>
            </div>
        </div>
    )
}

const linkStyle = {
    color: 'rgb(150, 150, 150)',
    textDecoration: 'none',
    fontSize: '0.9rem'
}

const navStyle = {
    display: 'flex',
    margin: 'auto',
    // minHeight: '100%',
    alignItems: 'center',
}

export default Nav
