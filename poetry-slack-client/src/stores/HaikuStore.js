import { observable, action, computed } from 'mobx'

const HaikuStore = {
   data: observable({
      poem: 'Write something here',
   }),
   actions: {
      setPoem: action(poem => {
         HaikuStore.data.poem = poem.toUpperCase()
      }),
   },
   computed: {},
}

export default HaikuStore
