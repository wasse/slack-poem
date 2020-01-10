import React from 'react'

const GetConversations = () => {
    return (
        <div>
            <button className="button" onClick={sendMsgToChannel}>POST</button>
            <button className="button" onClick={conversationHistory}>GET Conversation</button>
        </div>
    )

    function authorizing() {
        let url = 'https://slack.com/oauth/authorize'
        let client_id = "807524400866.830008933542"
        let scope = "channels:read" //??????

        let newUrl = url 
        fetch()
    }

    function conversationHistory() {
        let url = 'https://slack.com/api/channels.history'

        let aToken = "xoxp-807524400866-822519736822-861880742326-339df05374a7f071ef627433cc0aae56"
        let bToken = "bEG7GotemREwzzalwbARM7si"
        let channel = "CPSQPDN3V"
        let newUrl = url + "?token=" + aToken + "&channel=" + channel
        
        fetch(newUrl, {
            method: 'GET',
            headers: { //'Accept': 'application/x-www-form-urlencoded',
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
        }).then(res => console.log(res.json()))
            // .then(res => res.json())
            // .then(data => {
            //     // set State
            //     // put in database?
            // })
    }

    function sendMsgToChannel() {
        fetch('https://hooks.slack.com/services/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', {
        // fetch('https://slack.com/api/chat.postMessage', {
            method: 'POST',
            headers: { //'Accept': 'application/x-www-form-urlencoded',
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
            body: JSON.stringify({ text : "Good day!" }),
            // body: { token: 'A0A3DTWCWm7hsjk9y9qDIoJ4',
            //         channel: 'CPSQPDN3V',
            //         text: "Hej! Jag mår bra, tack!"
            //     }
        })
        .then(res => console.log(res.json()))
    }
}
export default GetConversations