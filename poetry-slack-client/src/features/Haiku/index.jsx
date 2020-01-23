import React from 'react'
import styles from './Haiku.module.scss'
import clsx from 'clsx'
import { useStores } from '../../custom-hooks/use-stores'
import { observer } from 'mobx-react'
import { TileGroup } from '../../components'
import Introduction from './haikucomponents/Introduction'
import HaikuDisplay from './haikucomponents/HaikuDisplay'
// import Spinner from '../../components/Spinners/Spinner'

const Haiku = observer(props => {
   const styledColumn = clsx('tile is-ancestor is-full-mobile' + styles.column)
   const { haiku } = useStores()

   return (
      <div className={styledColumn}>
         <TileGroup
            displaySecondTileContent={haiku.data.haiku.length === 3}
            loading={haiku.data.haikuIsLoading}
            leftContent={<Introduction />}
            rightContent={<HaikuDisplay />}
         />
      </div>
   )
})

export default Haiku

// () => {
//                if (haiku.data.haikuIsLoading) {
//                   return (
//                      <div className="tile is-vertical is-centered">
//                         {/* <Spinner loading={true} /> */}
//                         <h1 className="title is-primary">testing testing</h1>
//                      </div>
//                   )
//                } else if (haiku.data.haiku.length === 3) {
//                   return <HaikuDisplay />
//                } else {
//                   return <div />
//                }
//             }
