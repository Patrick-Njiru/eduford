import React from 'react'
import { TopSection } from '../components'
import { coursesPage } from '../constants/data'

const Courses = () => (
    <div>
        <TopSection topHeading={coursesPage.topHeading} />
    </div>
)

export default Courses