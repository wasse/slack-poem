import React from 'react'
import styles from './Haiku.module.scss'
import clsx from 'clsx'
import { useStores } from '../../custom-hooks/use-stores'
import { observer } from 'mobx-react'
import { TileGroup } from '../../components'
import Introduction from './haikucomponents/Introduction'
import HaikuDisplay from './haikucomponents/HaikuDisplay'

const Haiku = observer(props => {
   const styledColumn = clsx('tile is-ancestor is-full-mobile' + styles.column)
   const { haiku } = useStores()
   return (
      <div className={styledColumn}>
         <TileGroup
            displaySecondTileContent
            leftContent={<Introduction />}
            rightContent={
               haiku.data.haiku.length === 3 ? (
                  <HaikuDisplay haikuprop={haiku.data.haiku} />
               ) : (
                  <div />
               )
            }
         />
      </div>
   )
})

export default Haiku
