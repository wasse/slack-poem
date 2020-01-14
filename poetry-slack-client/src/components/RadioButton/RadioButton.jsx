import React from 'react'

import RadioButtonSelect from './RadioButtonSelect'
import { is } from '@babel/types'

const Button = ({ label, value, selectedValue, onChange, name, valueName, isSelected }) => 
    isSelected ? (
        <label className="radio">
            <input 
                type="radio" 
                value={value} 
                checked="true"
                name={name}
                // onChange={selectButton}
                ></input>{value}
        </label>
    ) : (
        <label className="radio">
            <input 
                type="radio" 
                value={value} 
                checked="false"
                name={name}
                // onChange={selectButton}
                ></input>{value}
        </label>
    )

export default Button