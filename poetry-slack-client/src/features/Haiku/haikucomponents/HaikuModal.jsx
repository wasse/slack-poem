import React, { useEffect, useState, useRef } from 'react'
import { observer } from 'mobx-react'
import {
   generateHaiku,
   getChannelResponseObjectAsIdAndNameList,
} from '../haikuFunctions'
import { getChannelMessages } from '../../../api-calls/slack-api-calls'
import { useStores } from '../../../custom-hooks/use-stores'
import styles from '../Haiku.module.scss'

const HaikuModal = observer(({ showCard, hide, title }) => {
   const { haiku } = useStores()

   let chnl = useRef(getChannelResponseObjectAsIdAndNameList())

   const [radioChecked, setRadioChecked] = useState(chnl.current[0].id)
   const [chosenChannelId, setChosenChannelId] = useState(chnl.current[0].id)
   const [chosenChannelName, setChosenChannelName] = useState(
      chnl.current[0].name
   )

   const radioButtons = chnl.current.map(ch => (
      <li key={ch.id}>
         <label className="radio">
            <input
               checked={radioChecked === ch.id}
               type="radio"
               name={ch.name}
               value={ch.id}
               onChange={() => onRadioButtonChange(ch.id, ch.name)}
               onClick={() => setRadioChecked(ch.id)}
            />
            {'  '}
            {ch.name}
         </label>
      </li>
   ))

   const onRadioButtonChange = (id, name) => {
      setChosenChannelId(id)
      setChosenChannelName(name)
   }
   const handleGenerateButtonClick = () => {
      haiku.actions.setHaiku([])
      getChannelMessages(chosenChannelId)
      setTimeout(() => {
         generateHaiku(chosenChannelId, chosenChannelName)
      }, 2000)
      hide()
   }

   return showCard ? (
      <div className="modal is-active">
         <div className="modal-background" />
         <div
            className="modal-card"
            aria-modal
            aria-hidden
            tabIndex={-1}
            role="dialog"
         >
            <header className="modal-card-head">
               <p className="modal-card-title title is-9">{title}</p>
               <button
                  type="button"
                  className="button modal-close-button is-primary"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={hide}
               >
                  <span aria-hidden="true">&times;</span>
               </button>
            </header>
            <section className="modal-card-body">
               <div className="card-content">
                  <div className="control">
                     <ul className={styles.radiolist}>{radioButtons}</ul>
                  </div>
               </div>
            </section>
            <footer className="modal-card-foot">
               <button
                  className="button is-primary"
                  onClick={() => handleGenerateButtonClick()}
               >
                  Generate haiku
               </button>
               <button className="button is-primary" onClick={hide}>
                  Cancel
               </button>
            </footer>
         </div>
      </div>
   ) : null
})
export default HaikuModal
