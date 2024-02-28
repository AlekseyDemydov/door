import s from './PE.module.scss';
import React, { useState } from 'react';
import РEmain from './img/PEmain.jpeg';
import { NavLink } from 'react-router-dom';
import si from './img/s.png';
import ch from './img/ch.png';
// import PEABS from './img/PEABS.jpg';
import PЕsilver from './img/PЕsilver.png';
import PЕblack from './img/PЕblack.png';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

const PE = () => {
  const [selectedProfile, setSelectedProfile] = useState('ch');
  const renderTooltip = props => (
    <Tooltip id="button-tooltip" {...props}>
      під фарбування
    </Tooltip>
  );
  return (
    <>
      <div className={s.peregorodkibox}>
        <div className={s.mainBOx}>
          <h1 className={s.titleper}>МОДЕЛЬ PE</h1>
          <div>
            <ul className={s.infolistper}>
              <li className={s.infoper}>
                Приховані двері або «невидимки» – одне з найактуальніших на
                сьогоднішній день рішень у дизайні інтер'єру. Основу конструкції
                каркасного полотна складає рама з фанери та МДФ, по периметру
                торцева кромка – алюмінієва або ABS. Комплектується прихованими
                завісами та магнітним замком.
              </li>
            </ul>
          </div>
        </div>
        <div className={s.perslider}>
          <img src={РEmain} alt="РEmain" className={s.imgMainPa} />
        </div>
      </div>
      <div className={s.bgHero}></div>
      <div className={s.seriasBox}>
        <div>
          <div>
            <h3>СЕРІЇ</h3>
            <NavLink to="/door/catalog/pa" className={s.serias}>
              PA
            </NavLink>
            <NavLink to="/door/catalog/pe" className={s.serias}>
              PE
            </NavLink>
            <NavLink to="/door/catalog/m" className={s.serias}>
              M
            </NavLink>
          </div>
          <div>
            <h3>КОЛІР</h3>
            <OverlayTrigger
              placement="right"
              delay={{ show: 250, hide: 400 }}
              overlay={renderTooltip}
            >
              <div className={s.imgcolor}></div>
            </OverlayTrigger>
          </div>
          <div>
            <h3>КРОМКА</h3>
            <img
              className={s.imgCoolor}
              src={ch}
              alt="ch"
              onClick={() => setSelectedProfile('ch')} // Обробник кліку для зображення ch
            />
            <img
              className={s.imgCoolor}
              src={si}
              alt="si"
              onClick={() => setSelectedProfile('si')} // Обробник кліку для зображення si
            />
          </div>
        </div>
        <div>
          {selectedProfile === 'si' && <img src={PЕsilver} alt="" className={s.imgCoolorDoor}/>}{' '}
          {/* Відображення зображення PAsi, якщо вибрано si */}
          {selectedProfile === 'ch' && <img src={PЕblack} alt="" className={s.imgCoolorDoor}/>}{' '}
          {/* Відображення зображення PAch, якщо вибрано ch */}
        </div>
      </div>
    </>
  );
};

export default PE;
