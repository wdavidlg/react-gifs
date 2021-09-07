import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = (props) => {

    const [value, setValue] = useState('');

    const handleChange = (e) => {
        setValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(value.trim().length !== 0){
            props.setCategories((prev) => [value, ...prev]);
            setValue('');
        }
    }

    return (
        <form onSubmit={handleSubmit}>
           <input 
                type="text"
                placeholder="Add Category"
                value={value}
                onChange={handleChange}
           />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
