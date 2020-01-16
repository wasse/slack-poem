import React from 'react'
import RadioButtonField from '../../components/RadioButton/RadioButtonField'
import RadioButton from '../../components/RadioButton/RadioButton'
import RadioButtonSelect from '../../components/RadioButton/RadioButtonSelect'

const KitchenPoemStart = () => {
    const { onChange, selectButton } = RadioButtonSelect()
    
    return (
        <div>
            <h3>From where do you want to fetch the words?</h3>

            <RadioButtonField>
                <RadioButton 
                    value="general" 
                    name="channel" 
                    onChange={onChange}
                ></RadioButton>
                <RadioButton 
                    value="random" 
                    name="channel" 
                    onChange={onChange}
                ></RadioButton>
                <RadioButton
                    value="ideas" 
                    name="channel" 
                    onChange={onChange}
                ></RadioButton>
            </RadioButtonField>
        </div>
    )
}

export default KitchenPoemStart