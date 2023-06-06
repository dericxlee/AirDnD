import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import LoginForm from './LoginForm';

const LoginFormModal = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setShowModal(true)
  }

  const handleClose = (e) => {
    e.preventDefault()
    setShowModal(false)
  }

  return (
    <>
      <button onClick={handleClick}>Log In</button>
      {showModal && (
        <Modal onClose={handleClose}>
          <LoginForm handleClose={handleClose}/>
        </Modal>
      )}
    </>
  );
}

export default LoginFormModal;