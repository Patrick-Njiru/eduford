import React from 'react'

const Button = ({ about }) => {
    return (
        <button className='border border-2 text-white py-2 px-3'>
           { about }
        </button>
    )
}

export default Button