import React, { useState } from 'react'

const ModalCardStart = () => {
  const [ showCard, setShowCard ] = useState(false) 

  function toggleModal() {
    setShowCard(!showCard)
  }
  return (
    { showCard, toggleModal }
  )
}

export default ModalCardStart