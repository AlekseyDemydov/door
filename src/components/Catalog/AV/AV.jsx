import { NavLink } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import AVcatalog from './AVcatalog/AVcatalog';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

import AVmain from './img/AVmain.jpg';

import Black from './img/allDoor/color/black.jpg';
import Shampan from './img/allDoor/color/shampan.jpg';
import GrayNight from './img/allDoor/color/grayNight.jpg';
import Silver from './img/allDoor/color/silver.jpg';
import White from './img/allDoor/color/white.jpg';

import mt from './img/glass/color/mt.jpg';
import pr from './img/glass/color/pr.jpg';
import t from './img/glass/color/t.jpg';
import z from './img/glass/color/z.jpg';

import s from './AV.module.scss';

const imagesColor = {
  Black: Black,
  Shampan: Shampan,
  GrayNight: GrayNight,
  Silver: Silver,
  White: White,
};
const colors = {
  Black: 'чорний матовий',
  Shampan: 'шампань',
  GrayNight: 'сіра ніч',
  Silver: 'cрібло матове',
  White: 'вайт',
};

const imagesGlass = {
  mt: mt,
  pr: pr,
  t: t,
  z: z,
};

const gla = {
  mt: 'матовий',
  pr: 'прозорий',
  t: 'Тоноване',
  z: 'дзеркало',
};

const importAll = context => context.keys().map(context);

const imagesDoor = {
  Black: importAll(require.context('./img/allDoor/Black', false, /\.(png)$/)),
  Shampan: importAll(
    require.context('./img/allDoor/Shampan', false, /\.(png)$/)
  ),
  GrayNight: importAll(
    require.context('./img/allDoor/GrayNight', false, /\.(png)$/)
  ),
  Silver: importAll(require.context('./img/allDoor/Silver', false, /\.(png)$/)),
  White: importAll(require.context('./img/allDoor/White', false, /\.(png)$/)),
};

const imagesGlassmt = {
  mtPlusBlack: importAll(
    require.context('./img/glass/mt/mtPlusBlack', false, /\.(png)$/)
  ),
  mtPlusShampan: importAll(
    require.context('./img/glass/mt/mtPlusShampan', false, /\.(png)$/)
  ),
  mtPlusGrayNight: importAll(
    require.context('./img/glass/mt/mtPlusGrayNight', false, /\.(png)$/)
  ),
  mtPlusSilver: importAll(
    require.context('./img/glass/mt/mtPlusSilver', false, /\.(png)$/)
  ),
  mtPlusWhite: importAll(
    require.context('./img/glass/mt/mtPlusWhite', false, /\.(png)$/)
  ),
};

const imagesGlasspr = {
  prPlusBlack: importAll(
    require.context('./img/glass/pr/prPlusBlack', false, /\.(png)$/)
  ),
  prPlusGrayNight: importAll(
    require.context('./img/glass/pr/prPlusGrayNight', false, /\.(png)$/)
  ),
  prPlusShampan: importAll(
    require.context('./img/glass/pr/prPlusShampan', false, /\.(png)$/)
  ),
  prPlusSilver: importAll(
    require.context('./img/glass/pr/prPlusSilver', false, /\.(png)$/)
  ),
  prPlusWhite: importAll(
    require.context('./img/glass/pr/prPlusWhite', false, /\.(png)$/)
  ),
};

const imagesGlasst = {
  tPlusBlack: importAll(
    require.context('./img/glass/t/tPlusBlack', false, /\.(png)$/)
  ),
  tPlusGrayNight: importAll(
    require.context('./img/glass/t/tPlusGrayNight', false, /\.(png)$/)
  ),
  tPlusShampan: importAll(
    require.context('./img/glass/t/tPlusShampan', false, /\.(png)$/)
  ),
  tPlusSilver: importAll(
    require.context('./img/glass/t/tPlusSilver', false, /\.(png)$/)
  ),
  tPlusWhite: importAll(
    require.context('./img/glass/t/tPlusWhite', false, /\.(png)$/)
  ),
};

const imagesGlassz = {
  zPlusBlack: importAll(
    require.context('./img/glass/z/zPlusBlack', false, /\.(png)$/)
  ),
  zPlusGrayNight: importAll(
    require.context('./img/glass/z/zPlusGrayNight', false, /\.(png)$/)
  ),
  zPlusShampan: importAll(
    require.context('./img/glass/z/zPlusShampan', false, /\.(png)$/)
  ),
  zPlusSilver: importAll(
    require.context('./img/glass/z/zPlusSilver', false, /\.(png)$/)
  ),
  zPlusWhite: importAll(
    require.context('./img/glass/z/zPlusWhite', false, /\.(png)$/)
  ),
};

const AV = () => {
  const [selectedColor, setSelectedColor] = useState('Black');
  const [selectedName, setSelectedName] = useState('');
  const [selectedImages, setSelectedImages] = useState('');
  const [selectedDoor, setSelectedDoor] = useState(null);
  console.log(selectedDoor);

  const handleColorSelect = color => {
    setSelectedColor(color);

    setSelectedImages(imagesDoor[color]);
  };

  useEffect(() => {
    handleColorSelect('Black');
    const nameDoor = () => {
      setSelectedName(imagesDoor['Black']);
    };
    nameDoor();
  }, []);

  const handleGlassSelect = glass => {
    setSelectedDoor(glass);

    const key = `${glass}Plus${selectedColor}`;

    if (glass === 'mt') {
      setSelectedImages(imagesGlassmt[key]);
    } else if (glass === 'pr') {
      setSelectedImages(imagesGlasspr[key]);
    } else if (glass === 't') {
      setSelectedImages(imagesGlasst[key]);
    } else if (glass === 'z') {
      setSelectedImages(imagesGlassz[key]);
    }
  };

  return (
    <>
      <div className={s.peregorodkibox}>
        <div className={s.mainBOx}>
          <h1 className={s.titleper}>МОДЕЛЬ AV</h1>
          <div>
            <ul className={s.infolistper}>
              <li className={s.infoper}>
                Алюмінієві міжкімнатні двері серії AV мають вузький профіль зі
                згладженим кутом на кордоні зі склом. Вони здатні стати окрасою
                інтер'єру в стилі мінімалізм. Дана серія має велику
                різноманітність рішень щодо оформлення дверних конструкцій
                фрамугами.
              </li>
            </ul>
          </div>
        </div>
        <div className={s.perslider}>
          <img src={AVmain} alt="" className={s.imgMainPa} />
        </div>
      </div>
      <div className={s.bgHero}></div>
      <div className={s.seriasBox}>
        <div className={s.leftSide}>
          <div>
            <h3>СЕРІЇ</h3>
            <div className={s.nameSerias}>
            <NavLink
              to="/door/catalog/ax"
              style={({ isActive }) => ({
                border: isActive
                  ? '3px solid rgb(8, 7, 7)'
                  : '1px solid rgb(8, 7, 7)',
              })}
              className={s.serias}
            >
              AX
            </NavLink>
            <NavLink
              to="/door/catalog/av"
              style={({ isActive }) => ({
                border: isActive
                  ? '3px solid rgb(8, 7, 7)'
                  : '1px solid rgb(8, 7, 7)',
              })}
              className={s.serias}
            >
              AV
            </NavLink>
            <NavLink
              to="/door/catalog/ag"
              style={({ isActive }) => ({
                border: isActive
                  ? '3px solid rgb(8, 7, 7)'
                  : '1px solid rgb(8, 7, 7)',
              })}
              className={s.serias}
            >
              AG
            </NavLink>
            <NavLink
              to="/door/catalog/agn"
              style={({ isActive }) => ({
                border: isActive
                  ? '3px solid rgb(8, 7, 7)'
                  : '1px solid rgb(8, 7, 7)',
              })}
              className={s.serias}
            >
              AGN
            </NavLink>
            <NavLink
              to="/door/catalog/agp"
              style={({ isActive }) => ({
                border: isActive
                  ? '3px solid rgb(8, 7, 7)'
                  : '1px solid rgb(8, 7, 7)',
              })}
              className={s.serias}
            >
              AGP
            </NavLink>
            <NavLink
              to="/door/catalog/agk"
              style={({ isActive }) => ({
                border: isActive
                  ? '3px solid rgb(8, 7, 7)'
                  : '1px solid rgb(8, 7, 7)',
              })}
              className={s.serias}
            >
              AGK
            </NavLink>
            </div>
          </div>
          <div>
            <h3>КОЛІР</h3>
            {Object.keys(imagesColor).map((color, index) => (
              <OverlayTrigger
                key={index}
                placement="top"
                delay={{ show: 250, hide: 400 }}
                overlay={<Tooltip>{colors[color]}</Tooltip>}
              >
                <img
                  className={s.imgCoolor}
                  src={imagesColor[color]}
                  alt=""
                  onClick={() => handleColorSelect(color)}
                />
              </OverlayTrigger>
            ))}
          </div>

          <div>
            <h3>СКЛО</h3>
            {Object.keys(imagesGlass).map((glass, index) => (
              <OverlayTrigger
                key={index}
                placement="top"
                delay={{ show: 250, hide: 400 }}
                overlay={<Tooltip>{gla[glass]}</Tooltip>}
              >
                <img
                  className={s.imgCoolor}
                  src={imagesGlass[glass]}
                  alt=""
                  onClick={() => handleGlassSelect(glass)}
                />
              </OverlayTrigger>
            ))}
          </div>
        </div>
        <div className={s.imgBox}>
          <AVcatalog images={selectedImages} nameDoor={selectedName} />
        </div>
      </div>
    </>
  );
};

export default AV;
