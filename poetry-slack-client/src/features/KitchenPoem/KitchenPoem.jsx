import React, { useState } from 'react'

import { useStores } from '../../custom-hooks/use-stores'
import { observer } from 'mobx-react'

import ModalCardStart from '../../components/Modal/ModalCardStart'
import Modal from '../../components/Modal/Modal'
import KitchenPoemStart from './KitchenPoemStart'
import KitchenPoemChoose from './KitchenPoemChoose'
import WordDnD from './WordDnD'

const KitchenPoem = observer(() => {
   const { kitchen } = useStores()
   const channel = kitchen.data.selectedChannel
   let atStart = kitchen.data.atStart
   let showCard = kitchen.data.showCard

   // const { showCard, toggleModal } = ModalCardStart()
   const [ channelNotChosen, setChannelChosen ] = useState(true)

   function toggleCard() {
      setChannelChosen(!channelNotChosen)
    }

   const getWords = () => {
      kitchen.actions.toggleAtStart()
   }

   return (
      atStart ? (
      <div className="column">
         <h2 className="title">Kitchen Poem</h2>

         <h3 className="subtitle">What is Kitchen Poem?</h3>

         <button className="button is-primary" onClick={kitchen.actions.toggleShowCard}>
            Start
         </button>
         <Modal
            showCard={showCard}
            hide={kitchen.actions.toggleShowCard}
            title={'Choose a Channel'}
            getWords={getWords}
         >
            <KitchenPoemStart />
         </Modal>

         <WordDnD />

      </div>
   ) : (
      <KitchenPoemChoose />
   ) )
})

export default KitchenPoem
