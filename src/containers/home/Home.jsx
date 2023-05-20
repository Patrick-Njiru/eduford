import React from 'react'

import HomeTopSection from './HomeTopSection'
import { Campuses, CourseCards, Enroll, Facilities, Heading, Reviews } from '../../components'
import './home.css'


const Home = () => (
    <div>
        <HomeTopSection />
        <div className="container">
            <Heading 
                title='Courses We Offer' 
                content='Lorem, ipsum dolor sit amet consectetur adipisicing elit.' 
            />
            <CourseCards />
            <Heading 
                title='Our Global Campus' 
                content='Lorem, ipsum dolor sit amet consectetur adipisicing elit.' 
            />
            <Campuses />
            <Heading 
                title='Our Facilities' 
                content='Lorem, ipsum dolor sit amet consectetur adipisicing elit.' 
            />
            <Facilities />
            <Heading 
                title='What Our Students Say' 
                content='Lorem, ipsum dolor sit amet consectetur adipisicing elit.' 
            />
            <Reviews />
            <Enroll />
        </div>
        
    </div>
)

export default Home