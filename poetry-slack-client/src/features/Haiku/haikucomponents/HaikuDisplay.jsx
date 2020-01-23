import React from 'react'
import SaveDropDown from './SaveDropDown'
import styles from '../Haiku.module.scss'
import clsx from 'clsx'
import { observer } from 'mobx-react'
import { useStores } from '../../../custom-hooks/use-stores'
import { fetchGeneratedHaiku } from '../../../api-calls/haiku-api-calls'

const HaikuDisplay = observer((...props) => {
   const { haiku } = useStores()
   const styledButton = clsx('button is-primary', styles.tryagainbutton)
   const styledHaiku = clsx(
      'message',
      haiku.data.isError ? styles.errorhaikumessage : styles.haikumessage
   )

   return haiku.data.isError ? (
      <div className="tile is-vertical is-centered">
         <div className={styledHaiku}>
            <div>{haiku.data.title.toUpperCase()}</div>
            {haiku.data.haiku[0]}
            <br />
            {haiku.data.haiku[1]}
            <br />
            {haiku.data.haiku[2]}
         </div>
         <p>{haiku.data.errorMessage}</p>
         <p>
            Error occured when generating from the{' '}
            {haiku.data.chosenChannelName} channel
         </p>
      </div>
   ) : (
      <div className="tile is-vertical is-centered">
         <div className={styledHaiku}>
            <div>{haiku.data.title.toUpperCase()}</div>
            {haiku.data.haiku[0]}
            <br />
            {haiku.data.haiku[1]}
            <br />
            {haiku.data.haiku[2]}
         </div>
         <p>Generated from the {haiku.data.chosenChannelName} channel</p>
         <button
            className={styledButton}
            onClick={() => fetchGeneratedHaiku(haiku.data.text)}
         >
            Again!
         </button>
         <SaveDropDown />
      </div>
   )
})

export default HaikuDisplay
