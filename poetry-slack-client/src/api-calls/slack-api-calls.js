import SessionStore from '../stores/SessionStore'
import { CLIENT_ID, CLIENT_SECRET } from '../SECRETS'

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
         console.log('Fetching token')

         SessionStore.actions.setOauthUserInfoResponseObject(data)
         //  console.log(data.access_token)

         SessionStore.actions.setAccessToken(data.access_token)
         SessionStore.actions.setIsAuthenticated(true)

         getChannels()

         // Test, hämta kanaler ->
         // getChannels()
      })
}

export const getChannels = () => {
   const getChannelsURI =
      'https://slack.com/api/channels.list?exclude_members=false&token=' +
      SessionStore.data.accessToken +
      '&limit=' +
      SessionStore.data.numberOfMessages +
      '&exclude_archived=true'

   fetch(getChannelsURI)
      .then(response => response.json())
      .then(data => {
         SessionStore.actions.setChannelsResponseObject(data)
         // console.log('Fetching channels ' + data)
         // Test hämta meddelanden från kanal ->
         // console.log(data)
         // console.log(data.channels[0].id)
         getChannelMessages(
            SessionStore.data.channelsResponseObject.channels[0].id
         )
         // postMessageInChannel("Här kommer det ett meddelande", SessionStore.data.channelsResponseObject.channels[0].id)
      })
}

export const getChannelMessages = channelId => {
   const getChannelMessagesURI =
      'https://slack.com/api/channels.history?count=' +
      SessionStore.data.numberOfMessages +
      '&unreads=true&inclusive=true&token=' +
      SessionStore.data.accessToken +
      '&channel=' +
      channelId
   // SessionStore.data.channel

   fetch(getChannelMessagesURI)
      .then(response => response.json())
      .then(data => {
         console.log(data) 
         // console.log(data.messages[0].text)
         SessionStore.actions.setoauthResponseObject(data)
         // Test
         // wordList()
         return data
      })
}

export const postMessageInChannel = (message, channel) => {
   const postMessageInChannelURI =
      'https://slack.com/api/chat.postMessage?token=' +
      SessionStore.data.accessToken +
      '&channel=' +
      channel +
      '&text=' +
      message +
      '&as_user=true'

   console.log('Posting message')
   fetch(postMessageInChannelURI, {
      method: 'POST',
      mode: 'no-cors'
   })
}

export const wordList = () => {
   let channelObject = SessionStore.data.oauthResponseObject
   // console.log(JSON.stringify(channelObject.messages))
   channelObject.messages.forEach(element => {
      console.log(element.text)
   })
   // let words = ""
   // let concat = (text) => {
   //    words += text + " "
   // }
   // channelObject.messages.text.forEach(concat)
   // console.log(words)
   // return words
}
