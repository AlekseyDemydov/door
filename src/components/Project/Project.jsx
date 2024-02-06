

import React, { useState } from 'react';
import s from './Project.module.scss';
import PhotoCarousel from './Slider/PhotoCarousel';

const importAll = context => context.keys().map(context);
const imagesDoor = importAll(require.context('./img/door', false, /\.(jpg)$/));
const imagesKitchen = importAll(
  require.context('./img/kitchen', false, /\.(jpg)$/)
);
const imagesKomod = importAll(
  require.context('./img/komod', false, /\.(jpg)$/)
);
const imagesPanels = importAll(
  require.context('./img/panels', false, /\.(jpg)$/)
);
const imagesPeregorodka = importAll(
  require.context('./img/peregorodka', false, /\.(jpg)$/)
);
const imagesWardrobe = importAll(
  require.context('./img/wardrobe', false, /\.(jpg)$/)
);

const Project = () => {
  const [bigKitchenPhotoIndex, setBigKitchenPhotoIndex] = useState(0);
  const [bigDoorPhotoIndex, setBigDoorPhotoIndex] = useState(0);
  const [bigKomodPhotoIndex, setBigKomodPhotoIndex] = useState(0);
  const [bigPanelsPhotoIndex, setBigPanelsPhotoIndex] = useState(0);
  const [bigPeregorodkaPhotoIndex, setBigPeregorodkaPhotoIndex] = useState(0);
  const [bigWardrobePhotoIndex, setBigWardrobePhotoIndex] = useState(0);

  

  return (
    <div className={s.project}>
      <div className={s.slide}>
        <div className={s.bigPhoto}>
          <img
            src={imagesKitchen[bigKitchenPhotoIndex]}
            alt="Kitchen"
            className={s.imgBigPhoto}
          />
        </div>
        <div className={s.carusel}>
          <PhotoCarousel
            key="kitchen"
            images={imagesKitchen}
            length={imagesKitchen.length}
            onChange={setBigKitchenPhotoIndex}
          />
        </div>
      </div>

      <div className={s.slide}>
        <div className={s.bigPhoto}>
          <img
            src={imagesDoor[bigDoorPhotoIndex]}
            alt="Door"
            className={s.imgBigPhoto}
          />
        </div>
        <div className={s.carusel}>
          <PhotoCarousel
            key="door"
            images={imagesDoor}
            length={imagesDoor.length}
            onChange={setBigDoorPhotoIndex}
          />
        </div>
      </div>

      <div className={s.slide}>
        <div className={s.bigPhoto}>
          <img
            src={imagesKomod[bigKomodPhotoIndex]}
            alt="Komod"
            className={s.imgBigPhoto}
          />
        </div>
        <div className={s.carusel}>
          <PhotoCarousel
            key="komod"
            images={imagesKomod}
            length={imagesKomod.length}
            onChange={setBigKomodPhotoIndex}
          />
        </div>
      </div>

      <div className={s.slide}>
        <div className={s.bigPhoto}>
          <img
            src={imagesPanels[bigPanelsPhotoIndex]}
            alt="Panels"
            className={s.imgBigPhoto}
          />
        </div>
        <div className={s.carusel}>
          <PhotoCarousel
            key="panels"
            images={imagesPanels}
            length={imagesPanels.length}
            onChange={setBigPanelsPhotoIndex}
          />
        </div>
      </div>

      <div className={s.slide}>
        <div className={s.bigPhoto}>
          <img
            src={imagesPeregorodka[bigPeregorodkaPhotoIndex]}
            alt="Peregorodka"
            className={s.imgBigPhoto}
          />
        </div>
        <div className={s.carusel}>
          <PhotoCarousel
            key="peregorodka"
            images={imagesPeregorodka}
            length={imagesPeregorodka.length}
            onChange={setBigPeregorodkaPhotoIndex}
          />
        </div>
      </div>

      <div className={s.slide}>
        <div className={s.bigPhoto}>
          <img
            src={imagesWardrobe[bigWardrobePhotoIndex]}
            alt="Wardrobe"
            className={s.imgBigPhoto}
          />
        </div>
        <div className={s.carusel}>
          <PhotoCarousel
            key="wardrobe"
            images={imagesWardrobe}
            length={imagesWardrobe.length}
            onChange={setBigWardrobePhotoIndex}
          />
        </div>
      </div>
    </div>
  );
};

export default Project;

