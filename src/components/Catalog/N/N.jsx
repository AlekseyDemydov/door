import { NavLink } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Ncatalog from './Ncatalog/Ncatalog';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

import Nmain from './img/Nmain.jpeg';

import dk from './img/allDoor/color/dk.jpg';
import ds from './img/allDoor/color/ds.jpg';
import dt from './img/allDoor/color/dt.jpg';
import ks from './img/allDoor/color/ks.jpg';

import mt from './img/glass/color/mt.jpg';
import pr from './img/glass/color/pr.png';
import gr from './img/glass/color/gr.jpg';
import lb from './img/glass/color/lb.jpg';
import z from './img/glass/color/z.png';

import s from './N.module.scss';

const imagesColor = {
  dk: dk,
  ds: ds,
  dt: dt,
  ks: ks,
};
const colors = {
  dk: 'дуб карамель',
  ds: 'дуб сонома',
  dt: 'дуб тобакко',
  ks: 'каштан світлий',
};

const imagesGlass = {
  mt: mt,
  pr: pr,
  gr: gr,
  lb: lb,
  z: z,
};

const gla = {
  mt: 'матове',
  pr: 'ПРОЗОРЕ',
  gr: 'графіт',
  lb: 'LACOBEL чорний лак',
  z: 'ДЗЕРКАЛО',
};

const importAll = context => context.keys().map(context);

const imagesDoor = {
  dk: importAll(require.context('./img/allDoor/DK', false, /\.(png)$/)),
  ds: importAll(require.context('./img/allDoor/DS', false, /\.(png)$/)),
  ks: importAll(require.context('./img/allDoor/KS', false, /\.(png)$/)),
  dt: importAll(
    require.context('./img/allDoor/DT', false, /\.(png)$/)
  ),
};

const imagesGlassmt = {
  mtPlusdk: importAll(
    require.context('./img/glass/mt/mtPlusDK', false, /\.(png)$/)
  ),
  mtPlusds: importAll(
    require.context('./img/glass/mt/mtPlusDS', false, /\.(png)$/)
  ),
  mtPlusks: importAll(
    require.context('./img/glass/mt/mtPlusKS', false, /\.(png)$/)
  ),
  mtPlusdt: importAll(
    require.context('./img/glass/mt/mtPlusDT', false, /\.(png)$/)
  ),
};

const imagesGlasspr = {
  prPlusdk: importAll(
    require.context('./img/glass/pr/prPlusDK', false, /\.(png)$/)
  ),
  prPlusds: importAll(
    require.context('./img/glass/pr/prPlusDS', false, /\.(png)$/)
  ),
  prPlusks: importAll(
    require.context('./img/glass/pr/prPlusKS', false, /\.(png)$/)
  ),
  prPlusdt: importAll(
    require.context('./img/glass/pr/prPlusDT', false, /\.(png)$/)
  ),
};
const imagesGlassgr = {
  grPlusdk: importAll(
    require.context('./img/glass/gr/grPlusDK', false, /\.(png)$/)
  ),
  grPlusds: importAll(
    require.context('./img/glass/gr/grPlusDS', false, /\.(png)$/)
  ),
  grPlusks: importAll(
    require.context('./img/glass/gr/grPlusKS', false, /\.(png)$/)
  ),
  grPlusdt: importAll(
    require.context('./img/glass/gr/grPlusDT', false, /\.(png)$/)
  ),
};

const imagesGlasslb = {
  lbPlusdk: importAll(
    require.context('./img/glass/lb/lbPlusDK', false, /\.(png)$/)
  ),
  lbPlusds: importAll(
    require.context('./img/glass/lb/lbPlusDS', false, /\.(png)$/)
  ),
  lbPlusks: importAll(
    require.context('./img/glass/lb/lbPlusKS', false, /\.(png)$/)
  ),
  lbPlusdt: importAll(
    require.context('./img/glass/lb/lbPlusDT', false, /\.(png)$/)
  ),
};

const imagesGlassz = {
  zPlusdk: importAll(
    require.context('./img/glass/z/zPlusDK', false, /\.(png)$/)
  ),
  zPlusds: importAll(
    require.context('./img/glass/z/zPlusDS', false, /\.(png)$/)
  ),
  zPlusks: importAll(
    require.context('./img/glass/z/zPlusKS', false, /\.(png)$/)
  ),
  zPlusdt: importAll(
    require.context('./img/glass/z/zPlusDT', false, /\.(png)$/)
  ),
};

const N = () => {
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
      setSelectedName(imagesDoor['dk']);
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
    } else if (glass === 'gr') {
      setSelectedImages(imagesGlassgr[key]);
    } else if (glass === 'lb') {
      setSelectedImages(imagesGlasslb[key]);
    } else if (glass === 'z') {
      setSelectedImages(imagesGlassz[key]);
    }
  };

  return (
    <>
      <div className={s.peregorodkibox}>
        <div className={s.mainBOx}>
          <h1 className={s.titleper}>МОДЕЛЬ N</h1>
          <div>
            <ul className={s.infolistper}>
              <li className={s.infoper}>
                Серія N – колекція з деревними покриттями. Модельний ряд
                пропонує вибір царгових дверей як у класичному стилі, так і в
                сучасному виконанні.
              </li>
            </ul>
          </div>
        </div>
        <div className={s.perslider}>
          <img src={Nmain} alt="" className={s.imgMainPa} />
        </div>
      </div>
      <div className={s.bgHero}></div>
      <div className={s.seriasBox}>
        <div className={s.leftSide}>
          <div>
            <h3>СЕРІЇ</h3>
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
          <Ncatalog images={selectedImages} nameDoor={selectedName} />
        </div>
      </div>
    </>
  );
};

export default N;
