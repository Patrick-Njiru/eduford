import React from 'react'

import { Button, TopSection } from '../components'
import { aboutPageData } from '../constants/data'
import './containers.css'

const About = () => (
    <div>
        <TopSection topHeading={aboutPageData.topHeading} />
        <div className="container pt-5 pb-3 mt-5 lh-lg">
            <div className="row justify-content-between align-items-center">
                <div className="col-11 col-md-5 mx-auto">
                    <h1 className='about__heading'> {aboutPageData.secondHeading} </h1>
                    <p className='text-secondary mb-4'> { aboutPageData.content } </p>
                    <Button about={aboutPageData.button} />
                </div>
                <img src={aboutPageData.pic} alt="about us" className='about__img col-11 col-md-6 pt-5 pb-3 mt-5 mx-auto' />
            </div>
        </div>
    </div>
)

export default About