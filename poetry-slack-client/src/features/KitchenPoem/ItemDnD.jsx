import React from 'react'

import { Draggable } from 'react-beautiful-dnd'
import style from './KitchenPoem.module.scss'

const ItemDnD = ({key, item, index}) => {
    return (
        <Draggable
            draggableId={item.id}
            index={index}
        >
            {(provided) => (
                <div className={style.item}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                ref={provided.innerRef}
                >
                    {item.content}
                </div>

            )}
        </Draggable>
    )
}
export default ItemDnD