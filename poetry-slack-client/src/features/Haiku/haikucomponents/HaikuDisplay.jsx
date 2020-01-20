import React from 'react'
import { Button } from '../../../components'
import SaveDropDown from './SaveDropDown'
import styles from '../Haiku.module.scss'
import clsx from 'clsx'
import { observer } from 'mobx-react'
import { useStores } from '../../../custom-hooks/use-stores'
import { fetchGeneratedHaiku } from '../../../api-calls/haiku-api-calls'

const HaikuDisplay = observer(({ haikuprop, isError, ...other }) => {
   const { haiku } = useStores()
   const styledHaiku = clsx(
      'message',
      haiku.data.isError ? styles.errorhaikumessage : styles.haikumessage
   )
   const styledButton = clsx('button is-primary', styles.tryagainbutton)
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
            Try again
         </button>
         <SaveDropDown />
      </div>
   )
})

export default HaikuDisplay
