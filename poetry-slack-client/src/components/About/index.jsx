import React from 'react'
import { TileGroup } from '../../components'
import clsx from 'clsx'
import { observer } from 'mobx-react'
import styles from './About.module.scss'
import HowTo from './howto'

const styledAncestor = clsx(
   'tile is-ancestor is-12',
   styles.ancestor)

const About = () => {
   return (
      <div className={styledAncestor}>
         <HowTo />
      </div>
   )
}

// const About = observer(() => {
//    const styledColumn = clsx('tile is-ancestor is-full-mobile' + styles.column)
//    return (
//       <div className={styledColumn}>
//          <TileGroup
//             displaySecondTileContent
//             leftContent={<HowTo />}
         
//          />
//       </div>
//    )
// })

// const About = () => (
//    <div className="tile is-ancestor">
//       <div className="tile">
//          <HowTo />
//       </div>
//    </div>
// )

export default About
