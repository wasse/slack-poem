import React, { useState } from 'react'

import 'bulma'

import ModalCardStart from '../../components/Modal/ModalCardStart'
import Modal from '../../components/Modal/Modal'
import KitchenPoemStart from './KitchenPoemStart'

const KitchenPoem = () => {
   const { showCard, toggleModal } = ModalCardStart()
   // const { getWords } = GetWords()
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
            getWords={getWords}
         >
            <KitchenPoemStart />
         </Modal>

      </div>
   )
}

export default KitchenPoem
