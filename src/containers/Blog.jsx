import React from 'react'

import { Button, TopSection } from '../components'
import { blogsPageData } from '../constants/data'

const styles = {
    h5 : { background: '#ff4400dc' },
    li : { color: 'rgba(54, 52, 52, 0.945)' },
    form: { border: '3px solid rgba(54, 52, 52, 0.1)' },
    input: { background: 'rgba(54, 52, 52, 0.1)' },
}

const Blog = () => (
    <div>
        <TopSection topHeading={blogsPageData.topHeading} />
        <div className="container">
            <div className="row justify-content-between align-items-start pt-5">
                <div className="col-11 col-md-7 mx-auto mb-4">
                    <img src={blogsPageData.pic} alt="certificate" className='img-fluid' />
                    <h4 className='blog__heading my-4'> {blogsPageData.topHeading} </h4>
                    <div className='text-secondary mb-5'> { blogsPageData.content } </div>
                </div>
                <div className="col-11 col-md-4 mx-auto mt-2">
                    <h5 style={styles.h5} className='text-center text-white p-2 border border-secondary border-2'> 
                        Post Categories 
                    </h5>
                    <ul className='list-unstyled my-5 px-2'>
                        { blogsPageData.postCategories.map(category =>
                            <li className="my-3 d-flex justify-content-between" style={styles.li} key={category.title}>
                                <span> { category.title } </span>
                                <span> { category.totalPosts } </span>
                            </li>
                        )}
                    </ul>
                    <form onSubmit={() => alert('commented received')} className='p-3' style={styles.form}>
                        <legend className='fw-bold mb-2'> Leave a comment </legend>
                        <input 
                            type="text" 
                            name='name' 
                            placeholder='Enter Name' 
                            required 
                            className='border-0 rounded my-3 p-2 w-100' 
                            style={styles.input} 
                        />
                        <input 
                            type="email" 
                            name='email' 
                            placeholder='Enter Email' 
                            required 
                            className='border-0 rounded my-3 p-2 w-100' 
                            style={styles.input} 
                        />
                        <textarea 
                            name="comment" 
                            cols="30" 
                            rows="7" 
                            placeholder='Your Comment'
                            required
                            className='border-0 rounded my-3 p-2 w-100'
                            style={styles.input}
                        />
                        {/* </textarea> */}
                       <Button about={blogsPageData.button} />
                    </form>
                </div>
            </div>
        </div>
    </div>
)

export default Blog