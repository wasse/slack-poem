import React, { useState } from 'react'
import styles from '../Haiku.module.scss'
import clsx from 'clsx'
import { useStores } from '../../../custom-hooks/use-stores'
import { observer } from 'mobx-react'
import { formatHaikuAndPostAsMessageInChannel } from '../haikuFunctions'

const styledDropDownMenuContent = clsx(
   'dropdown-content',
   styles.dropdowncontent
)
const styledField = clsx('field', styles.dropdownfield)
const styledInput = clsx('dropdown-item input is-primary', styles.dropdowninput)
const styledSubmit = clsx('dropdown-item', styles.submitbutton)

const DropDownContent = observer(props => {
   const { haiku } = useStores()

   const handleChange = e => {
      haiku.actions.setTitle(e.target.value)
   }

   const handlePost = () => {
      formatHaikuAndPostAsMessageInChannel()
   }

   const handleSave = () => {
      // TODO: .....
      console.log('Save clicked')
   }

   return (
      <div className={styledDropDownMenuContent}>
         <div className={styledField}>
            <label className="label">What would you like to call it?</label>
            <div className="control">
               <input
                  className={styledInput}
                  onChange={e => handleChange(e)}
                  type="text"
                  placeholder={haiku.data.title}
               />
            </div>
            <p className="help">
               The haiku needs a title before you can save or post it.
            </p>
            <hr className="dropdown-divider" />
            <div className={styledSubmit}>
               <button
                  type="submit"
                  disabled={!haiku.data.title.length}
                  className="button is-primary"
                  onClick={() => handleSave()}
               >
                  Save
               </button>
            </div>
            <hr className="dropdown-divider" />
            <div className={styledSubmit}>
               <button
                  type="submit"
                  disabled={!haiku.data.title.length}
                  className="button is-primary"
                  onClick={() => handlePost()}
               >
                  Post
               </button>
            </div>
         </div>
      </div>
   )
})
export default DropDownContent
