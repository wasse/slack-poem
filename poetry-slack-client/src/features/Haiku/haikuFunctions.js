import { fetchGeneratedHaiku } from '../../api-calls/haiku-api-calls'
// import { postMessageInChannel } from '../../api-calls/slack-api-calls'
import SessionStore from '../../stores/SessionStore'
import HaikuStore from '../../stores/HaikuStore'
// import { WebClient } from '@slack/web-api'
import { GENERAL_CHANNEL_WEBHOOK } from '../../SECRETS'

export const getChannelResponseObjectAsIdAndNameList = () => {
   const idAndNameList = []
   SessionStore.data.channelsResponseObject.channels.forEach(ch =>
      idAndNameList.push({ id: ch.id, name: ch.name })
   )
   console.log('Created channel object' + idAndNameList.toString())
   return idAndNameList
}

export const generateHaiku = (channelId, channelName) => {
   HaikuStore.actions.setChosenChannelName(channelName)
   HaikuStore.actions.setChosenChannelId(channelId)

   let text = ''
   // The response object has a misleading name atm. But here is where the channel message
   // object is stored after the fetch method above finishes.
   SessionStore.data.oauthResponseObject.messages.forEach(
      message => (text += ' ' + message.text)
   )
   HaikuStore.actions.setText(text)

   fetchGeneratedHaiku(HaikuStore.data.text)
}

export const formatHaikuAndPostAsMessageInChannel = () => {
   let title = HaikuStore.data.title
   let haiku = HaikuStore.data.haiku
   const user = SessionStore.data.oauthAndUserInfoResponseObject.user.name

   let formattedMessage = ':scroll: *' + title.toUpperCase() + '* \n\n>'

   haiku.forEach(row => {
      formattedMessage += row + ' \n>'
   })

   let message = [
      {
         type: 'divider'
      },
      {
         type: 'section',
         text: {
            type: 'mrkdwn',
            text: formattedMessage
         }
      },
      {
         type: 'divider'
      },
      {
         type: 'context',
         elements: [
            {
               text:
                  'Haiku (sort of..) generated from messages in the *' +
                  HaikuStore.data.chosenChannelName +
                  '* channel',
               type: 'mrkdwn'
            },
            {
               text: '\n :black_nib: Posted by *' + user + '*',
               type: 'mrkdwn'
            }
         ]
      },
      {
         type: 'divider'
      }
   ]

   postHaikuWithWebhook(message)
   HaikuStore.actions.setTitle('')
}

const postHaikuWithWebhook = message => {
   fetch(GENERAL_CHANNEL_WEBHOOK, {
      body: JSON.stringify({
         blocks: message,
         text: 'Time for some poetry-slack'
      }),
      headers: {
         'Content-Type': 'application/x-www-form-urlencoded'
      },
      method: 'POST'
   })
      .then(resp => resp.text())
      .then(r => console.log(r))
}

// Saved this for experimenting more with later:

// let blockMessage = {
//    blocks: [
//       {
//          type: 'section',
//          text: {
//             type: 'mrkdwn',
//             text: formattedMessage,
//          },
//       },
//    ],
// }

// postMessageInChannel(formattedMessage, HaikuStore.data.chosenChannelId)
// postHaikuInChannelWithBlockFormattedMessage(
//    JSON.stringify(blockMessage),
//    HaikuStore.data.chosenChannelId
// )

// postHaikuInChannel(
//    // JSON.stringify(blockMessage),
//    blockMessage,
//    HaikuStore.data.chosenChannelId
// )

// const postHaikuInChannel = (message, channel) => {
//    const postMessageInChannelURI = 'https://slack.com/api/chat.postMessage'

//    console.log('Posting message')
//    console.log('Access token: ' + SessionStore.data.accessToken)
//    const accessToken = SessionStore.data.accessToken

//    let headers = new Headers()
//    headers.append('Content-Type', 'application/json')
//    headers.append('Authorization', 'Bearer ' + accessToken)
//    // headers.append('credentials', 'include')

//    fetch(postMessageInChannelURI, {
//       payload: JSON.stringify({
//          channel: channel,
//          // block: message,
//          as_user: true,
//          mrkdwn: true,
//          // text: message.blocks[0].text.text,
//          text: 'Test text'
//       }),
//       // credentials: 'include',
//       headers: headers,
//       // headers: {
//       //    // Accept: 'application/json, text/plain, */*',
//       //    'Content-type': 'application/json',
//       //    Authorization: 'Bearer ' + accessToken
//       //    // 'Content-Type':
//       //    //'application/x-www-form-urlencoded; application/json; charset=utf-8',
//       // },
//       method: 'POST',
//       mode: 'no-cors'
//    })
//       .then(resp => resp.json())
//       .then(result => {
//          console.log(JSON.stringify(result))
//       })
// }

// application/x-www-form-urlencoded,
// const postHaikuInChannelWithBlockFormattedMessage = (message, channel) => {
//    const postMessageInChannelURI =
//       'https://slack.com/api/chat.postMessage?token=' +
//       SessionStore.data.accessToken +
//       '&channel=' +
//       channel +
//       '&text=' +
//       message +
//       '&mrkdwn=true' +
//       '&as_user=true'

//    console.log('Posting message')
//    fetch(postMessageInChannelURI, {
//       method: 'POST',
//       mode: 'no-cors',
//    })
// }

// This is unquoted text\n>This is quoted text\n>This is still quoted text\nThis is unquoted

// postMessageUsingWebApi(
//    JSON.stringify(blockMessage),
//    HaikuStore.data.chosenChannelId
// )

// const postMessageUsingWebApi = async (message, channel) => {
//    const web = new WebClient(SessionStore.data.accessToken)

//    ;(async () => {
//       const res = await web.chat.postMessage({
//          // token: SessionStore.data.accessToken,
//          channel: channel,
//          text: message,
//          // block: message,
//          // mrkdwn: true,
//          // as_user: true,
//       })

//       console.log('Message sent: ', res.ts)
//    })()
// }

// const { WebClient, LogLevel } = require('@slack/web-api')

// const web = new WebClient('bogus token')

// ;(async () => {
//    await web.auth.test()

//    console.log('Done!')
// })()

// const { WebClient } = require('@slack/web-api')

// // An access token (from your Slack app or custom integration - xoxp, xoxb)
// const token = process.env.SLACK_TOKEN

// const web = new WebClient(token)

// // This argument can be a channel ID, a DM ID, a MPDM ID, or a group ID
// const conversationId = 'C1232456'

// ;(async () => {
//    // See: https://api.slack.com/methods/chat.postMessage
//    const res = await web.chat.postMessage({
//       channel: conversationId,
//       text: 'Hello there',
//    })

//    // `res` contains information about the posted message
//    console.log('Message sent: ', res.ts)
// })()
