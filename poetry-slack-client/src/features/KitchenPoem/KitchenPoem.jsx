import React, { useState } from 'react'

import { useStores } from '../../custom-hooks/use-stores'
import { observer } from 'mobx-react'

import ModalCardStart from '../../components/Modal/ModalCardStart'
import Modal from '../../components/Modal/Modal'
import KitchenPoemStart from './KitchenPoemStart'
import KitchenPoemChoose from './KitchenPoemChoose'
import WordDnD from './WordDnD'
import wordItems from './wordItems'
import { getChannelMessages } from '../../api-calls/slack-api-calls'

const KitchenPoem = observer(() => {
   const { session } = useStores()
   const { kitchen } = useStores()
   let channel = kitchen.data.selectedChannelID
   const dataDnD = kitchen.data.dataDnD
   let atStart = kitchen.data.atStart
   let showCard = kitchen.data.showCard
   let isSelected = kitchen.data.channelIsSelected

   // const { showCard, toggleModal } = ModalCardStart()
   const [ channelNotChosen, setChannelChosen ] = useState(true)

   function toggleCard() {
      kitchen.actions.toggleShowCard()
      if(isSelected){
         kitchen.actions.toggleChannelIsSelected()
      }
    }

   const getWords = () => {
      if(isSelected) {
         console.log(channel)
         getChannelMessages(channel)
         let originalFile = {}
         setTimeout(() => {
            originalFile = session.data.oauthResponseObject
            console.log(originalFile)
            let data = wordItems(channel, 30, originalFile)
            kitchen.actions.setDataDnD(data)
            
            kitchen.actions.toggleAtStart()
         }, 1000)
         kitchen.actions.toggleChannelIsSelected()
      }
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
            hide={toggleCard}
            title={'Choose a Channel'}
            getWords={getWords}
         >
            <KitchenPoemStart />
         </Modal>
      </div>
   ) : (
      <KitchenPoemChoose />
   ) )
})

export default KitchenPoem
