import { NavLink } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import NAcatalog from './NAcatalog/NAcatalog';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';


import dk from './img/allDoor/color/dk.jpg';
import ds from './img/allDoor/color/ds.jpg';
import dt from './img/allDoor/color/dt.jpg';
import ks from './img/allDoor/color/ks.jpg';

import black from './img/prof/color/black.jpg';
import silver from './img/prof/color/silver.jpg';

import lb from './img/glass/color/lb.jpg';
import lw from './img/glass/color/lw.jpg';
import z from './img/glass/color/z.png';

import s from './NA.module.scss';

const imagesColor = {
  dk: dk,
  ds: ds,
  dt: dt,
  ks: ks,
};
const colors = {
  dk: "дуб карамель",
  ds: "дуб сонома",
  dt: "дуб тобакко",
  ks: "каштан світлий",
};

const imagesProf = {
  black: black,
  silver: silver,
};
const ins = {
  black: 'чорний матовий',
  silver: 'срібло',
};

const imagesGlass = {
  lb: lb,
  lw: lw,
  z: z,
};

const gla = {
  lb: 'LACOBEL чорний лак',
  lw: 'LACOBEL білий лак',
  z: 'ДЗЕРКАЛО',
};

const importAll = context => context.keys().map(context);

const imagesDoor = {
  dk: importAll(require.context('./img/allDoor/dk', false, /\.(png)$/)),
  ds: importAll(require.context('./img/allDoor/ds', false, /\.(png)$/)),
  dt: importAll(require.context('./img/allDoor/dt', false, /\.(png)$/)),
  ks: importAll(require.context('./img/allDoor/ks', false, /\.(png)$/)),
};

const imagesProfblack = {
  blackPlusdk: importAll(require.context('./img/prof/black/blackPlusdk', false, /\.(png)$/)),
  blackPlusds: importAll(require.context('./img/prof/black/blackPlusds', false, /\.(png)$/)),
  blackPlusdt: importAll(require.context('./img/prof/black/blackPlusdt', false, /\.(png)$/)),
  blackPlusks: importAll(require.context('./img/prof/black/blackPlusks', false, /\.(png)$/)),
};

const imagesProfsilver = {
  silverPlusdk: importAll(require.context('./img/prof/silver/silverPlusdk', false, /\.(png)$/)),
  silverPlusds: importAll(require.context('./img/prof/silver/silverPlusds', false, /\.(png)$/)),
  silverPlusdt: importAll(require.context('./img/prof/silver/silverPlusdt', false, /\.(png)$/)),
  silverPlusks: importAll(require.context('./img/prof/silver/silverPlusks', false, /\.(png)$/)),
};

const imagesGlasslb = {
  lbPlusdk: importAll(require.context('./img/glass/lb/lbPlusdk', false, /\.(png)$/)),
  lbPlusds: importAll(require.context('./img/glass/lb/lbPlusds', false, /\.(png)$/)),
  lbPlusdt: importAll(require.context('./img/glass/lb/lbPlusdt', false, /\.(png)$/)),
  lbPlusks: importAll(require.context('./img/glass/lb/lbPlusks', false, /\.(png)$/)),
};


const imagesGlasslw = {
  lwPlusdk: importAll(require.context('./img/glass/lw/lwPlusdk', false, /\.(png)$/)),
  lwPlusds: importAll(require.context('./img/glass/lw/lwPlusds', false, /\.(png)$/)),
  lwPlusdt: importAll(require.context('./img/glass/lw/lwPlusdt', false, /\.(png)$/)),
  lwPlusks: importAll(require.context('./img/glass/lw/lwPlusks', false, /\.(png)$/)),
};

const imagesGlassz = {
  zPlusdk: importAll(require.context('./img/glass/z/zPlusdk', false, /\.(png)$/)),
  zPlusds: importAll(require.context('./img/glass/z/zPlusds', false, /\.(png)$/)),
  zPlusdt: importAll(require.context('./img/glass/z/zPlusdt', false, /\.(png)$/)),
  zPlusks: importAll(require.context('./img/glass/z/zPlusks', false, /\.(png)$/)),
};

const NA = () => {
  const [selectedColor, setSelectedColor] = useState('dk');
  const [selectedName, setSelectedName] = useState('');
  const [selectedImages, setSelectedImages] = useState('');
  const [selectedDoor, setSelectedDoor] = useState(null);
  console.log(selectedDoor);

  const handleColorSelect = color => {
    setSelectedColor(color);

    setSelectedImages(imagesDoor[color]);
  };

  useEffect(() => {
    handleColorSelect('ds');
    const nameDoor = () => {
      setSelectedName(imagesDoor['dk']);
    };
    nameDoor();
  }, []);

  const handleProfSelect = prof => {
    setSelectedDoor(prof);

    const key = `${prof}Plus${selectedColor}`;

    if (prof === 'black') {
      setSelectedImages(imagesProfblack[key]);
    } else if (prof === 'silver') {
      setSelectedImages(imagesProfsilver[key]);
    } 
    
  };

  const handleGlassSelect = glass => {
    setSelectedDoor(glass);

    const key = `${glass}Plus${selectedColor}`;

    if (glass === 'lb') {
      setSelectedImages(imagesGlasslb[key]);
    } else if (glass === 'z') {
      setSelectedImages(imagesGlassz[key]);
    } else if (glass === 'lw') {
      setSelectedImages(imagesGlasslw[key]);
    }
  };

  return (
    <>
     
      <div className={s.seriasBox}>
        <div>
        <div>
            <h3>СЕРІЇ</h3>
            <div className={s.nameSerias}>
            <NavLink
              to="/door/catalog/n"
              style={({ isActive }) => ({
                border: isActive
                  ? '3px solid rgb(8, 7, 7)'
                  : '1px solid rgb(8, 7, 7)',
              })}
              className={s.serias}
            >
              N
            </NavLink>
            <NavLink
              to="/door/catalog/na"
              style={({ isActive }) => ({
                border: isActive
                  ? '3px solid rgb(8, 7, 7)'
                  : '1px solid rgb(8, 7, 7)',
              })}
              className={s.serias}
            >
              NA
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
            <h3>ПРОФІЛЬ</h3>
            {Object.keys(imagesProf).map((prof, index) => (
              <OverlayTrigger
                key={index}
                placement="top"
                delay={{ show: 250, hide: 400 }}
                overlay={<Tooltip>{ins[prof]}</Tooltip>}
              >
                <img
                  className={s.imgCoolor}
                  src={imagesProf[prof]}
                  alt=""
                  onClick={() => handleProfSelect(prof)}
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
          <NAcatalog images={selectedImages} nameDoor={selectedName} />
        </div>
      </div>
    </>
  );
};

export default NA;
