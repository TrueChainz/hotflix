import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Nav.css'

const Nav = () => {
    const [navActive, setNavActive] = useState('')
    const { pathname } = useLocation()

    const resetNav = () => setNavActive('')

    const navToggle = (e) => {
        if (navActive === '') {
            setNavActive('nav-active')
            e.target.classList.add('toggle')
        } else {
            setNavActive('')
            e.target.classList.remove('toggle')
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
                        <div onClick={resetNav} className={`nav-link${pathname === '/' ? ' active-link' : ''}`}>Home</div>
                    </Link>
                    <Link style={linkStyle} to='/catalog'>
                        <div onClick={resetNav} className={`nav-link${pathname === '/catalog' ? ' active-link' : ''}`}>Catalog</div>
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
    color: 'inherit',
    textDecoration: 'none',
}

const navStyle = {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
}

export default Nav
