import React from 'react'
import { CourseCards, Facilities, Heading, TopSection } from '../components'
import { coursesPageData } from '../constants/data'

const Courses = () => (
    <div>
        <TopSection topHeading={coursesPageData.topHeading} />
        <div className="container">
            <Heading title={coursesPageData.secondHeading} />
            <CourseCards />
            <Heading title={coursesPageData.thirdHeading} />
            <Facilities />
        </div>
    </div>
)

export default Courses