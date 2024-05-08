import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './PhotoCarousel.scss';
import Modal from '../Modal/Modal';

const PhotoCarousel = ({ images, length, onChange }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState('');

  useEffect(() => {
    setCurrentImage(images[0]);
  }, [images]);

  const openModal = index => {
    setCurrentImage(images[index]);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setCurrentImage('');
  };

  const generateImageName = index => images[index % images.length];

  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    beforeChange: (current, next) => {
      if (onChange) {
        onChange(next);
      }
    },
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
  const handleNext = () => {
    const currentIndex = images.indexOf(currentImage);
    const nextIndex = (currentIndex + 1) % images.length;
    setCurrentImage(images[nextIndex]);
  };
  
  const handlePrev = () => {
    const currentIndex = images.indexOf(currentImage);
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentImage(images[prevIndex]);
  };
  return (
    <div className="photo-carousel-container">
      <Slider
        {...settings}
        className="photo-slider"
        nextArrow={<CustomButton direction="next" />}
        prevArrow={<CustomButton direction="prev" />}
        slidesToShow={6}
        responsive={[
          {
            breakpoint: 480, 
            settings: {
              slidesToShow: 3, 
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 4,
            },
          },
        ]}
      >
        {Array.from({ length }, (_, index) => (
          <div
            key={index}
            className="photo-slider-slide"
            onClick={() => openModal(index)}
          >
            <div className="photo-slider-image-container">
              <img
                src={generateImageName(index)}
                alt={`${index + 1}`}
                className="photo-slider-image"
              />
            </div>
          </div>
        ))}
      </Slider>
      <Modal
        isOpen={modalOpen}
        onClose={closeModal}
        imageName={currentImage}
        onNext={handleNext}
        onPrev={handlePrev}
        CustomButton={CustomButton}
      />
    </div>
  );
};

export default PhotoCarousel;
