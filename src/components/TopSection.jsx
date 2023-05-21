import React from 'react'

import { background } from '../constants/images'

const styles= {
    height: '53vh',
    paddingTop:'24vh',
    marginBottom: '10vh',

    background: `rgba(0, 0, 0, 0.6) url(${background}) no-repeat`,
    backgroundSize: 'cover',
    backgroundBlendMode: 'color-dodge',
    backgroundPosition: 'center',
}

const TopSection = ({ topHeading }) => <h1 className='text-center text-white fw-bolder' style={styles}> { topHeading } </h1>

export default TopSection 