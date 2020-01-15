import SessionStore from '../stores/SessionStore'
import { CLIENT_ID, CLIENT_SECRET, SIGN_SECRET } from '../SECRETS'

// A list of all channels:
// https://slack.com/api/channels.list

// Get messages in channel:
// https://slack.com/api/channels.history

// Post message in channel
// https://slack.com/api/chat.postMessage

// List all conversations:
// https://any-api.com/slack_com/slack_com/docs/_conversations_list/conversations_list

export const fetchAndSetAccessToken = () => {
   const accessURI =
      'https://slack.com/api/oauth.access?client_id=' +
      CLIENT_ID +
      '&client_secret=' +
      CLIENT_SECRET +
      '&code=' +
      SessionStore.data.codeParam

   fetch(accessURI)
      .then(response => response.json())
      .then(data => {
         //  console.log(data)
         //  console.log(data.access_token)
         SessionStore.actions.setAccessToken(data.access_token)
         SessionStore.actions.setIsAuthenticated(true)
         //  console.log(SessionStore.data.accessToken)
      })
}

// const getChannels = () => {
//    const getChannelsURI =
//       'https://slack.com/api/channels.list?exclude_members=false&token=' +
//       SessionStore.data.accessToken +
//       '&limit=' +
//       SessionStore.data.numberOfMessages +
//       '&exclude_archived=true'
// }

//   getChannelMessages: action(() => {
//      const getChannelMessagesURI =
//         'https://slack.com/api/channels.history?count=' +
//         SessionStore.data.numberOfMessages +
//         '&unreads=true&inclusive=true&token=' +
//         SessionStore.data.accessToken +
//         '&channel=' +
//         SessionStore.data.channel
//   }),
//   postMessageInChannel: action(() => {
//      const postMessageInChannelURI =
//         'https://slack.com/api/chat.postMessage'
//      // Header:
//      // Authorization Bearer (token)
//      // Content - Type application/json
//      // BODY:
//      // {
//      // 	"text": "Hello World!",
//      // 	"channel": "CPSQPDN3V",
//      // 	"as_user": true
//      // }
//   }),
