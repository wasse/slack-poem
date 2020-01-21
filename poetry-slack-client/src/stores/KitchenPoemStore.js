import { observable, action } from 'mobx'

import wordItems from '../features/KitchenPoem/wordItems'

const KitchenPoemStore = {
    data: observable({
        selectedChannel: '',
        atStart: true,
        showCard: false,
        dataDnD: {},
    }),
    actions: {
        selectChannel: action(channel => {
            KitchenPoemStore.data.selectedChannel = channel
        }),
        toggleAtStart: action(() => {
            KitchenPoemStore.data.atStart = !(KitchenPoemStore.data.atStart)
        }),
        toggleShowCard: action(() => {
            KitchenPoemStore.data.showCard = !(KitchenPoemStore.data.showCard)
        }),
        setDataDnD: action(() => {
            return KitchenPoemStore.data.dataDnD = wordItems()
        }),
        replaceColumnData: action((newColumn) => {
            const dataDnD = KitchenPoemStore.data.dataDnD
            const columns = KitchenPoemStore.data.dataDnD.columns
            return KitchenPoemStore.data.dataDnD = {
                ...dataDnD,
                columns: {
                    ...columns,
                    [newColumn.id]: newColumn
                }
            }
        }),
        getColumnData: action((props) => {
            return KitchenPoemStore.data.dataDnD.columns[props]
        })
    },
    computed: {
        
    }
}

export default KitchenPoemStore