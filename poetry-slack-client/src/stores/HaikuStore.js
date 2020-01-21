import { observable, action, computed } from 'mobx'

const HaikuStore = {
   data: observable({
      haiku: [],
      title: '',
      isError: false,
      text: '',
      errorMessage: '',
      chosenChannelName: '',
      chosenChannelId: '',
   }),
   actions: {
      setHaiku: action(haiku => {
         HaikuStore.data.haiku = haiku
      }),
      setTitle: action(title => {
         HaikuStore.data.title = title
      }),
      setError: action(error => {
         HaikuStore.data.isError = error
      }),
      setText: action(text => {
         HaikuStore.data.text = text
      }),
      setErrorMessage: action(message => {
         HaikuStore.data.errorMessage = message
      }),
      setChosenChannelName: action(name => {
         HaikuStore.data.chosenChannelName = name
      }),
      setChosenChannelId: action(id => {
         HaikuStore.data.chosenChannelId = id
      }),
   },
   computed: {},
}

export default HaikuStore
