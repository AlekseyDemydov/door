import React from 'react';

import s from './Catalog.module.scss';
import PhotoCarousel from './Slider/PhotoCarousel';

const importAll = context => context.keys().map(context);
const imagesDoor = importAll(require.context('./img/door', false, /\.(jpg)$/));
const imagesKitchen = importAll(
  require.context('./img/kitchen', false, /\.(jpg)$/)
);

const Catalog = () => {
  return (
    <>
      <div className={s.catalog}>
        <div className={s.leftBar}></div>
        <div className={s.rightBar}>
          <PhotoCarousel images={imagesKitchen} length={19} />
          <PhotoCarousel images={imagesDoor} length={50} />
        </div>
      </div>
    </>
  );
};

export default Catalog;
