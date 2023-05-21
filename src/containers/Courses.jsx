import React from 'react'
import { TopSection } from '../components'
import { coursesPageData } from '../constants/data'

const Courses = () => (
    <div>
        <TopSection topHeading={coursesPageData.topHeading} />
    </div>
)

export default Courses