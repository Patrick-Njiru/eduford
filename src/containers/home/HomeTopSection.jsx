import React from 'react'

import { homePage } from '../../constants/data'
import { Button } from '../../components'
import './home.css'

const HomeTopSection = () => (
    <div className="top-section text-white text-center mb-5">
        <div className="container">
            <h1 className='top-section__heading fw-bolder mb-5'> { homePage.topHeading } </h1>
            <p className="top-section__p mx-auto mb-5"> { homePage.introText }</p>
            <Button className='top-section__button' about={ homePage.topButton } />
        </div>
    </div>
)

export default HomeTopSection