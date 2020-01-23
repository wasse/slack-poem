import React from 'react'

import RadioButtonSelect from './RadioButtonSelect'

const RadioButton = ({ value, onChange, name, isSelected }) => 
    <label className="radio">
        <input 
            type="radio" 
            value={value} 
            checked={isSelected}
            name={name}
            onChange={onChange}
        ></input>{value}
    </label>

export default RadioButton