import React from 'react'
// import styles from './Haiku.module.scss'
import { useStores } from '../../custom-hooks/use-stores'
import { observer } from 'mobx-react'
import ModalCardStart from '../../components/Modal/ModalCardStart'
import Modal from '../../components/Modal/Modal'
import { Button } from '../../components'
import Introduction from './haikucomponents/Introduction'
import HaikuCard from './haikucomponents/HaikuCard'

const Haiku = () => {
   // const { haiku } = useStores()
   const { showCard, toggleModal } = ModalCardStart()

   // const poem = haiku.data.poem

   return (
      <div className="column">
         <Introduction />
         <Button
            className="button is-primary"
            children={'Create a Haiku'}
            onClick={() => toggleModal()}
         />
         <Modal
            showCard={showCard}
            hide={toggleModal}
            title={'Choose a Channel'}
         />
         <HaikuCard children="Generated Haiku" />
      </div>
   )
}

export default observer(Haiku)

// const handleChange = e => {
//    haiku.actions.setPoem(e.target.value)
// }
// <form action="">
//    <input type="text" value={poem} onChange={e => handleChange(e)} />
// </form>
// <h1>{poem}</h1>
