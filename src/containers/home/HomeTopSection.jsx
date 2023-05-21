import React from 'react'

import { homePageData } from '../../constants/data'
import HomeButton from './HomeButton'
import './home.css'

const HomeTopSection = () => (
    <div className="top-section text-white text-center mb-5">
        <div className="container">
            <h1 className='top-section__heading fw-bolder mb-5'> { homePageData.topHeading } </h1>
            <p className="top-section__p mx-auto mb-5"> { homePageData.introText }</p>
            <HomeButton className='top-section__button' about={ homePageData.topButton } />
        </div>
    </div>
)

export default HomeTopSection