import React from 'react';

import './Modal.scss';

const Modal = ({ isOpen, onClose, imageName, onNext, onPrev}) => {
  if (!isOpen) return null;
  const CustomButton = ({ direction, onClick }) => (
    <button
      className={`custom-buttonn custom-buttonn-${direction}`}
      onClick={onClick}
    >
      {direction === 'prev' ? (
        <p>prev</p>
      ) : (
        <p>next</p>
      )}
    </button>
  );
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <CustomButton direction="prev" onClick={onPrev} />
        <img src={imageName} alt="Full size" />
        <CustomButton direction="next" onClick={onNext} />
        <button className="close-button" onClick={onClose}>
          Закрити
        </button>
      </div>
    </div>
  );
};

export default Modal;