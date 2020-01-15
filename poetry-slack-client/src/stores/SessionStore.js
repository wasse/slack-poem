import { observable, action, computed } from 'mobx'

const SessionStore = {
   data: observable({
      isAuthenticated: false,
      isHomePage: true,
      codeParam: '',
      accessToken: '',
      numberOfMessages: 100,
      channel: 'CPSQPDN3V',
   }),
   actions: {
      setIsAuthenticated: action(auth => {
         SessionStore.data.isAuthenticated = auth
      }),
      setIsHomePage: action(home => {
         SessionStore.data.isHomePage = home
      }),
      setCodeParam: action(param => {
         SessionStore.data.codeParam = param
      }),
      setAccessToken: action(token => {
         SessionStore.data.accessToken = token
      }),
      setNumberOfMessages: action(number => {
         SessionStore.data.numberOfMessages = number
      }),
      setChannel: action(channel => {
         SessionStore.data.channel = channel
      }),
   },
   computed: {},
}

export default SessionStore

// data = object with the data that decides the state of the application. needs to be wrapped in observable({})
// actions = functions that alter the state. needs to be wrapped in action(() => {})
// computed = getters & setters for data and more (?)
