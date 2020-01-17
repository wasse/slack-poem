import React, { useState } from 'react'

import { useStores } from '../../custom-hooks/use-stores'
import { observer } from 'mobx-react'

import ModalCardStart from '../../components/Modal/ModalCardStart'
import Modal from '../../components/Modal/Modal'
import KitchenPoemStart from './KitchenPoemStart'
import KitchenPoemChoose from './KitchenPoemChoose'

const KitchenPoem = observer(() => {
   const { kitchen } = useStores()
   const channel = kitchen.data.channel

   const { showCard, toggleModal } = ModalCardStart()
   const [ channelNotChosen, setChannelChosen ] = useState(true)

   function toggleCard() {
      setChannelChosen(!channelNotChosen)
    }

   return (
      channelNotChosen ? (
      <div className="column">
         <h2 className="title">Kitchen Poem</h2>

         <h3 className="subtitle">What is Kitchen Poem?</h3>

         <button className="button is-primary" onClick={toggleModal}>
            Start
         </button>
         <Modal
            showCard={showCard}
            hide={toggleModal}
            title={'Choose a Channel'}
            getWords={()=> toggleCard()}
         >
            <KitchenPoemStart />
         </Modal>

      </div>
   ) : (
      <KitchenPoemChoose channel={channel}/>
   ) )
})

export default KitchenPoem
