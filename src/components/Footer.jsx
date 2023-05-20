import React from 'react'
import { FaArrowUp } from 'react-icons/fa'
import { footerSection } from '../constants/data'

const Footer = () => (
    <div className='text-center p-5 pb-3 w-75 mx-auto'> 
        {/* eslint-disable-next-line  */}
        <a href="#" className='text-end me-4 w-25 mb-3 position-fixed end-0 bottom-0' > 
            <FaArrowUp className='text-danger fs-3' /> 
        </a>
        <h4 className='pt-5 mt-5 mb-4 fw-bold'> { footerSection.title } </h4>
        <p className='text-secondary mb-5'> { footerSection.content } </p>
        <div className="">
            { footerSection.socialIcons.map((icon, id) => <button key={id} className='mx-1 border-0 text-danger bg-transparent fs-5'> { icon } </button>) }
        </div>
    </div>
)

export default Footer