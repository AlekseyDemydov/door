import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/scss/image-gallery.scss';
import s from './Catalog.module.scss';
// import './Catalog.css'

const Catalog = () => {
  // Приклад різних масивів зображень для різних випадків використання
  const generateImageName = index => require(`./img/door/${index}.jpg`);

  // Створення масиву зображень для слайдера
  const images = Array.from({ length: 50 }, (_, index) => ({
    original: generateImageName(index + 1),
    thumbnail: generateImageName(index + 1),
    originalHeight: 300,
    thumbnailHeight: 50,
  }));

  return (
    <>
      <div className={s.catalog}>
        <div className={s.leftBar}></div>
        <div className={s.rightBar}>
          <ImageGallery
            items={images}
            autoPlay={true}
            additionalClass={s.customImageGallery}
            
          />
        </div>
      </div>
    </>
  );
};

export default Catalog;
