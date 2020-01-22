import React, { useState } from 'react'

import { observer } from 'mobx-react'

import RadioButtonField from '../../components/RadioButton/RadioButtonField'
import RadioButton from '../../components/RadioButton/RadioButton'
import { useStores } from '../../custom-hooks/use-stores'
import getChannelList from './getChannelList'

const KitchenPoemStart = observer(() => {
    const { session } = useStores()
    const { kitchen } = useStores()
    const channelsResponseObject = session.data.channelsResponseObject
    const channels = getChannelList(channelsResponseObject)

    const selectChannel = (e) => {
        let channelName = e.target.value
        let selected = channels.filter(channel => channel.name === channelName )
        kitchen.actions.setChannelID(selected[0].id)
    }

    return (
        <div>
            <h3>From where do you want to fetch the words?</h3>

            <RadioButtonField>
                {channels.map((channel) => 
                    <div key={channel.id}>
                        <RadioButton 
                            value={channel.name}
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