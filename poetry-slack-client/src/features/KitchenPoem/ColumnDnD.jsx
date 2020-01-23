import React from 'react'

import { observer } from 'mobx-react-lite'
import { Droppable } from 'react-beautiful-dnd'
import style from './KitchenPoem.module.scss'

import ItemDnD from './ItemDnD'
import KitchenPoemStore from '../../stores/KitchenPoemStore'

const ColumnDnD = observer(({ key, column, items }) => {
    return (
        <div className={style.columnDnD + " has-background-grey-darker"}>
            <h2 className={style.columnTitle}>{column.title}</h2>
            <Droppable droppableId={column.id}>
                {(provided) => (
                    <div className={style.itemList}
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                    >
                        {items.map((item, index) => 
                            <ItemDnD key={item.id} item={item} index={index} />)}
                        {provided.placeholder}
                    </div>

                )}
            </Droppable>
        </div>
    )
})
export default ColumnDnD