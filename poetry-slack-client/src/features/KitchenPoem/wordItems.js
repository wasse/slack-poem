import React from 'react'
import { useStores } from '../../custom-hooks/use-stores'
import { observer } from 'mobx-react'

import getWordList from './getWordList'

const wordItems = () => {
    
    let shuffledArray = getWordList()
    // ["red", "hat", "hot", "pink"]
    
    // ojbect for 'items'
    let itemObject = {} 
    for(let i=0;i<shuffledArray.length;i++){
        let key = "item-" + i
        let val = shuffledArray[i]
        itemObject[key] = val
    }
    for (let [key, value] of Object.entries(itemObject)) {
        itemObject[key] = {id: `${key}`, content: `${value}`}
      }
    console.log(itemObject)

    // object for columns
    let columnObject = {}
    let itemIds = Object.keys(itemObject)
    columnObject['column-1'] = {
        id: 'column-1',
        title: 'List of Words',
        itemIDs: itemIds
    }
    columnObject['column-2'] = {
        id: 'column-2',
        title: 'Your Poem',
        itemIDs: []
    }
    console.log(columnObject)

    // object for columnOrder
    let columnOrder = [ 'column-1', 'column-2' ]
    
    let dataForDnD = {
        items: itemObject,
        columns: columnObject,
        columnOrder: columnOrder
    }
    console.log(dataForDnD)

    return  dataForDnD 
}

export default wordItems