import React from 'react'
import { NavLink } from 'react-router-dom'

import { Button, TopSection } from '../components'
import { aboutPageData } from '../constants/data'

const About = () => (
    <div>
        <TopSection topHeading={aboutPageData.topHeading} />

        <div className="container pt-5 pb-3 mt-5 lh-lg">
            <div className="row justify-content-between align-items-center">
                <div className="col-11 col-md-5 mx-auto">
                    <h2 className='fw-bold'> {aboutPageData.secondHeading} </h2>

                    <p className='text-secondary mb-4'> { aboutPageData.content } </p>

                    <NavLink to={['/courses', '/blogs', '/'][Math.floor(Math.random()*3)]}>
                        <Button purspose={aboutPageData.button} />
                    </NavLink>
                </div>

                <img src={aboutPageData.pic} alt="about us" className='col-11 col-md-6 pt-5 pb-3 mt-5 mx-auto' />
            </div>
        </div>
    </div>
)

export default About