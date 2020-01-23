import React from 'react'
import { useStores } from '../../custom-hooks/use-stores'
import { observer } from 'mobx-react'

import getWordList from './getWordList'

const wordItems = (selectedChannel, limit, originalFile) => {
    
    let shuffledArray = getWordList(selectedChannel, limit, originalFile)
    // ["red", "hat", "hot", "pink"]
    console.log(shuffledArray)

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

// const dataForDnD = {
//     // wordItems
//     items : {
//         'item-0': {id: "item-0", content: "red"},
//         'item-1': {id: "item-1", content: "hat"},
//         'item-2': {id: "item-2", content: "hot"},
//         'item-3': {id: "item-3", content: "pink"},
//     },
//     columns : {
//         'column-1': {
//             id: 'column-1',
//             title: 'List of Words',
//             itemIDs: [ 'item-0', 'item-1', 'item-2', 'item-3' ]
//         },
//         'column-2': {
// 
//          }
//     },
//     columnOrder: [ 'column-1' ]
// }

// export default dataForDnD

//***  exampmle of result object ***//
// const result = {
//     draggableId: 'item-1',
//     type: 'TYPE',
//     reason: 'DROP',
//     source: {
//         droppableId: 'column-1',
//         index:0
//     },
//     destination: {
//         droppableId: 'column-1',
//         index: 1
//     }
// }