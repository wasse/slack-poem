import React from 'react'

import { getChannelMessages } from '../../api-calls/slack-api-calls'
import  sessionstore  from '../../stores/SessionStore'

const getWordList = (selectedChannel, limit, originalFile) => {
    console.log(selectedChannel)
    console.log(originalFile)
    
    let mappedFile
    if(originalFile.ok) {
        mappedFile = originalFile.messages.map(obj => obj.text)
    }
    let joinedFiltered = mappedFile.filter(a => {
        return !(a.includes('<')) && !(a.includes('http'))
    })
    console.log(joinedFiltered)
    let mappedFileString = JSON.stringify(joinedFiltered)
    console.log(mappedFileString)
    let joined = mappedFile.join(', ')
    console.log(joined)
    
    
    const reg = /[,\.?\!]+/
    let newArray = joined.split(/\s/)
    .map(word => word.replace(reg, ''))
    .map(word => {
        if(word !== "I") { return word.toLowerCase() } 
        else { return word }
    })
    console.log(newArray)
    
    let shuffledArray = newArray.sort(() => Math.random() - 0.5)
    
    if(shuffledArray.length > limit) {
        shuffledArray = shuffledArray.slice(0, limit-1)
    }
    
    return shuffledArray
}

export default getWordList

// let originalFile = {
//     "ok": true,
//     "messages": [
//         {
//             "type": "message",
//             "user": "U012AB3CDE",
//             "text": "I find you punny and would like to smell your nose letter.",
//             "ts": "1512085950.000216"
//         },
//         {
//             "type": "message",
//             "user": "U061F7AUR",
//             "text": "What, you want to smell my shoes better?",
//             "ts": "1512104434.000490"
//         }
//     ],
//     "has_more": true,
//     "pin_count": 0,
//     "response_metadata": {
//         "next_cursor": "bmV4dF90czoxNTEyMDg1ODYxMDAwNTQz"
//     }
// }