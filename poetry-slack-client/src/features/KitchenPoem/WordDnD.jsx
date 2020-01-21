import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import style from './KitchenPoem.module.scss'

// import dataForDnD from './dataForDnD'
import ColumnDnD from './ColumnDnD'
import { useStores } from "../../custom-hooks/use-stores";
import wordItems from "./wordItems";
import { observer } from "mobx-react-lite";

const WordDnD = observer(() => {
    const [ dataDnD, setDataDnD ] = useState(() => wordItems())
    // const { kitchen } = useStores()
    // let dataDnD = kitchen.data.dataDnD
    // let words = wordItems()
    // dataDnD = kitchen.actions.setDataDnD(words)
    // console.log(dataDnD)
    // dataDnD = wordItems()
    console.log(dataDnD)

    const onDragEnd = (result) => {
        const { destination, source, draggableId } = result

        if(!destination){ return } // ex. if item is dropped outside the area
        if(destination.droppableId === source.droppableId
            && destination.index === source.index){ return }
        
        const startColumn = dataDnD.columns[source.droppableId]
        const finishColumn = dataDnD.columns[destination.droppableId]
        
        if(startColumn === finishColumn){
            const newItemIDs = Array.from(startColumn.itemIDs) // instead of mutate the existing array
            newItemIDs.splice(source.index, 1)
            newItemIDs.splice(destination.index, 0, draggableId)
    
            const newColumn = {
                ...startColumn,
                itemIDs: newItemIDs
            }
            const newData = {
                ...dataDnD,
                columns: {
                    ...dataDnD.columns,
                    [newColumn.id]: newColumn
                }
            }
            console.log("dragEnd")
            return setDataDnD(newData)
        } 
        // move to another column
        const startItemIDs = Array.from(startColumn.itemIDs)
        startItemIDs.splice(source.index, 1)
        const newStartColumn = {
            ...startColumn,
            itemIDs: startItemIDs
        }

        const finishItemIDs = Array.from(finishColumn.itemIDs)
        finishItemIDs.splice(destination.index, 0, draggableId)
        const newFinishColumn = {
            ...finishColumn,
            itemIDs: finishItemIDs
        }

        const newData = {
            ...dataDnD,
            columns: {
                ...dataDnD.columns,
                [newStartColumn.id]: newStartColumn,
                [newFinishColumn.id]: newFinishColumn
            }
        }
        return setDataDnD(newData)
    }

    return (
        <DragDropContext
            // onDragStart
            // onDragUpdate
            onDragEnd={onDragEnd}
        >
            <div className={style.dragdrop}>
                {dataDnD.columnOrder.map(columnId => {
                    const column = dataDnD.columns[columnId]
                    const items = column.itemIDs.map(itemId => dataDnD.items[itemId])
                    console.log(items)
                    return <ColumnDnD key={column.id} column={column} items={items} />
                })}
            </div>

        </DragDropContext>
    )
})

export default WordDnD