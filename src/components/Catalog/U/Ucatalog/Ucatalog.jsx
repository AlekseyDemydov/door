import React from 'react';
import s from './Ucatalog.module.scss';

const Ucatalog = ({ images, nameDoor }) => {
  if (!images || !Array.isArray(images)) {
    return null;
  }

  const getFileNameWithoutExtension = filePath => {
    if (!filePath) return '';
    const fileNameWithExtension = filePath.split('/').pop();
    const fileNameWithoutExtension = fileNameWithExtension.replace(/_/g, ' ');
    return fileNameWithoutExtension.slice(0, 5);
  };


  const halfLength = Math.ceil(images.length / 2);
  const firstHalfImages = images.slice(0, halfLength);
  const halfLengthName = Math.ceil(nameDoor.length / 2);
  const firstHalfNames = nameDoor.slice(0, halfLengthName);

  const NameOfDoor = firstHalfNames.map((doorName, index) => {
    return getFileNameWithoutExtension(doorName);
  });
  const nzmeOfImg = firstHalfImages.map((images, index) => {
    return getFileNameWithoutExtension(images);
  });
  const matchedElements = NameOfDoor.filter(element => nzmeOfImg.includes(element));

  return (
    <div>
      <div className={s.imgBox}>
        {firstHalfImages.map((image, index) => {
          return (
            <div key={index}>
              <img src={image} alt="" className={s.photoSliderImage} />
            </div>
          );
        })}
      </div>
      <div className={s.nameImg}>
      {firstHalfNames.map((doorName, index) => {
          const fileName = getFileNameWithoutExtension(doorName);
          const matched = !matchedElements.includes(fileName); // Зміна тут
          return (
            <div key={index}>
              <p className={`${s.nameBox} ${matched ? s.matched : ''}`}>
                {fileName}
              </p>
            </div>
          );
        })}
      </div>
      
    </div>
  );
};

export default Ucatalog;
