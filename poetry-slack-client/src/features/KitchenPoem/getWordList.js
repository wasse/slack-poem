
const getWordList = (selectedChannel, limit) => {

    //TODO: do fetch to get real data

    let originalFile = {
        "ok": true,
        "messages": [
            {
                "type": "message",
                "user": "U012AB3CDE",
                "text": "I find you punny and would like to smell your nose letter.",
                "ts": "1512085950.000216"
            },
            {
                "type": "message",
                "user": "U061F7AUR",
                "text": "What, you want to smell my shoes better?",
                "ts": "1512104434.000490"
            }
        ],
        "has_more": true,
        "pin_count": 0,
        "response_metadata": {
            "next_cursor": "bmV4dF90czoxNTEyMDg1ODYxMDAwNTQz"
        }
    }
    
    // console.log(selectedChannel.channel)
    // console.log(originalFile)
    
    let mappedFile
    if(originalFile.ok) {
        mappedFile = originalFile.messages.map(obj => obj.text)
    }
    console.log(mappedFile)
    let mappedFileString = JSON.stringify(mappedFile)
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
        shuffledArray.slice(0, limit-1)
    }

    return shuffledArray
}

export default getWordList