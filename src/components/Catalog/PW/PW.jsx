import { NavLink } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import PWcatalog from './PWcatalog/PWcatalog';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

import PWmain from './img/PWmain.webp';

import creem from './img/allDoor/color/creem.jpg';
import black from './img/allDoor/color/black.jpg';
import Grafit from './img/allDoor/color/Grafit.jpg';
import light_gray from './img/allDoor/color/light_gray.jpg';
import Perlamutr_Belyy from './img/allDoor/color/Perlamutr_Belyy.jpg';
import Perlamutr_Bronza from './img/allDoor/color/Perlamutr_Bronza.jpg';
import Perlamutr_Zoloto from './img/allDoor/color/Perlamutr_Zoloto.jpg';
import white from './img/allDoor/color/white.jpg';

import ds from './img/inserDoor/insert/Dub-Sonoma.jpg';
import dt from './img/inserDoor/insert/Dub_tobaco.jpg';
import ks from './img/inserDoor/insert/Kashtan_Svetlyy.jpg';

import lb from './img/glass/color/lakobelBlack.jpg';
import lp from './img/glass/color/lakobelPer.jpg';
import ls from './img/glass/color/lakobelSilver.jpg';
import lw from './img/glass/color/lakobelWhite.jpg';
import z from './img/glass/color/zerkalo.jpg';

import s from './PW.module.scss';

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

const imagesInsert = {
  ds: ds,
  dt: dt,
  ks: ks,
};
const ins = {
  ds: 'дуб санома',
  dt: 'дуб тобакко',
  ks: 'каштан світлий',
};

const imagesGlass = {
  lb: lb,
  lp: lp,
  ls: ls,
  lw: lw,
  z: z,
};

const gla = {
  lb: 'LACOBEL чорний',
  lp: 'LACOBEL перламутр',
  ls: 'LACOBEL срібло',
  lw: 'LACOBEL білий',
  z: 'ДЗЕРКАЛО',
};

const importAll = context => context.keys().map(context);

const imagesDoor = {
  Black: importAll(require.context('./img/allDoor/black', false, /\.(png)$/)),
  Creem: importAll(require.context('./img/allDoor/creem', false, /\.(png)$/)),
  Grafit: importAll(require.context('./img/allDoor/Grafit', false, /\.(png)$/)),
  White: importAll(require.context('./img/allDoor/white', false, /\.(png)$/)),
  LiteGray: importAll(require.context('./img/allDoor/litegrey', false, /\.(png)$/)),
  PerWhite: importAll(
    require.context('./img/allDoor/perwhite', false, /\.(png)$/)
  ),
  Bronze: importAll(
    require.context('./img/allDoor/perbronze', false, /\.(png)$/)
  ),
  Gold: importAll(require.context('./img/allDoor/pergold', false, /\.(png)$/)),
};

const imagesInsertds = {
  dsPlusBlack: importAll(
    require.context('./img/inserDoor/ds/dsPlusBlack', false, /\.(png)$/)
  ),
  dsPlusBronze: importAll(
    require.context('./img/inserDoor/ds/dsPlusBronze', false, /\.(png)$/)
  ),
  dsPlusCreem: importAll(
    require.context('./img/inserDoor/ds/dsPlusCreem', false, /\.(png)$/)
  ),
  dsPlusGold: importAll(
    require.context('./img/inserDoor/ds/dsPlusGold', false, /\.(png)$/)
  ),
  dsPlusGrafit: importAll(
    require.context('./img/inserDoor/ds/dsPlusGrafit', false, /\.(png)$/)
  ),
  dsPlusLiteGray: importAll(
    require.context('./img/inserDoor/ds/dsPlusLiteGray', false, /\.(png)$/)
  ),
  dsPlusPerWhite: importAll(
    require.context('./img/inserDoor/ds/dsPlusPerWhite', false, /\.(png)$/)
  ),
  dsPlusWhite: importAll(
    require.context('./img/inserDoor/ds/dsPlusWhite', false, /\.(png)$/)
  ),
};

const imagesInsertdt = {
  dtPlusBlack: importAll(
    require.context('./img/inserDoor/dt/dtPlusBlack', false, /\.(png)$/)
  ),
  dtPlusBronze: importAll(
    require.context('./img/inserDoor/dt/dtPlusBronze', false, /\.(png)$/)
  ),
  dtPlusCreem: importAll(
    require.context('./img/inserDoor/dt/dtPlusCreem', false, /\.(png)$/)
  ),
  dtPlusGold: importAll(
    require.context('./img/inserDoor/dt/dtPlusGold', false, /\.(png)$/)
  ),
  dtPlusGrafit: importAll(
    require.context('./img/inserDoor/dt/dtPlusGrafit', false, /\.(png)$/)
  ),
  dtPlusLiteGray: importAll(
    require.context('./img/inserDoor/dt/dtPlusLiteGray', false, /\.(png)$/)
  ),
  dtPlusPerWhite: importAll(
    require.context('./img/inserDoor/dt/dtPlusPerWhite', false, /\.(png)$/)
  ),
  dtPlusWhite: importAll(
    require.context('./img/inserDoor/dt/dtPlusWhite', false, /\.(png)$/)
  ),
};

const imagesInsertks = {
  ksPlusBlack: importAll(
    require.context('./img/inserDoor/ks/ksPlusBlack', false, /\.(png)$/)
  ),
  ksPlusBronze: importAll(
    require.context('./img/inserDoor/ks/ksPlusBronze', false, /\.(png)$/)
  ),
  ksPlusCreem: importAll(
    require.context('./img/inserDoor/ks/ksPlusCreem', false, /\.(png)$/)
  ),
  ksPlusGold: importAll(
    require.context('./img/inserDoor/ks/ksPlusGold', false, /\.(png)$/)
  ),
  ksPlusGrafit: importAll(
    require.context('./img/inserDoor/ks/ksPlusGrafit', false, /\.(png)$/)
  ),
  ksPlusLiteGray: importAll(
    require.context('./img/inserDoor/ks/ksPlusLiteGray', false, /\.(png)$/)
  ),
  ksPlusPerWhite: importAll(
    require.context('./img/inserDoor/ks/ksPlusPerWhite', false, /\.(png)$/)
  ),
  ksPlusWhite: importAll(
    require.context('./img/inserDoor/ks/ksPlusWhite', false, /\.(png)$/)
  ),
};
const imagesGlasslb = {
  lbPlusBlack: importAll(
    require.context('./img/glass/lb/lbPlusBlack', false, /\.(png)$/)
  ),
  lbPlusBronze: importAll(
    require.context('./img/glass/lb/lbPlusBronze', false, /\.(png)$/)
  ),
  lbPlusCreem: importAll(
    require.context('./img/glass/lb/lbPlusCreem', false, /\.(png)$/)
  ),
  lbPlusGold: importAll(
    require.context('./img/glass/lb/lbPlusGold', false, /\.(png)$/)
  ),
  lbPlusGrafit: importAll(
    require.context('./img/glass/lb/lbPlusGrafit', false, /\.(png)$/)
  ),
  lbPlusLiteGray: importAll(
    require.context('./img/glass/lb/lbPlusLiteGray', false, /\.(png)$/)
  ),
  lbPlusPerWhite: importAll(
    require.context('./img/glass/lb/lbPlusPerWhite', false, /\.(png)$/)
  ),
  lbPlusWhite: importAll(
    require.context('./img/glass/lb/lbPlusWhite', false, /\.(png)$/)
  ),
};

const imagesGlasslp = {
  lpPlusBlack: importAll(
    require.context('./img/glass/lp/lpPlusBlack', false, /\.(png)$/)
  ),
  lpPlusBronze: importAll(
    require.context('./img/glass/lp/lpPlusBronze', false, /\.(png)$/)
  ),
  lpPlusCreem: importAll(
    require.context('./img/glass/lp/lpPlusCreem', false, /\.(png)$/)
  ),
  lpPlusGold: importAll(
    require.context('./img/glass/lp/lpPlusGold', false, /\.(png)$/)
  ),
  lpPlusGrafit: importAll(
    require.context('./img/glass/lp/lpPlusGrafit', false, /\.(png)$/)
  ),
  lpPlusLiteGray: importAll(
    require.context('./img/glass/lp/lpPlusLiteGray', false, /\.(png)$/)
  ),
  lpPlusPerWhite: importAll(
    require.context('./img/glass/lp/lpPlusPerWhite', false, /\.(png)$/)
  ),
  lpPlusWhite: importAll(
    require.context('./img/glass/lp/lpPlusWhite', false, /\.(png)$/)
  ),
};
const imagesGlassls = {
  lsPlusBlack: importAll(
    require.context('./img/glass/ls/lsPlusBlack', false, /\.(png)$/)
  ),
  lsPlusBronze: importAll(
    require.context('./img/glass/ls/lsPlusBronze', false, /\.(png)$/)
  ),
  lsPlusCreem: importAll(
    require.context('./img/glass/ls/lsPlusCreem', false, /\.(png)$/)
  ),
  lsPlusGold: importAll(
    require.context('./img/glass/ls/lsPlusGold', false, /\.(png)$/)
  ),
  lsPlusGrafit: importAll(
    require.context('./img/glass/ls/lsPlusGrafit', false, /\.(png)$/)
  ),
  lsPlusLiteGray: importAll(
    require.context('./img/glass/ls/lsPlusLiteGray', false, /\.(png)$/)
  ),
  lsPlusPerWhite: importAll(
    require.context('./img/glass/ls/lsPlusPerWhite', false, /\.(png)$/)
  ),
  lsPlusWhite: importAll(
    require.context('./img/glass/ls/lsPlusWhite', false, /\.(png)$/)
  ),
};

const imagesGlasslw = {
  lwPlusBlack: importAll(
    require.context('./img/glass/lw/lwPlusBlack', false, /\.(png)$/)
  ),
  lwPlusBronze: importAll(
    require.context('./img/glass/lw/lwPlusBronze', false, /\.(png)$/)
  ),
  lwPlusCreem: importAll(
    require.context('./img/glass/lw/lwPlusCreem', false, /\.(png)$/)
  ),
  lwPlusGold: importAll(
    require.context('./img/glass/lw/lwPlusGold', false, /\.(png)$/)
  ),
  lwPlusGrafit: importAll(
    require.context('./img/glass/lw/lwPlusGrafit', false, /\.(png)$/)
  ),
  lwPlusLiteGray: importAll(
    require.context('./img/glass/lw/lwPlusLiteGray', false, /\.(png)$/)
  ),
  lwPlusPerWhite: importAll(
    require.context('./img/glass/lw/lwPlusPerWhite', false, /\.(png)$/)
  ),
  lwPlusWhite: importAll(
    require.context('./img/glass/lw/lwPlusWhite', false, /\.(png)$/)
  ),
};

const imagesGlassz = {
  zPlusBlack: importAll(
    require.context('./img/glass/z/zPlusBlack', false, /\.(png)$/)
  ),
  zPlusBronze: importAll(
    require.context('./img/glass/z/zPlusBronze', false, /\.(png)$/)
  ),
  zPlusCreem: importAll(
    require.context('./img/glass/z/zPlusCreem', false, /\.(png)$/)
  ),
  zPlusGold: importAll(
    require.context('./img/glass/z/zPlusGold', false, /\.(png)$/)
  ),
  zPlusGrafit: importAll(
    require.context('./img/glass/z/zPlusGrafit', false, /\.(png)$/)
  ),
  zPlusLiteGray: importAll(
    require.context('./img/glass/z/zPlusLiteGray', false, /\.(png)$/)
  ),
  zPlusPerWhite: importAll(
    require.context('./img/glass/z/zPlusPerWhite', false, /\.(png)$/)
  ),
  zPlusWhite: importAll(
    require.context('./img/glass/z/zPlusWhite', false, /\.(png)$/)
  ),
};

const PW = () => {
  const [selectedColor, setSelectedColor] = useState('white');
  const [selectedName, setSelectedName] = useState('');
  const [selectedImages, setSelectedImages] = useState('');
  const [selectedDoor, setSelectedDoor] = useState(null);
  console.log(selectedDoor);

  const handleColorSelect = color => {
    setSelectedColor(color);

    setSelectedImages(imagesDoor[color]);
  };

  useEffect(() => {
    handleColorSelect('White');
    const nameDoor = () => {
      setSelectedName(imagesDoor['White']);
    };
    nameDoor();
  }, []);

  const handleInsertSelect = insert => {
    setSelectedDoor(insert);

    const key = `${insert}Plus${selectedColor}`;

    if (insert === 'ds') {
      setSelectedImages(imagesInsertds[key]);
    } else if (insert === 'dt') {
      setSelectedImages(imagesInsertdt[key]);
    } else if (insert === 'ks') {
      setSelectedImages(imagesInsertks[key]);
    }
  };

  const handleGlassSelect = glass => {
    setSelectedDoor(glass);

    const key = `${glass}Plus${selectedColor}`;

    if (glass === 'lb') {
      setSelectedImages(imagesGlasslb[key]);
    } else if (glass === 'lp') {
      setSelectedImages(imagesGlasslp[key]);
    } else if (glass === 'ls') {
      setSelectedImages(imagesGlassls[key]);
    } else if (glass === 'z') {
      setSelectedImages(imagesGlassz[key]);
    } else if (glass === 'lw') {
      setSelectedImages(imagesGlasslw[key]);
    }
  };

  return (
    <>
      <div className={s.peregorodkibox}>
        <div className={s.mainBOx}>
          <h1 className={s.titleper}>МОДЕЛЬ PW</h1>
          <div>
            <ul className={s.infolistper}>
              <li className={s.infoper}>
                Двері в ногу з часом, із сучасним дизайном та виробничими
                інноваціями, здатні задовольнити високі естетичні запити. Двері
                розширюють можливості сприйняття покриття, дизайну та кольору.
              </li>
            </ul>
          </div>
        </div>
        <div className={s.perslider}>
          <img src={PWmain} alt="" className={s.imgMainPa} />
        </div>
      </div>
      <div className={s.bgHero}></div>
      <div className={s.seriasBox}>
        <div>
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
            <h3>ВСТАВКА</h3>
            {Object.keys(imagesInsert).map((insert, index) => (
              <OverlayTrigger
                key={index}
                placement="top"
                delay={{ show: 250, hide: 400 }}
                overlay={<Tooltip>{ins[insert]}</Tooltip>}
              >
                <img
                  className={s.imgCoolor}
                  src={imagesInsert[insert]}
                  alt=""
                  onClick={() => handleInsertSelect(insert)}
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
          <PWcatalog images={selectedImages} nameDoor={selectedName}/>
        </div>
      </div>
    </>
  );
};

export default PW;
