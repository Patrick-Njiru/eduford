import React from 'react'

import { homePageData } from '../constants/data'

const CourseCards = () => (
    <div className="row">
        { 
            homePageData.courses.map(course => 
                <div 
                    key={course.title}
                    style={{ background: 'rgba(255, 192, 203, 0.335)' }}
                    className='card shadow text-center col-10 col-sm-5 col-md-3 mx-auto mb-5 pt-3'
                >
                    <h3 className='mb-4 fw-bold'> { course.title } </h3>
                    
                    <p className='text-secondary'> { course.content } </p>
                </div>
            )
        }
    </div>
)

export default CourseCards