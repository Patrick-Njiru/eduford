import React from 'react'
import { NavLink } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi'

import { navMenuData } from '../../constants/data'

const Navbar = () => (
    <nav id='navmenu' className="navbar pt-5 position-absolute w-100">
        <div className="container d-flex justify-content-between align-items-center">
            <img src={navMenuData.logo} alt="university logo" width='150'/>

            {/* Menu */}
            <ul className='navbar-nav d-none d-md-block'>
                { 
                    navMenuData.navLinks.map(link => 
                        <NavLink to={link.path} key={link.page} className='navlink ms-4 pb-2 fw-bold'>
                            { link.page } 
                        </NavLink>
                    )
                }
            </ul>

            {/* Hamburger Menu */}
            <div className='d-md-none'>
                <button className="navbar-toggler border-0 bg-transparent" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight">
                    <GiHamburgerMenu className='fs-1 text-white' />
                </button>

                <div className="offcanvas offcanvas-end text-center w-50" id="offcanvasRight">
                    <div className="offcanvas-header">
                        <button type="button" className="btn-close mb-3 bg-secondary" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>

                    <ul className="navbar-nav">
                        { 
                            navMenuData.navLinks.map(link => 
                                <NavLink to={link.path} key={link.page} className='navlink my-3 fw-bold'>
                                    { link.page } 
                                </NavLink>
                            )
                        }
                    </ul>
                </div>
            </div>
        </div>
    </nav>
)

export default Navbar