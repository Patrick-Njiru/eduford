import React from 'react'

import { background } from '../constants/images'
import './components.css'

const styles= {
    height: '65vh',
    paddingTop:'32.5vh',
    background: `rgba(1, 1, 16, 0.497) url(${background}) no-repeat`,
    backgroundSize: 'cover',
    backgroundBlendMode: 'color-dodge',
    backgroundPosition: 'center',
}

const TopSection = ({ topHeading }) => <div className='text-center text-white h1 fw-bolder' style={styles}> { topHeading } </div>

export default TopSection 