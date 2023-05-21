import React from 'react'
import { NavLink } from 'react-router-dom'

import { homePageData } from '../../constants/data'
import Button from '../Button'

const Enroll = () => (
    <div className="enroll row my-5 py-5 rounded mx-auto">
        <div className="text-center my-5 text-white col-11 mx-auto">
            <h2 className='enroll-heading my-5 mx-auto text-white'> { homePageData.bottomHeading } </h2>

            <NavLink to='/contact'>
                <Button purspose={homePageData.contactButton} classes='text-white border-white' />
            </NavLink>
        </div>
    </div>
)

export default Enroll