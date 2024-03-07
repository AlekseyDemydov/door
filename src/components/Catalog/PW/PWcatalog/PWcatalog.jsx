import React from 'react';
import s from './PWcatalog.module.scss';

const PWcatalog = ({ images }) => {
  if (!images || !Array.isArray(images)) {
    return null;
  }

  const getFileNameWithoutExtension = filePath => {
    const fileNameWithExtension = filePath.split('/').pop(); // Отримуємо ім'я файлу з розширенням
    const fileNameWithoutExtension = fileNameWithExtension.split('.')[0]; // Відділяємо ім'я файлу без розширення
    return fileNameWithoutExtension;
  };

  // Вибираємо лише першу половину зображень
  const halfLength = Math.ceil(images.length / 2);
  const firstHalfImages = images.slice(0, halfLength);

  return (
    <div className={s.imgBox}>
      <div>
        {firstHalfImages.map((image, index) => (
          <div key={index}>
            <img
              src={image}
              alt='qwe'
              className="photo-slider-image"
            />
            <p>{getFileNameWithoutExtension(image)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PWcatalog;