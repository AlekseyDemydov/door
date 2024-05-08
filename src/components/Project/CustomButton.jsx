import React from 'react';

const CustomButton = ({ direction, onClick }) => (
  <button
    className={`custom-button custom-button-${direction}`}
    onClick={onClick}
  >
    {direction === 'prev' ? (
      <img
        src={require('./Slider/img/circle-left.png').default}
        alt="Left arrow"
        className="arrow-icon"
      />
    ) : (
      <img
        src={require('./Slider/img/circle-right.png').default}
        alt="Right arrow"
        className="arrow-icon"
      />
    )}
  </button>
);

export default CustomButton;