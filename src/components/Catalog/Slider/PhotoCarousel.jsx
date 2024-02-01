import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './PhotoCarousel.scss';



const PhotoCarousel = ({images, length}) => {
  const generateImageName = index => images[index];

  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="photo-carousel-container">
      {/* <h2 className="photo-carousel-title">Фото Карусель</h2> */}
      <Slider {...settings} className="photo-slider">
        {Array.from({ length}, (_, index) => (
          <div key={index} className="photo-slider-slide">
            <div className="photo-slider-image-container">
              {[0, 1, 2, 3, 4, 5].map(offset => (
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
    </div>
  );
};

export default PhotoCarousel;