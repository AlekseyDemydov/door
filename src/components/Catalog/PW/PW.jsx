import s from './PW.module.scss';
import React, { useState } from 'react';
import PWmain from './img/PWmain.webp';
import creem from './img/creem.jpg';
import black from './img/black.jpg';
import Grafit from './img/Grafit.jpg';
import light_gray from './img/light_gray.jpg';
import Perlamutr_Belyy from './img/Perlamutr_Belyy.jpg';
import Perlamutr_Bronza from './img/Perlamutr_Bronza.jpg';
import Perlamutr_Zoloto from './img/Perlamutr_Zoloto.jpg';
import white from './img/white.jpg';
import PWcatalog from './PWcatalog/PWcatalog';


const importAll = context => context.keys().map(context);
const blackDoor = importAll(require.context('./img/black', false, /\.(png)$/));
const creemDoor = importAll(require.context('./img/creem', false, /\.(png)$/));
const GrafitDoor = importAll(require.context('./img/Grafit', false, /\.(png)$/));

const PW = () => {
  const [selectedProfile, setSelectedProfile] = useState('black');

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
          <img src={PWmain} alt="РАmain" className={s.imgMainPa} />
        </div>
      </div>
      <div className={s.bgHero}></div>
      <div className={s.seriasBox}>
        <div>
          <div>
            <h3>СЕРІЇ</h3>
            <h4  className={s.serias}>
              PW
            </h4>
            <h4  className={s.serias}>
              PM
            </h4>
            <h4  className={s.serias}>
              P
            </h4>
            <h4  className={s.serias}>
              U
            </h4>
          </div>
          <div>
            <h3>КОЛІР</h3>
            <img
              className={s.imgCoolor}
              src={black}
              alt="black"
              onClick={() => setSelectedProfile('black')}
            />
            <img
              className={s.imgCoolor}
              src={creem}
              alt="creem"
              onClick={() => setSelectedProfile('creem')}
            />
            <img
              className={s.imgCoolor}
              src={Grafit}
              alt="Grafit"
              onClick={() => setSelectedProfile('Grafit')}
            />
            <img
              className={s.imgCoolor}
              src={light_gray}
              alt="light_gray"
              onClick={() => setSelectedProfile('light_gray')}
            />
            <img
              className={s.imgCoolor}
              src={Perlamutr_Belyy}
              alt="Perlamutr_Belyy"
              onClick={() => setSelectedProfile('Perlamutr_Belyy')}
            />
            <img
              className={s.imgCoolor}
              src={Perlamutr_Bronza}
              alt="Perlamutr_Bronza"
              onClick={() => setSelectedProfile('Perlamutr_Bronza')}
            />
            <img
              className={s.imgCoolor}
              src={Perlamutr_Zoloto}
              alt="Perlamutr_Zoloto"
              onClick={() => setSelectedProfile('Perlamutr_Zoloto')}
            />
            <img
              className={s.imgCoolor}
              src={white}
              alt="white"
              onClick={() => setSelectedProfile('white')}
            />
          </div>
          <div>
            <h3>ВСТАВКА</h3>
          </div>
        </div>
        <div className={s.imgBox}>
          {selectedProfile === 'black' && (
            <PWcatalog images={blackDoor} length={11} />
            
          )}
          {selectedProfile === 'creem' && (
            <PWcatalog images={creemDoor} length={11} />
          )}
          {selectedProfile === 'Grafit' && (
            <PWcatalog images={GrafitDoor} length={11} />
          )}
        </div>
      </div>
    </>
  );
};

export default PW;