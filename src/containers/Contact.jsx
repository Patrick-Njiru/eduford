import React from 'react'

import { Button, TopSection } from '../components'
import { contactPageData } from '../constants/data'

import './containers.css'

const styles =  {
    height: '60vh',
    marginBottom: '10vh',
}
const Contact = () => (
    <div>
        <TopSection topHeading={contactPageData.topHeading} />
        <div className="container">
            <iframe 
                title='eduford map'
                className='w-100 mt-5'
                style={styles}
                src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=eduford&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            >
            </iframe>
            <div className="row">
                <div className="col-11 col-md-6 mx-auto lh-lg my-5">
                    { contactPageData.contactDetails.map((detail, id) =>
                        <p key={id} className='d-flex align-items-center text-secondary'> 
                            <span className='me-5 text-danger fs-3'> { detail.icon } </span> 
                            <span> { detail.info } </span>
                        </p>
                    )}
                </div>
                <form onSubmit={() => alert('message received')} className='col-11 col-md-6 mx-auto my-5'>
                    <input 
                        type="text" 
                        name='name' 
                        placeholder='Enter your name' 
                        required 
                        className='border border-2 my-3 p-2 w-100' 
                        style={styles.input} 
                    />
                    <input 
                        type="email" 
                        name='email' 
                        placeholder='Enter email address' 
                        required 
                        className='border border-2 my-3 p-2 w-100' 
                        style={styles.input} 
                    />
                        <input 
                        type="text" 
                        name='name' 
                        placeholder='Enter your subject' 
                        required 
                        className='border border-2 my-3 p-2 w-100' 
                        style={styles.input} 
                    />
                    <textarea 
                        name="comment" 
                        cols="30" 
                        rows="7" 
                        placeholder='Message'
                        required
                        className='border border-2 my-3 p-2 w-100'
                        style={styles.input}
                    />
                    <Button about={contactPageData.button} />
                </form>
            </div>
        </div>
    </div>
)

export default Contact