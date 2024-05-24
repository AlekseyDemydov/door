import { NavLink } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import АGNcatalog from './AGNcatalog/AGNcatalog';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

import AGNmain from './img/AGNmain.jpg';


import black from './img/allDoor/color/black.jpg';
import gold from './img/allDoor/color/gold.jpg';
import grayNight from './img/allDoor/color/grayNight.jpg';
import silver from './img/allDoor/color/silver.jpg';
import white from './img/allDoor/color/white.jpg';

import b from './img/comp/color/b.jpg';
import br from './img/comp/color/br.jpg';
import gor from './img/comp/color/gor.jpg';
import ir from './img/comp/color/ir.jpg';
import mr from './img/comp/color/mr.jpg';
import yas from './img/comp/color/yas.jpg';

import lb from './img/glass/color/lb.jpg';
import pr from './img/glass/color/pr.png';
import lw from './img/glass/color/lw.jpg';
import z from './img/glass/color/z.png';

import s from './AGN.module.scss';

const imagesColor = {
  Black: black,
  Gold: gold,
  GrayNight: grayNight,
  Silver: silver,
  White: white,
};
const colors = {
  Black: "чорний матовий",
  Gold: "золото",
  GrayNight: "сіра ніч",
  Silver: "Срібло матове",
  White: "вайт",
};

const imagesComp = {
  b: b,
  br: br,
  gor: gor,
  ir: ir,
  mr: mr,
  yas: yas,
};
const ins = {
  b: 'бетон старий',
  br: 'бронза',
  gor: 'горіх',
  ir: "іржа",
  mr: "мармур",
  yas: "ясень гірний",
};

const imagesGlass = {
  lb: lb,
  pr: pr,
  lw: lw,
  z: z,
};

const gla = {
  lb: 'LACOBEL чорний лак',
  pr: 'ПРОЗОРЕ',
  lw: 'LACOBEL білий лак',
  z: 'ДЗЕРКАЛО',
};

const importAll = context => context.keys().map(context);

const imagesDoor = {
  Black: importAll(require.context('./img/allDoor/Black', false, /\.(png)$/)),
  Gold: importAll(require.context('./img/allDoor/Gold', false, /\.(png)$/)),
  GrayNight: importAll(require.context('./img/allDoor/GrayNight', false, /\.(png)$/)),
  Silver: importAll(require.context('./img/allDoor/Silver', false, /\.(png)$/)),
  White: importAll(
    require.context('./img/allDoor/White', false, /\.(png)$/)
  ),
};

const imagesCompb = {
  bPlusBlack: importAll(
    require.context('./img/comp/b/bPlusBlack', false, /\.(png)$/)
  ),
  bPlusGold: importAll(
    require.context('./img/comp/b/bPlusGold', false, /\.(png)$/)
  ),
  bPlusGrayNight: importAll(
    require.context('./img/comp/b/bPlusGrayNight', false, /\.(png)$/)
  ),
  bPlusSilver: importAll(
    require.context('./img/comp/b/bPlusSilver', false, /\.(png)$/)
  ),
  bPlusWhite: importAll(
    require.context('./img/comp/b/bPlusWhite', false, /\.(png)$/)
  ),
};

const imagesCompbr = {
  brPlusBlack: importAll(
    require.context('./img/comp/br/brPlusBlack', false, /\.(png)$/)
  ),
  brPlusGold: importAll(
    require.context('./img/comp/br/brPlusGold', false, /\.(png)$/)
  ),
  brPlusGrayNight: importAll(
    require.context('./img/comp/br/brPlusGrayNight', false, /\.(png)$/)
  ),
  brPlusSilver: importAll(
    require.context('./img/comp/br/brPlusSilver', false, /\.(png)$/)
  ),
  brPlusWhite: importAll(
    require.context('./img/comp/br/brPlusWhite', false, /\.(png)$/)
  ),
};

const imagesCompgor = {
  gorPlusBlack: importAll(
    require.context('./img/comp/gor/gorPlusBlack', false, /\.(png)$/)
  ),
  gorPlusGold: importAll(
    require.context('./img/comp/gor/gorPlusGold', false, /\.(png)$/)
  ),
  gorPlusGrayNight: importAll(
    require.context('./img/comp/gor/gorPlusGrayNight', false, /\.(png)$/)
  ),
  gorPlusSilver: importAll(
    require.context('./img/comp/gor/gorPlusSilver', false, /\.(png)$/)
  ),
  gorPlusWhite: importAll(
    require.context('./img/comp/gor/gorPlusWhite', false, /\.(png)$/)
  ),
};

const imagesCompir = {
  irPlusBlack: importAll(
    require.context('./img/comp/ir/irPlusBlack', false, /\.(png)$/)
  ),
  irPlusGold: importAll(
    require.context('./img/comp/ir/irPlusGold', false, /\.(png)$/)
  ),
  irPlusGrayNight: importAll(
    require.context('./img/comp/ir/irPlusGrayNight', false, /\.(png)$/)
  ),
  irPlusSilver: importAll(
    require.context('./img/comp/ir/irPlusSilver', false, /\.(png)$/)
  ),
  irPlusWhite: importAll(
    require.context('./img/comp/ir/irPlusWhite', false, /\.(png)$/)
  ),
};
const imagesCompmr = {
  mrPlusBlack: importAll(
    require.context('./img/comp/mr/mrPlusBlack', false, /\.(png)$/)
  ),
  mrPlusGold: importAll(
    require.context('./img/comp/mr/mrPlusGold', false, /\.(png)$/)
  ),
  mrPlusGrayNight: importAll(
    require.context('./img/comp/mr/mrPlusGrayNight', false, /\.(png)$/)
  ),
  mrPlusSilver: importAll(
    require.context('./img/comp/mr/mrPlusSilver', false, /\.(png)$/)
  ),
  mrPlusWhite: importAll(
    require.context('./img/comp/mr/mrPlusWhite', false, /\.(png)$/)
  ),
};
const imagesCompyas = {
  yasPlusBlack: importAll(
    require.context('./img/comp/yas/yasPlusBlack', false, /\.(png)$/)
  ),
  yasPlusGold: importAll(
    require.context('./img/comp/yas/yasPlusGold', false, /\.(png)$/)
  ),
  yasPlusGrayNight: importAll(
    require.context('./img/comp/yas/yasPlusGrayNight', false, /\.(png)$/)
  ),
  yasPlusSilver: importAll(
    require.context('./img/comp/yas/yasPlusSilver', false, /\.(png)$/)
  ),
  yasPlusWhite: importAll(
    require.context('./img/comp/yas/yasPlusWhite', false, /\.(png)$/)
  ),
};

const imagesGlasslb = {
  lbPlusBlack: importAll(
    require.context('./img/glass/lb/lbPlusBlack', false, /\.(png)$/)
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

const АGN = () => {
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

  const handleCompSelect = comp => {
    setSelectedDoor(comp);

    const key = `${comp}Plus${selectedColor}`;

    if (comp === 'b') {
      setSelectedImages(imagesCompb[key]);
    } else if (comp === 'br') {
      setSelectedImages(imagesCompbr[key]);
    } else if (comp === 'gor') {
      setSelectedImages(imagesCompgor[key]);
    }else if (comp === 'ir') {
      setSelectedImages(imagesCompir[key]);
    }else if (comp === 'mr') {
      setSelectedImages(imagesCompmr[key]);
    }else if (comp === 'yas') {
      setSelectedImages(imagesCompyas[key]);
    }
    
  };

  const handleGlassSelect = glass => {
    setSelectedDoor(glass);

    const key = `${glass}Plus${selectedColor}`;

    if (glass === 'lb') {
      setSelectedImages(imagesGlasslb[key]);
    } else if (glass === 'pr') {
      setSelectedImages(imagesGlasspr[key]);
    }  else if (glass === 'z') {
      setSelectedImages(imagesGlassz[key]);
    } else if (glass === 'lw') {
      setSelectedImages(imagesGlasslw[key]);
    }
  };

  return (
    <>
      <div className={s.peregorodkibox}>
        <div className={s.mainBOx}>
          <h1 className={s.titleper}>МОДЕЛЬ АGN</h1>
          <div>
            <ul className={s.infolistper}>
              <li className={s.infoper}>
                Двері AGN – це витвір мистецтва та вишуканості. В інтер'єрному
                просторі AGN це більше, ніж просто функціональний елемент, вони
                доповнюють і формують естетичне зміст інтер'єру.
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
        <div>
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
            <h3>КОМПОЗИТНІ ПАНЕЛІ</h3>
            {Object.keys(imagesComp).map((comp, index) => (
              <OverlayTrigger
                key={index}
                placement="top"
                delay={{ show: 250, hide: 400 }}
                overlay={<Tooltip>{ins[comp]}</Tooltip>}
              >
                <img
                  className={s.imgCoolor}
                  src={imagesComp[comp]}
                  alt=""
                  onClick={() => handleCompSelect(comp)}
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
          <АGNcatalog images={selectedImages} nameDoor={selectedName} />
        </div>
      </div>
    </>
  );
};

export default АGN;
