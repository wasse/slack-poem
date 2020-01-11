import React from 'react'
// import styles from './Haiku.module.scss'
import { useStores } from '../../custom-hooks/use-stores'
import { observer } from 'mobx-react'

const Haiku = observer(() => {
   const { haiku } = useStores()
   const poem = haiku.data.poem
   const handleChange = e => {
      haiku.actions.setPoem(e.target.value)
   }
   return (
      <div className="column">
         <h2 className="title">Haiku</h2>
         <form action="">
            <input type="text" value={poem} onChange={e => handleChange(e)} />
         </form>
         <h1>{poem}</h1>
      </div>
   )
})

export default Haiku
