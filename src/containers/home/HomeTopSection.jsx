import React from 'react'

import { homePage } from '../../constants/data'
import { banner } from '../../constants/images'
import { Button } from '../../components'

const styles = {
    height: '100vh', 
    paddingTop:  '40vh',    
    background: `rgba(1, 1, 16, 0.697) url(${banner}) no-repeat`,
    backgroundSize: 'cover',
    backgroundBlendMode: 'color-dodge'
}

const HomeTopSection = () => (
    <div className="text-white text-center" style={styles}>
        <h1 className='fw-bolder mb-5' > { homePage.topHeading } </h1>
        <p className="lead w-50 mx-auto mb-5"> { homePage.introText }</p>
        <Button about={ homePage.topButton } />
    </div>
)

export default HomeTopSection