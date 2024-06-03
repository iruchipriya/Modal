import React from 'react';

const modalStyle = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#fff',
  padding: '20px',
  border: '2px solid black',
  zIndex: '1000',
};

const overlayStyle = {
  position: 'fixed',
};

function Modal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div style={overlayStyle}>
      <div style={modalStyle}>
        <button className="close-btn" onClick={onClose}>
          Close
        </button>
        <h2>This is a Modal</h2>
        <p>Modal content goes here...</p>
      </div>
    </div>
  );
}

export default Modal;
