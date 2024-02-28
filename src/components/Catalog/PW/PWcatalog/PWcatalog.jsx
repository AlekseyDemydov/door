import React, { useState, useEffect } from 'react';
import s from './PWcatalog.module.scss'

const PWcatalog = ({ images, length }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    setCurrentImageIndex(0);
  }, [images]);

  const getFileNameWithoutExtension = (filePath) => {
    const fileNameWithExtension = filePath.split('/').pop(); // Отримуємо ім'я файлу з розширенням
    const fileNameWithoutExtension = fileNameWithExtension.split('.')[0]; // Відділяємо ім'я файлу без розширення
    return fileNameWithoutExtension;
  };

  return (
    <>
      {Array.from({ length }, (_, index) => (
        <div key={index}  className={s.imgBox} >
          <div>
            <p>{currentImageIndex}</p>
            
            <img
              src={images[index]}
              alt={`${index + 1}`}
              className="photo-slider-image"
            />
            <p>{getFileNameWithoutExtension(images[index])}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default PWcatalog;