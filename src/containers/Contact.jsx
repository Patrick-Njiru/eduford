import React from 'react'

import { Button, TopSection } from '../components'
import { contactPageData } from '../constants/data'

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
            />

            <div className="row">
                <div className="col-10 col-sm-8 col-md-6 mx-auto my-5 pt-3">
                    { 
                        contactPageData.contactDetails.map((detail, id) =>
                            <div key={id} className='d-flex align-items-center text-secondary my-3'> 
                                <span className='me-5 text-danger fs-3 pb-3'> { detail.icon } </span>
                                 
                                <p className='contact-info'> { detail.info } </p>
                            </div>
                        )
                    }
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
                    
                    <Button purspose={contactPageData.button} type='submit' />
                </form>
            </div>
        </div>
    </div>
)

export default Contact