import React from 'react'
import { NavLink } from 'react-router-dom'

import { homePageData } from '../../constants/data'
import { banner } from '../../constants/images'
import Button from '../Button'

const styles = {
    height: '100vh',
    paddingTop: '34vh',   
    background: `rgba(0,0, 0, 0.6) url(${banner}) no-repeat`,
    backgroundSize: 'cover',
    backgroundBlendMode: 'color-dodge',
}

const HomeTopSection = () => (
    <div className="text-white text-center mb-5" style={styles}>
        <div className="container">
            <h1 className='top-section__heading fw-bolder mb-5 text-white'> { homePageData.topHeading } </h1>

            <p className="top-section__p mx-auto mb-5"> { homePageData.introText } </p>

            <NavLink to='/about-us'>
                <Button purspose={homePageData.topButton} classes='text-white border-white' />
            </NavLink>
        </div>
    </div>
)

export default HomeTopSection