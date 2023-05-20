import React from 'react'

import './components.css'

const Heading = ({ title, content }) => (
    <div className='heading text-center pt-5 mb-5'>
        <h1 className='mb-3 fw-bolder'> { title } </h1>
        <p className='text-secondary'> { content } </p>
    </div>
)

export default Heading