import React, { useState } from 'react'

import { observer } from 'mobx-react'

import RadioButtonField from '../../components/RadioButton/RadioButtonField'
import RadioButton from '../../components/RadioButton/RadioButton'
import { useStores } from '../../custom-hooks/use-stores'

const KitchenPoemStart = observer(() => {
    const { kitchen } = useStores()

    const selectChannel = (e) => {
        kitchen.actions.selectChannel(e.target.value)
    }

    let channels = [ "general", "random", "ideas" ]

    return (
        <div>
            <h3>From where do you want to fetch the words?</h3>

            <RadioButtonField>
                {channels.map((channel, i) => 
                    <div key={i}>
                        <RadioButton 
                            value={channel}
                            name="channel" 
                            onChange={selectChannel}
                        ></RadioButton>
                    </div>)
                }
            </RadioButtonField>
        </div>
    )
})

export default KitchenPoemStart