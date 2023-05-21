import React from 'react'
import { TopSection } from '../components'
import { blogsPageData } from '../constants/data'

const Blog = () => (
    <div>
        <TopSection topHeading={blogsPageData.topHeading} />
    </div>
)

export default Blog