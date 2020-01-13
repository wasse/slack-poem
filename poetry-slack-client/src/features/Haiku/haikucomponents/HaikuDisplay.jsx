import React from 'react'
import { Button } from '../../../components'
import SaveDropDown from './SaveDropDown'
import styles from '../Haiku.module.scss'
import clsx from 'clsx'
import { observer } from 'mobx-react'
import { useStores } from '../../../custom-hooks/use-stores'

const HaikuDisplay = observer(({ haikuprop, ...other }) => {
   const styledHaiku = clsx('message', styles.haikumessage)
   const { haiku } = useStores()
   return (
      <div className="tile is-vertical is-centered">
         <div className={styledHaiku}>
            <div>{haiku.data.title.toUpperCase()}</div>
            {haikuprop[0]}
            <br />
            {haikuprop[1]}
            <br />
            {haikuprop[2]}
         </div>
         <SaveDropDown />
      </div>
   )
})

export default HaikuDisplay
