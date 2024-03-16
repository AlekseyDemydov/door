import { NavLink } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Pcatalog from './Pcatalog/Pcatalog';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

import Pmain from './img/Рmain.jpg';

import creem from './img/allDoor/color/creem.jpg';
import black from './img/allDoor/color/black.jpg';
import Grafit from './img/allDoor/color/Grafit.jpg';
import light_gray from './img/allDoor/color/light_gray.jpg';
import Perlamutr_Belyy from './img/allDoor/color/Perlamutr_Belyy.jpg';
import Perlamutr_Bronza from './img/allDoor/color/Perlamutr_Bronza.jpg';
import Perlamutr_Zoloto from './img/allDoor/color/Perlamutr_Zoloto.jpg';
import white from './img/allDoor/color/white.jpg';

import mt from './img/glass/color/mt.jpg';
import pr from './img/glass/color/pr.jpg';

import s from './P.module.scss';

const imagesColor = {
  Black: black,
  Creem: creem,
  Grafit: Grafit,
  LiteGray: light_gray,
  PerWhite: Perlamutr_Belyy,
  Bronze: Perlamutr_Bronza,
  Gold: Perlamutr_Zoloto,
  White: white,
};
const colors = {
  Black: 'Чорний',
  Creem: 'Крем',
  Grafit: 'Графіт',
  LiteGray: 'лайт грей',
  PerWhite: 'Перламутр білий',
  Bronze: 'перламутр бронза',
  Gold: 'перламутр золото',
  White: 'Білий',
};

const imagesGlass = {
  mt: mt,
  pr: pr,
};

const gla = {
  mt: 'матовий',
  pr: 'прозорий',
};

const importAll = context => context.keys().map(context);

const imagesDoor = {
  Black: importAll(require.context('./img/allDoor/black', false, /\.(png)$/)),
  Creem: importAll(require.context('./img/allDoor/creem', false, /\.(png)$/)),
  Grafit: importAll(require.context('./img/allDoor/Grafit', false, /\.(png)$/)),
  White: importAll(require.context('./img/allDoor/white', false, /\.(png)$/)),
  LiteGray: importAll(
    require.context('./img/allDoor/litegrey', false, /\.(png)$/)
  ),
  PerWhite: importAll(
    require.context('./img/allDoor/perwhite', false, /\.(png)$/)
  ),
  Bronze: importAll(
    require.context('./img/allDoor/perbronze', false, /\.(png)$/)
  ),
  Gold: importAll(require.context('./img/allDoor/pergold', false, /\.(png)$/)),
};

const imagesGlassmt = {
  mtPlusBlack: importAll(
    require.context('./img/glass/mt/mtPlusBlack', false, /\.(png)$/)
  ),
  mtPlusBronze: importAll(
    require.context('./img/glass/mt/mtPlusPerBronze', false, /\.(png)$/)
  ),
  mtPlusCreem: importAll(
    require.context('./img/glass/mt/mtPlusCreem', false, /\.(png)$/)
  ),
  mtPlusGold: importAll(
    require.context('./img/glass/mt/mtPlusPerGold', false, /\.(png)$/)
  ),
  mtPlusGrafit: importAll(
    require.context('./img/glass/mt/mtPlusGrafit', false, /\.(png)$/)
  ),
  mtPlusLiteGray: importAll(
    require.context('./img/glass/mt/mtPlusLiteGray', false, /\.(png)$/)
  ),
  mtPlusPerWhite: importAll(
    require.context('./img/glass/mt/mtPlusPerWhite', false, /\.(png)$/)
  ),
  mtPlusWhite: importAll(
    require.context('./img/glass/mt/mtPlusWhite', false, /\.(png)$/)
  ),
};

const imagesGlasspr = {
  prPlusBlack: importAll(
    require.context('./img/glass/pr/prPlusBlack', false, /\.(png)$/)
  ),
  prPlusBronze: importAll(
    require.context('./img/glass/pr/prPlusPerBronze', false, /\.(png)$/)
  ),
  prPlusCreem: importAll(
    require.context('./img/glass/pr/prPlusCreem', false, /\.(png)$/)
  ),
  prPlusGold: importAll(
    require.context('./img/glass/pr/prPlusPerGold', false, /\.(png)$/)
  ),
  prPlusGrafit: importAll(
    require.context('./img/glass/pr/prPlusGrafit', false, /\.(png)$/)
  ),
  prPlusLiteGray: importAll(
    require.context('./img/glass/pr/prPlusLiteGray', false, /\.(png)$/)
  ),
  prPlusPerWhite: importAll(
    require.context('./img/glass/pr/prPlusPerWhite', false, /\.(png)$/)
  ),
  prPlusWhite: importAll(
    require.context('./img/glass/pr/prPlusWhite', false, /\.(png)$/)
  ),
};

const P = () => {
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
    }
  };

  return (
    <>
      <div className={s.peregorodkibox}>
        <div className={s.mainBOx}>
          <h1 className={s.titleper}>МОДЕЛЬ P</h1>
          <div>
            <ul className={s.infolistper}>
              <li className={s.infoper}>
                Модельний ряд пропонує вибір царгових дверей як у класичному
                стилі, так і в сучасному виконанні.
              </li>
            </ul>
          </div>
        </div>
        <div className={s.perslider}>
          <img src={Pmain} alt="" className={s.imgMainPa} />
        </div>
      </div>
      <div className={s.bgHero}></div>
      <div className={s.seriasBox}>
        <div className={s.leftSide}>
          <div>
            <h3>СЕРІЇ</h3>
            <NavLink to="/door/catalog/pw" style={({isActive})=>({border: isActive ? '3px solid rgb(8, 7, 7)':'1px solid rgb(8, 7, 7)'})} className={s.serias}>
              PW
            </NavLink>
            <NavLink to="/door/catalog/pm" style={({isActive})=>({border: isActive ? '3px solid rgb(8, 7, 7)':'1px solid rgb(8, 7, 7)'})} className={s.serias}>
              PM
            </NavLink>
            <NavLink to="/door/catalog/p" style={({isActive})=>({border: isActive ? '3px solid rgb(8, 7, 7)':'1px solid rgb(8, 7, 7)'})} className={s.serias}>
              P
            </NavLink>
            <NavLink to="/door/catalog/u" style={({isActive})=>({border: isActive ? '3px solid rgb(8, 7, 7)':'1px solid rgb(8, 7, 7)'})} className={s.serias}>
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
          <Pcatalog images={selectedImages} nameDoor={selectedName} />
        </div>
      </div>
    </>
  );
};

export default P;
