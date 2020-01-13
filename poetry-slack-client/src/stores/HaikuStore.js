import { observable, action, computed } from 'mobx'

const HaikuStore = {
   data: observable({
      haiku: [
         'Delightful display',
         'Snowdrops bow their pure white heads',
         "To the sun's glory",
      ],
      // haiku: [],
      title: '',
   }),
   actions: {
      setPoem: action(haiku => {
         HaikuStore.data.haiku = haiku
      }),
      setTitle: action(title => {
         HaikuStore.data.title = title
      }),
   },
   computed: {},
}

export default HaikuStore
