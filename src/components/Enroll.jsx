import React from 'react'
import { homePage } from '../constants/data'
import Button from './Button'
import './components.css'

const Enroll = () => (
    <div className="row enroll my-5 py-5 rounded mx-auto">
        <div className="text-center my-5 text-white col-11 mx-auto">
            <h1 className=' my-5 mx-auto'> { homePage.bottomHeading } </h1>
            <Button about={ homePage.contactButton } />
        </div>
    </div>
)

export default Enroll