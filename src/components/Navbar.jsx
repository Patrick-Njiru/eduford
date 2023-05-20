import React from 'react'
import { NavLink } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi'

import { navMenu } from '../constants/data'
import './styles.css'

const Navbar = () => (

    <nav id='navmenu' className="navbar pt-5 fixed-top">
        <div className="container d-flex justify-content-between align-items-center">
            <img src={navMenu.logo} alt="university logo" width='150' height='50'/>
            {/* Large Screen Menu */}
            <ul className='d-none d-md-block navlink'>
                { navMenu.navLinks.map(link => 
                    <NavLink to={link.path} key={link.page} className='ms-4 h6 pb-2' >
                        { link.page } 
                    </NavLink>
                )}
            </ul>
            {/* Small Screen Menu */}
            <div className='d-md-none'>
                <button className="navbar-toggler border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight">
                    <GiHamburgerMenu className='fs-1 text-white' />
                </button>
                <div className="offcanvas offcanvas-end text-center w-50 bg-dark" id="offcanvasRight">
                    <div className="offcanvas-header">
                        <button type="button" className="btn-close mb-3 bg-secondary" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <ul className="navbar-nav side-navlinks">
                        { navMenu.navLinks.map(link => 
                            <NavLink to={link.path} key={link.page} className='my-3' >
                                { link.page } 
                            </NavLink>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    </nav>
)

export default Navbar