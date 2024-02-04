import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './PhotoCarousel.scss';
import Modal from '../Modal/Modal';

const PhotoCarousel = ({ images, length }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState('');

  const openModal = (image) => {
    setCurrentImage(image);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setCurrentImage('');
  };

  const generateImageName = (index) => images[index];

  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const CustomButton = ({ direction, onClick }) => (
    <button
      className={`custom-button custom-button-${direction}`}
      onClick={onClick}
    >
      {direction === 'prev' ? (
        <img
          src={require('./img/circle-left.png')}
          alt="Right arrow"
          className="arrow-icon"
        />
      ) : (
        <img
          src={require('./img/circle-right.png')}
          alt="Right arrow"
          className="arrow-icon"
        />
      )}
    </button>
  );

  return (
    <div className="photo-carousel-container">
      <Slider
        {...settings}
        className="photo-slider"
        nextArrow={<CustomButton direction="next" />}
        prevArrow={<CustomButton direction="prev" />}
      >
        {Array.from({ length }, (_, index) => (
          <div
            key={index}
            className="photo-slider-slide"
            onClick={() => openModal(generateImageName(index))}
          >
            <div className="photo-slider-image-container">
              {[0, 1, 2, 3, 4, 5].map((offset) => (
                <img
                  key={index + offset}
                  src={generateImageName(index + offset)}
                  alt={`${index + offset + 1}`}
                  className="photo-slider-image"
                />
              ))}
            </div>
          </div>
        ))}
      </Slider>
      <Modal
        isOpen={modalOpen}
        onClose={closeModal}
        imageName={currentImage}
      />
    </div>
  );
};

export default PhotoCarousel;