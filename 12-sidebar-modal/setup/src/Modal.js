import React from 'react'
import { FaTimes } from 'react-icons/fa'
import{useGlobalContext} from './context'
const Modal = () => {
  const context = useGlobalContext();
  const{showModal,handleModal} = context
  return <div className={`modal-overlay ${showModal && 'show-modal'}`}>
    <div className="modal-container">
      <h3>Lorem</h3>
      <button className="close-modal-btn" onClick={() => handleModal()}><FaTimes /></button>
    </div>
  </div>
}

export default Modal
