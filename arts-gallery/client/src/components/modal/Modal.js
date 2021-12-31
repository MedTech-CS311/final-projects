import React, { useState } from 'react'
import './Modal.css'
import '../editPainting/editPainting'
import EditPainting from '../editPainting/editPainting'

export default function Modal() {
  const [modal, setModal] = useState(false)

  const toggleModal = () => {
    setModal(!modal)
  }

  if (modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <>
      <button onClick={toggleModal} className='btn-modal'>
        edit
      </button>

      {modal && (
        <div className='modal'>
          <div onClick={toggleModal} className='overlay'></div>
          <div className='modal-content'>
            <EditPainting />
            <button className='close-modal' onClick={toggleModal}>
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  )
}
