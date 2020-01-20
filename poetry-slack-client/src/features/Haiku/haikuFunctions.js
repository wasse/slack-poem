import { fetchGeneratedHaiku } from '../../api-calls/haiku-api-calls'
import { postMessageInChannel } from '../../api-calls/slack-api-calls'
import SessionStore from '../../stores/SessionStore'
import HaikuStore from '../../stores/HaikuStore'

export const getChannelResponseObjectAsIdAndNameList = () => {
   const idAndNameList = []
   SessionStore.data.channelsResponseObject.channels.forEach(ch =>
      idAndNameList.push({ id: ch.id, name: ch.name })
   )
   console.log('reduced channel object' + idAndNameList)
   return idAndNameList
}

export const generateHaiku = (channelId, channelName) => {
   // The response object has a misleading name. But here is where the channel message
   // object is stored after the fetch method above finishes.
   HaikuStore.actions.setChosenChannelName(channelName)
   HaikuStore.actions.setChosenChannelId(channelId)

   let text = ''
   SessionStore.data.oauthResponseObject.messages.forEach(
      message => (text += ' ' + message.text)
   )
   HaikuStore.actions.setText(text)

   fetchGeneratedHaiku(HaikuStore.data.text)
}

export const formatHaikuAndPostAsMessageInChannel = () => {
   let title = HaikuStore.data.title
   let haiku = HaikuStore.data.haiku
   let formattedMessage = ''

   postMessageInChannel(formattedMessage, HaikuStore.data.chosenChannelId)
}
