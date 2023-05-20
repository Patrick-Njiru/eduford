import React from 'react'
import { TopSection } from '../components'
import { blogsPage } from '../constants/data'

const Blog = () => (
    <div>
        <TopSection topHeading={blogsPage.topHeading} />
    </div>
)

export default Blog