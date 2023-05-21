import React from 'react'

import HomeTopSection from './HomeTopSection'
import { Campuses, CourseCards, Enroll, Facilities, Heading, Reviews } from '../../components'
import './home.css'


const Home = () => (
    <div>
        <HomeTopSection />
        <div className="container">
            <Heading title='Courses We Offer' />
            <CourseCards />
            <Heading title='Our Global Campus' />
            <Campuses />
            <Heading title='Our Facilities' />
            <Facilities />
            <Heading title='What Our Students Say' />
            <Reviews />
            <Enroll />
        </div>
        
    </div>
)

export default Home