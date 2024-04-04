import { NavLink } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import AGKcatalog from './AGKcatalog/AGKcatalog';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

import AGKmain from './img/AGKmain.jpg';

import lbb from './img/allDoor/color/lbb.png';
import lbw from './img/allDoor/color/lbw.png';
import mtb from './img/allDoor/color/mtb.jpg';
import mtgray from './img/allDoor/color/mtgray.jpg';
import prb from './img/allDoor/color/prb.jpg';
import prgray from './img/allDoor/color/prgray.jpg';
import tb from './img/allDoor/color/tb.jpg';
import tgray from './img/allDoor/color/tgray.jpg';



import s from './AGK.module.scss';

const imagesColor = {
  lbb: lbb,
  lbw: lbw,
  mtb: mtb,
  mtgray: mtgray,
  prb: prb,
  prgray: prgray,
  tb: tb,
  tgray: tgray,
};
const colors = {
  lbb: 'LACOBEL чорний лак',
  lbw: 'LACOBEL білий лак',
  mtb: 'матове скло+чорний прокрас',
  mtgray: 'матове скло+сірий прокрас',
  prb: 'прозоре скло+чорний прокрас',
  prgray: 'прозоре скло+сірий прокрас',
  tb: 'тоноване скло+чорний прокрас',
  tgray: 'тоноване скло+сірий прокрас',
};



const importAll = context => context.keys().map(context);

const imagesDoor = {
  lbb: importAll(require.context('./img/allDoor/lbb', false, /\.(png)$/)),
  lbw: importAll(require.context('./img/allDoor/lbw', false, /\.(png)$/)),
  mtb: importAll(require.context('./img/allDoor/mtb', false, /\.(png)$/)),
  mtgray: importAll(
    require.context('./img/allDoor/mtgray', false, /\.(png)$/)
  ),
  prb: importAll(require.context('./img/allDoor/prb', false, /\.(png)$/)),
  prgray: importAll(require.context('./img/allDoor/prgray', false, /\.(png)$/)),
  tb: importAll(require.context('./img/allDoor/tb', false, /\.(png)$/)),
  tgray: importAll(require.context('./img/allDoor/tgray', false, /\.(png)$/)),
};


const AGK = () => {
  const [selectedColor, setSelectedColor] = useState('Black');
  const [selectedName, setSelectedName] = useState('');
  const [selectedImages, setSelectedImages] = useState('');
  const [selectedDoor, setSelectedDoor] = useState(null);
  console.log(selectedDoor);
  console.log(selectedColor);
  console.log(setSelectedDoor);
  // console.log(setSelectedColor);

  const handleColorSelect = color => {
    setSelectedColor(color);

    setSelectedImages(imagesDoor[color]);
  };

  useEffect(() => {
    const nameDoor = () => {
      setSelectedName(imagesDoor['lbb']);
    };
    nameDoor();
  }, []);

 

  return (
    <>
      <div className={s.peregorodkibox}>
        <div className={s.mainBOx}>
          <h1 className={s.titleper}>МОДЕЛЬ AG</h1>
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
          <img src={AGKmain} alt="" className={s.imgMainPa} />
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
            <h3>СКЛО</h3>
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
          <AGKcatalog images={selectedImages} nameDoor={selectedName} />
        </div>
      </div>
    </>
  );
};

export default AGK;
