import React from 'react'

import { homePage } from '../constants/data'
import './components.css'

const CourseCards = () => (
    <div className="row">
        { homePage.courses.map( course => 
            <div 
                className='card shadow text-center col-10 col-sm-5 col-md-3 mx-auto mb-5 pt-3'
                style={{ background: 'rgba(255, 192, 203, 0.435)' }}
                key={course.title}
            >
                <h4 className='mb-4'> { course.title } </h4>
                <p className='text-secondary'> { course.content } </p>
            </div>
        )}
    </div>
)

export default CourseCards