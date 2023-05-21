import React from 'react'

import { homePageData } from '../constants/data'
import './components.css'

const Campuses = () => (
    <div className="row pt-2">
        { homePageData.campuses.map( campus => 
            <div 
                className='campus-card rounded text-center col-10 col-sm-5 col-md-3 mx-auto mb-5 p-0'
                style={{
                    height: '60vh', 
                    background: `rgba(255, 0, 0, 0.681) url(${campus.pic}) no-repeat`, 
                    backgroundSize: '100.1% 100%'
                }}
                key={campus.location}
            >
                <h2 className='fw-normal text-bottom'> { campus.location } </h2>
            </div>
        )}
    </div>
)

export default Campuses