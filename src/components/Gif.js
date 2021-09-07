import React from 'react'
import PropTypes from 'prop-types'

export const Gif = ({gif:{url, title}}) => {
    return (
        <div className='gif animate__animated animate__bounce'>
            <img src={url} alt="#"/>
            <p>{title}</p>
        </div>
    )
}

Gif.propTypes = {
    gif: PropTypes.object.isRequired
}

export default Gif;
