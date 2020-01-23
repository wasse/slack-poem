import SessionStore from '../../stores/SessionStore'
import { trackPromise } from 'react-promise-tracker'
import { SATO_RANDOM_WEBHOOK, RANDOM_CHANNEL_WEBHOOK } from '../../SECRETS'

const postKitchenPoem = (poem) => {
    const user = SessionStore.data.oauthAndUserInfoResponseObject.user.name
    console.log(poem)
    let message = [
        {   
            type: 'section',
            text: {
                type: 'mrkdwn',
                text: poem
            }
        },
        {
            type: 'context',
            elements: [
                {
                    type: 'mrkdwn',
                    text: '*Kitchen Poem* Posted by *' + user + '*' 
                }
            ]
        }
    ]

    trackPromise(
        fetch(RANDOM_CHANNEL_WEBHOOK, {
            body: JSON.stringify({
                blocks: message,
                text: 'Kitchen Poem'
            }),
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            method: 'POST'
        }).then(resp => {
            console.log(resp)
            if(resp.ok) {
                alert("Your poem is posted!")
            } else {
                alert("Something went wrong!")
            }
        })
    )
}

export default postKitchenPoem