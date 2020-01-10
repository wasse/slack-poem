import React from 'react'
import ReactDOM from 'react-dom'

const Modal = ({ showCard, hide, title, children }) => showCard ? (
    <div className="modal is-active">
        <div className="modal-background"/>
        <div className="modal-card" aria-modal aria-hidden tabIndex={-1} role="dialog">
            <header className="modal-card-head">
            <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hide}>
                <span aria-hidden="true">&times;</span>
            </button>
                {/* <button class="delete" aria-label="close"></button> */}
                <p class="modal-card-title">{title}</p>
            </header>
            <section className="modal-card-body">
                <div className="content">
                    {children}
                </div>
            </section>
            <footer className="modal-card-foot">
                <button>Done</button>
                <button onClick={hide}>Cancel</button>
            </footer>
        </div>
    </div>
) : null

// {
//     if(!modalState) {
//       return null;
//     }
    
//     return(
//       <div className="modal is-active">
//         <div className="modal-background" onClick={closeModal} />
//         <div className="modal-card">
//           <header className="modal-card-head">
//             <p className="modal-card-title">{title}</p>
//             <button className="delete" onClick={closeModal} />
//           </header>
//           <section className="modal-card-body">
//             <div className="content">
//               {children}
//             </div>
//           </section>
//           <footer className="modal-card-foot">
//             <a className="button" onClick={closeModal}>Cancel</a>
//           </footer>
//         </div>
//       </div>
//     );
//   }
  
//   Modal.propTypes = {
//     closeModal: React.PropTypes.func.isRequired,
//     modalState: React.PropTypes.bool.isRequired,
//     title: React.PropTypes.string
//   }

export default Modal