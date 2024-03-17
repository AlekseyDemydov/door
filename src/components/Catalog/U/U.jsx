import { NavLink } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Ucatalog from './Ucatalog/Ucatalog';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

import Umain from './img/Umain.jpg';

import alyaska from './img/allDoor/color/alyaska.jpg';
import darkwhite from './img/allDoor/color/darkwhite.jpg';
import gray from './img/allDoor/color/gray.jpg';
import magnolia from './img/allDoor/color/magnolia.jpg';
import manhatten from './img/allDoor/color/manhatten.jpg';
import sand from './img/allDoor/color/sand.jpg';
import shellgray from './img/allDoor/color/shellgray.jpg';

import s from './U.module.scss';

const imagesColor = {
  alyaska: alyaska,
  darkwhite: darkwhite,
  gray: gray,
  magnolia: magnolia,
  manhatten: manhatten,
  sand: sand,
  shellgray: shellgray,
};
const colors = {
  alyaska: 'аляска',
  darkwhite: 'дарквайт',
  gray: 'грей',
  magnolia: 'магнолія',
  manhatten: 'манхеттен',
  sand: 'санд',
  shellgray: 'шеллгрей',
};

const importAll = context => context.keys().map(context);

const imagesDoor = {
  alyaska: importAll(
    require.context('./img/allDoor/alyaska', false, /\.(webp)$/)
  ),
  darkwhite: importAll(
    require.context('./img/allDoor/darkwhite', false, /\.(webp)$/)
  ),
  gray: importAll(require.context('./img/allDoor/gray', false, /\.(webp)$/)),
  magnolia: importAll(
    require.context('./img/allDoor/magnolia', false, /\.(webp)$/)
  ),
  manhatten: importAll(
    require.context('./img/allDoor/manhatten', false, /\.(webp)$/)
  ),
  sand: importAll(require.context('./img/allDoor/sand', false, /\.(webp)$/)),
  shellgray: importAll(
    require.context('./img/allDoor/shellgray', false, /\.(webp)$/)
  ),
};

const U = () => {
  const [selectedColor, setSelectedColor] = useState('alyaska');
  const [selectedName, setSelectedName] = useState('');
  const [selectedImages, setSelectedImages] = useState('');
    console.log(selectedColor)

  const handleColorSelect = color => {
    setSelectedColor(color);

    setSelectedImages(imagesDoor[color]);
  };

  useEffect(() => {
    const nameDoor = () => {
      setSelectedName(imagesDoor['alyaska']);
    };
    nameDoor();
  }, []);

  return (
    <>
      <div className={s.peregorodkibox}>
        <div className={s.mainBOx}>
          <h1 className={s.titleper}>МОДЕЛЬ U</h1>
          <div>
            <ul className={s.infolistper}>
              <li className={s.infoper}>
                Серія U представлена в широкому асортименті царгових
                збірно-розбірних дверей у новітньому фарбованому покритті в
                сучасних кольорах.
              </li>
            </ul>
          </div>
        </div>
        <div className={s.perslider}>
          <img src={Umain} alt="" className={s.imgMainPa} />
        </div>
      </div>
      <div className={s.bgHero}></div>
      <div className={s.seriasBox}>
        <div className={s.leftSide}>
          <div>
            <h3>СЕРІЇ</h3>
            <NavLink
              to="/door/catalog/pw"
              style={({ isActive }) => ({
                border: isActive
                  ? '3px solid rgb(8, 7, 7)'
                  : '1px solid rgb(8, 7, 7)',
              })}
              className={s.serias}
            >
              PW
            </NavLink>
            <NavLink
              to="/door/catalog/pm"
              style={({ isActive }) => ({
                border: isActive
                  ? '3px solid rgb(8, 7, 7)'
                  : '1px solid rgb(8, 7, 7)',
              })}
              className={s.serias}
            >
              PM
            </NavLink>
            <NavLink
              to="/door/catalog/p"
              style={({ isActive }) => ({
                border: isActive
                  ? '3px solid rgb(8, 7, 7)'
                  : '1px solid rgb(8, 7, 7)',
              })}
              className={s.serias}
            >
              P
            </NavLink>
            <NavLink
              to="/door/catalog/u"
              style={({ isActive }) => ({
                border: isActive
                  ? '3px solid rgb(8, 7, 7)'
                  : '1px solid rgb(8, 7, 7)',
              })}
              className={s.serias}
            >
              U
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
        </div>
        <div className={s.imgBox}>
          <Ucatalog images={selectedImages} nameDoor={selectedName} />
        </div>
      </div>
    </>
  );
};

export default U;
