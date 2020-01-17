import React from 'react'

import { observer } from 'mobx-react'

import RadioButtonField from '../../components/RadioButton/RadioButtonField'
import RadioButton from '../../components/RadioButton/RadioButton'
import { useStores } from '../../custom-hooks/use-stores'

const KitchenPoemStart = observer(() => {
    const { kitchen } = useStores()
    // const channel = kitchen.data.channel
    const selectChannel = (e) => {
        kitchen.actions.selectChannel(e.target.value)
    }

    return (
        <div>
            <h3>From where do you want to fetch the words?</h3>

            <RadioButtonField>
                <RadioButton 
                    value="general"
                    name="channel" 
                    onChange={selectChannel}
                ></RadioButton>
                <RadioButton 
                    value="random" 
                    name="channel" 
                    onChange={selectChannel}
                ></RadioButton>
                <RadioButton
                    value="ideas" 
                    name="channel" 
                    onChange={selectChannel}
                ></RadioButton>
            </RadioButtonField>
        </div>
    )
})

export default KitchenPoemStart