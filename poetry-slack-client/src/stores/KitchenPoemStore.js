import { observable, action } from 'mobx'

const KitchenPoemStore = {
    data: observable({
        channel: '',
    }),
    actions: {
        selectChannel: action(channel => {
                KitchenPoemStore.data.channel = channel
        }),
    },
}

export default KitchenPoemStore