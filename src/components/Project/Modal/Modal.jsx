import React from 'react';
import './Modal.scss';

const Modal = ({ isOpen, onClose, imageName }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <img src={imageName} alt="Full size" />
        <button className="close-button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;