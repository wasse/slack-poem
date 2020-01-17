import React from 'react'
import { observer } from 'mobx-react'

const Modal = observer(({ showCard, hide, title, children, getWords }) =>
   showCard ? (
      <div className="modal is-active">
         <div className="modal-background" />
         <div
            className="modal-card"
            aria-modal
            aria-hidden
            tabIndex={-1}
            role="dialog"
         >
            <header className="modal-card-head">
               <button
                  type="button"
                  className="modal-close-button"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={hide}
               >
                  <span aria-hidden="true">&times;</span>
               </button>
               {/* <button class="delete" aria-label="close"></button> */}
               <p className="modal-card-title">{title}</p>
            </header>
            <section className="modal-card-body">
               <div className="content">{children}</div>
            </section>
            <footer className="modal-card-foot">
               <button onClick={getWords}>Choose</button>
               <button onClick={hide}>Cancel</button>
            </footer>
         </div>
      </div>
   ) : null
)

export default Modal
