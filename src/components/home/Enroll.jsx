import React from 'react'
import { NavLink } from 'react-router-dom'

import { homePageData } from '../../constants/data'
import Button from './Button'
import './home.css'

const Enroll = () => (
    <div className="enroll row my-5 py-5 rounded mx-auto">
        <div className="text-center my-5 text-white col-11 mx-auto">
            <h1 className=' my-5 mx-auto text-white'> { homePageData.bottomHeading } </h1>
            <NavLink to='/contact'>
                <Button about={ homePageData.contactButton } />
            </NavLink>
        </div>
    </div>
)

export default Enroll