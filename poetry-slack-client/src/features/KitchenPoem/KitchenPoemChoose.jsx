import React from 'react'

import { Link, useRouteMatch } from 'react-router-dom'
import { useStores } from '../../custom-hooks/use-stores'
import { observer } from 'mobx-react-lite'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

import getWordList from './getWordList'
import WordDnD from './WordDnD'

const KitchenPoemChoose = observer(( obj ) => {
    const { kitchen } = useStores()
    let { url } = useRouteMatch()

    // let shuffledArray = getWordList(selectedChannel, 30)

    const goToKitchen = () => {
        kitchen.actions.toggleAtStart()
        kitchen.actions.toggleShowCard()
    }

    return (
        <div>
            {/* <button onClick={goToKitchen}>Close</button> */}
            <Link to={`${url}/kitchen-poem`} onClick={goToKitchen}>Kitchen Poem</Link>
            <WordDnD /> 
        </div>
        )
        
})

export default KitchenPoemChoose