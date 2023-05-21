import React from 'react'

import { homePageData } from '../constants/data'

const Facilities = () => (
    <div className='row'>
        {   
            homePageData.facilities.map(facility => 
                <div key={facility.title} className='card border-0 col-10 col-sm-5 col-md-3 mx-auto mb-5 mt-3'>
                    <img src={facility.pic} alt={facility.title} className='rounded' />

                    <h3 className='my-3 fw-bold'> { facility.title } </h3>

                    <p className='text-secondary'> { facility.content } </p>
                </div>
            )
        }
    </div>
)

export default Facilities