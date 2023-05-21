import React from 'react'

const Button = ({ purspose, classes, type }) => (
    <button 
        type={type? type: 'button'} 
        className={`py-2 px-3 fw-bold border border-1 ${classes? classes : 'border-danger'}`} 
    > 
        { purspose } 
    </button>
)

export default Button