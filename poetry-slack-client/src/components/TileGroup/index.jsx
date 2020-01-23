import React from 'react'
import PropTypes from 'prop-types'
import styles from './TileGroup.module.scss'
import clsx from 'clsx'
import Spinner from '../../components/Spinners/Spinner'

const TileGroup = ({
   className,
   leftContent,
   rightContent,
   displaySecondTileContent,
   loading,
   ...props
}) => {
   const styledAncestor = clsx(
      'tile is-ancestor is-12',
      styles.ancestor,
      className
   )
   const styledParent = clsx('tile is-parent ', styles.parent)
   const styledChild = clsx('tile is-child box', styles.child)

   return (
      <div className={styledAncestor}>
         <div className={styledParent}>
            <article className={styledChild}>
               <div className="content">{leftContent}</div>
            </article>
         </div>

         <div className={styledParent}>
            <article className={styledChild}>
               <div className="content">
                  <div>{loading && <Spinner />}</div>
                  {displaySecondTileContent && (
                     <div className="content">{rightContent}</div>
                  )}
               </div>
            </article>
         </div>
      </div>
   )
}

const DefaultContent = () => {
   return (
      <article className="">
         <div className="box">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}
            <strong>Pellentesque risus mi</strong>, tempus quis placerat ut,
            porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam
            gravida purus diam, et dictum felis venenatis efficitur. Aenean ac{' '}
            <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et
            sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi
            magna a neque. Donec dui urna, vehicula et sem eget, facilisis
            sodales sem.
         </div>
      </article>
   )
}

TileGroup.propTypes = {
   className: PropTypes.string,
   leftContent: PropTypes.object,
   // rightContent: PropTypes.object,
   displaySecondTileContent: PropTypes.bool
}

TileGroup.defaultProps = {
   className: '',
   leftContent: <DefaultContent />,
   rightContent: <DefaultContent />
}

export default TileGroup
