import React, { useState } from 'react'

import 'bulma'

import Button from '../../components/Button'
// import GetConversations from '../GetConversations';
import ModalCardStart from '../../components/Modal/ModalCardStart'
import Modal from '../../components/Modal/Modal'
import KitchenPoemStart from './KitchenPoemStart'

const KitchenPoem = () => {
   // const [ showCard, setShowCard ] = useState(false)
   const { showCard, toggleModal } = ModalCardStart()
   console.log(toggleModal)
   return (
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
            // children={KitchenPoemStart, "Hej"} // TODO: fix so that Kitchen..Start component will be shown
         >
            <KitchenPoemStart />
         </Modal>

         {/* <GetConversations/> */}
      </div>
   )
}

export default KitchenPoem
