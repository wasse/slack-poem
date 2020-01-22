import { observable, action } from 'mobx'

import wordItems from '../features/KitchenPoem/wordItems'

const KitchenPoemStore = {
    data: observable({
        selectedChannelID: '',
        atStart: true,
        showCard: false,
        dataDnD: {},
    }),
    actions: {
        setChannelID: action(channel => {
            KitchenPoemStore.data.selectedChannelID = channel
        }),
        toggleAtStart: action(() => {
            KitchenPoemStore.data.atStart = !(KitchenPoemStore.data.atStart)
        }),
        toggleShowCard: action(() => {
            KitchenPoemStore.data.showCard = !(KitchenPoemStore.data.showCard)
        }),
        setDataDnD: action((data) => {
            return KitchenPoemStore.data.dataDnD = data
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