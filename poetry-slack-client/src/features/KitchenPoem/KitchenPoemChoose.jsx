import React from 'react'

const KitchenPoemChoose = ( obj ) => {
    let originalFile = {
        "ok": true,
        "messages": [
            {
                "type": "message",
                "user": "U012AB3CDE",
                "text": "I find you punny and would like to smell your nose letter",
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
    console.log(obj.channel)
    console.log(originalFile)

    let mappedFile
    if(originalFile.ok) {
        mappedFile = originalFile.messages.map(obj => obj.text)
    }
    console.log(mappedFile)
    let mappedFileString = JSON.stringify(mappedFile)
    console.log(mappedFileString)
    let joined = mappedFile.join(', ')
    console.log(joined)

    const reg = /[,\.?\!]/
    let newArray = joined.split(/\s/).map(word => word.replace(reg, ""))
    console.log(newArray)
    return (
        <div>
            {/* <button onClick="">Close</button> */}
            {newArray.map(word => 
                <div className="card has-text-centered" key={word}>{word}</div>)
            }
        </div>
        )
        
}

export default KitchenPoemChoose

// function reqListener(e) {
//     data = JSON.parse(this.responseText);
//     console.log(data);
// }