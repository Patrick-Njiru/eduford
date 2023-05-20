import React from 'react'

import { homePage } from '../constants/data'

const Facilities = () => (
    <div className='row'>
        { homePage.facilities.map( facility => 
            <div 
                className='card border-0 col-10 col-sm-5 col-md-3 mx-auto mb-5 mt-3'
                key={facility.title} 
            >
                <img src={facility.pic} alt={facility.title} className='rounded' />
                <h4 className='my-3'> { facility.title } </h4>
                <p className='text-secondary'> { facility.content } </p>
            </div>
        )}
    </div>
)

export default Facilities