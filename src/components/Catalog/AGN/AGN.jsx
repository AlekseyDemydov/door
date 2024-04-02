import { NavLink } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import AGNcatalog from './AGNcatalog/AGNcatalog';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

import AGNmain from './img/AGNmain.jpeg';

import Black from './img/allDoor/color/black.jpg';
import Creem from './img/allDoor/color/creem.jpg';
import Gold from './img/allDoor/color/gold.jpg';
import GrayNight from './img/allDoor/color/grayNight.jpg';
import Silver from './img/allDoor/color/silver.jpg';
import White from './img/allDoor/color/white.jpg';

import lb from './img/glass/color/lb.jpg';
import pr from './img/glass/color/pr.jpg';
import t from './img/glass/color/t.jpg';
import z from './img/glass/color/z.jpg';

import s from './AGN.module.scss';

const imagesColor = {
  Black: Black,
  Gold: Gold,
  GrayNight: GrayNight,
  Silver: Silver,
  White: White,
};
const colors = {
  Black: 'чорний матовий',
  Gold: 'золото',
  GrayNight: 'сіра ніч',
  Silver: 'Срібло матове',
  White: 'вайт',
};

const imagesGlass = {
  lb: lb,
  pr: pr,
  t: t,
  z: z,
};

const gla = {
  lb: 'LACOBEL чорний лак',
  pr: 'прозорий',
  lw: 'LACOBEL білий лак',
  z: 'дзеркало',
};

const importAll = context => context.keys().map(context);

const imagesDoor = {
  Black: importAll(require.context('./img/allDoor/Black', false, /\.(png)$/)),
  Gold: importAll(require.context('./img/allDoor/Gold', false, /\.(png)$/)),
  GrayNight: importAll(
    require.context('./img/allDoor/GrayNight', false, /\.(png)$/)
  ),
  Silver: importAll(require.context('./img/allDoor/Silver', false, /\.(png)$/)),
  White: importAll(require.context('./img/allDoor/White', false, /\.(png)$/)),
};

const imagesGlasslb = {
  lbPlusBlack: importAll(
    require.context('./img/glass/lb/lbPlusBlack', false, /\.(png)$/)
  ),
  lbPlusCreem: importAll(
    require.context('./img/glass/lb/lbPlusCreem', false, /\.(png)$/)
  ),
  lbPlusGold: importAll(
    require.context('./img/glass/lb/lbPlusGold', false, /\.(png)$/)
  ),
  lbPlusGrayNight: importAll(
    require.context('./img/glass/lb/lbPlusGrayNight', false, /\.(png)$/)
  ),
  lbPlusSilver: importAll(
    require.context('./img/glass/lb/lbPlusSilver', false, /\.(png)$/)
  ),
  lbPlusWhite: importAll(
    require.context('./img/glass/lb/lbPlusWhite', false, /\.(png)$/)
  ),
};

const imagesGlasspr = {
  prPlusBlack: importAll(
    require.context('./img/glass/pr/prPlusBlack', false, /\.(png)$/)
  ),
  prPlusCreem: importAll(
    require.context('./img/glass/pr/prPlusCreem', false, /\.(png)$/)
  ),
  prPlusGold: importAll(
    require.context('./img/glass/pr/prPlusGold', false, /\.(png)$/)
  ),
  prPlusGrayNight: importAll(
    require.context('./img/glass/pr/prPlusGrayNight', false, /\.(png)$/)
  ),
  prPlusSilver: importAll(
    require.context('./img/glass/pr/prPlusSilver', false, /\.(png)$/)
  ),
  prPlusWhite: importAll(
    require.context('./img/glass/pr/prPlusWhite', false, /\.(png)$/)
  ),
};

const imagesGlasslw = {
  lwPlusBlack: importAll(
    require.context('./img/glass/lw/lwPlusBlack', false, /\.(png)$/)
  ),
  lwPlusCreem: importAll(
    require.context('./img/glass/lw/lwPlusCreem', false, /\.(png)$/)
  ),
  lwPlusGold: importAll(
    require.context('./img/glass/lw/lwPlusGold', false, /\.(png)$/)
  ),
  lwPlusGrayNight: importAll(
    require.context('./img/glass/lw/lwPlusGrayNight', false, /\.(png)$/)
  ),
  lwPlusSilver: importAll(
    require.context('./img/glass/lw/lwPlusSilver', false, /\.(png)$/)
  ),
  lwPlusWhite: importAll(
    require.context('./img/glass/lw/lwPlusWhite', false, /\.(png)$/)
  ),
};

const imagesGlassz = {
  zPlusBlack: importAll(
    require.context('./img/glass/z/zPlusBlack', false, /\.(png)$/)
  ),
  zPlusCreem: importAll(
    require.context('./img/glass/z/zPlusCreem', false, /\.(png)$/)
  ),
  zPlusGold: importAll(
    require.context('./img/glass/z/zPlusGold', false, /\.(png)$/)
  ),
  zPlusGrayNight: importAll(
    require.context('./img/glass/z/zPlusGrayNight', false, /\.(png)$/)
  ),
  zPlusSilver: importAll(
    require.context('./img/glass/z/zPlusSilver', false, /\.(png)$/)
  ),
  zPlusWhite: importAll(
    require.context('./img/glass/z/zPlusWhite', false, /\.(png)$/)
  ),
};

const AGN = () => {
  const [selectedColor, setSelectedColor] = useState('Black');
  const [selectedName, setSelectedName] = useState('');
  const [selectedImages, setSelectedImages] = useState('');
  const [selectedDoor, setSelectedDoor] = useState(null);
  console.log(selectedDoor);
  // console.log(setSelectedColor);

  const handleColorSelect = color => {
    setSelectedColor(color);

    setSelectedImages(imagesDoor[color]);
  };

  useEffect(() => {
    const nameDoor = () => {
      setSelectedName(imagesDoor['Black']);
    };
    nameDoor();
  }, []);

  const handleGlassSelect = glass => {
    setSelectedDoor(glass);

    const key = `${glass}Plus${selectedColor}`;

    if (glass === 'lb') {
      setSelectedImages(imagesGlasslb[key]);
    } else if (glass === 'pr') {
      setSelectedImages(imagesGlasspr[key]);
    } else if (glass === 'lw') {
      setSelectedImages(imagesGlasslw[key]);
    } else if (glass === 'z') {
      setSelectedImages(imagesGlassz[key]);
    }
  };

  return (
    <>
      <div className={s.peregorodkibox}>
        <div className={s.mainBOx}>
          <h1 className={s.titleper}>МОДЕЛЬ AGN</h1>
          <div>
            <ul className={s.infolistper}>
              <li className={s.infoper}>
                Міжкімнатні алюмінієві двері AG – елегантна деталь інтер'єру.
                Конструкція дверей виглядає легкою та витонченою, завдяки
                вузькому несучому профілю під одинарне скління.
              </li>
            </ul>
          </div>
        </div>
        <div className={s.perslider}>
          <img src={AGNmain} alt="" className={s.imgMainPa} />
        </div>
      </div>
      <div className={s.bgHero}></div>
      <div className={s.seriasBox}>
        <div className={s.leftSide}>
          <div>
            <h3>СЕРІЇ</h3>
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
          <AGNcatalog images={selectedImages} nameDoor={selectedName} />
        </div>
      </div>
    </>
  );
};

export default AGN;
