import { observable, action, computed } from 'mobx'

const SessionStore = {
   data: observable({
      isAuthenticated: true,
      isHomePage: true,
   }),
   actions: {
      toggleAuth: action(auth => {
         // SessionStore.data.isAuthenticated = auth
      }),
      setIsHomePage: action(home => {
         SessionStore.data.isHomePage = home
      }),
   },
   computed: {},
}

export default SessionStore

// data = object with the data that decides the state of the application. needs to be wrapped in observable({})
// actions = functions that alter the state. needs to be wrapped in action(() => {})
// computed = getters & setters for data and more (?)
