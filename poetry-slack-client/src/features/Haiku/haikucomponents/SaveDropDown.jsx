import React, { useState } from 'react'
import styles from '../Haiku.module.scss'
import clsx from 'clsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import DropDownContent from './DropDownContent'

const SaveDropDown = props => {
   const [isActive, toggleActive] = useState(false)
   const styledDropDown = clsx(
      'dropdown',
      isActive ? 'is-active' : '',
      styles.dropdown
   )
   const styledButton = clsx('button', styles.dropdownbutton)
   const styledDropDownMenu = clsx(
      'dropdown-menu is-right',
      styles.dropdownmenu
   )
   return (
      <div className="tile is-child">
         <div className={styledDropDown}>
            <div className="dropdown-trigger">
               <button
                  className={styledButton}
                  aria-haspopup="true"
                  aria-controls="dropdown-menu1"
                  onClick={() => toggleActive(!isActive)}
               >
                  <div className="subtitle">
                     Add this Haiku to the archive{' '}
                     <FontAwesomeIcon className={styles.icon} icon="save" />
                     <FontAwesomeIcon
                        className={styles.icon}
                        icon={isActive ? 'angle-down' : 'angle-up'}
                     />
                  </div>
               </button>
            </div>
            {isActive && (
               <div
                  className={styledDropDownMenu}
                  id="dropdown-menu1"
                  role="menu"
               >
                  <DropDownContent />
               </div>
            )}
         </div>
      </div>
   )
}

export default SaveDropDown
