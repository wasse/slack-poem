import React from 'react'
import clsx from 'clsx'
import ModalCardStart from '../../../components/Modal/ModalCardStart'
import HaikuModal from './HaikuModal'
import styles from '../Haiku.module.scss'
import '../Haiku.module.scss'
import { observer } from 'mobx-react'

const Introduction = observer((...other) => {
   const { showCard, toggleModal } = ModalCardStart()
   const styledButton = clsx('button is-primary', styles.button)
   return (
      <div className="tile is-vertical is-centered">
         <div id="description" className="tile is-child is-vertical">
            <p className="title">Haiku</p>
            <p className="subtitle">
               Here you can generate a haiku from selected parts of the
               workspace. It might not turn out to be according to all the
               rules, but entertaining nonetheless.
            </p>
            <p>
               The channel/channels/conversations you choose will set the tone
               of the poem.
            </p>
            <p className="content is-bold">
               "A traditional Japanese haiku is a three-line poem with seventeen
               syllables, written in a 5/7/5 syllable count. Often focusing on
               images from nature, haiku emphasizes simplicity, intensity, and
               directness of expression." <br /> Quoted from:{' '}
               <a
                  className="is-link is-bold"
                  href="https://poets.org/glossary/haiku"
               >
                  poets.org
               </a>
            </p>
         </div>
         <div className="tile is-child is-vertical has-text-centered">
            <button className={styledButton} onClick={() => toggleModal()}>
               Start generating!
            </button>
         </div>
         <HaikuModal
            showCard={showCard}
            hide={toggleModal}
            title={'Choose a Channel'}
         />
      </div>
   )
})

export default Introduction
