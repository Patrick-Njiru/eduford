import React from 'react'
import { NavLink } from 'react-router-dom'

import { homePageData } from '../constants/data'
import HomeButton from '../containers/home/HomeButton'
import './components.css'

const Enroll = () => (
    <div className="enroll row my-5 py-5 rounded mx-auto">
        <div className="text-center my-5 text-white col-11 mx-auto">
            <h1 className=' my-5 mx-auto'> { homePageData.bottomHeading } </h1>
            <NavLink to='/contact'>
                <HomeButton about={ homePageData.contactButton } />
            </NavLink>
        </div>
    </div>
)

export default Enroll