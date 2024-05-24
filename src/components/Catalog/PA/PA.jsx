import s from './PA.module.scss';
import React, { useState } from 'react';
import РАmain from './img/РАmain.jpeg';
import { NavLink } from 'react-router-dom';
import si from './img/s.png';
import ch from './img/ch.png';
import PAsi from './img/PAsi.png';
import PAch from './img/PAch.png';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

const PA = () => {
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
          <h1 className={s.titleper}>МОДЕЛЬ PA</h1>
          <div>
            <ul className={s.infolistper}>
              <li className={s.infoper}>
                Головна особливість даної конструкції полягає в тому, що колір
                та фактура стіни та дверного полотна виконуються в єдиному
                кольоровому рішенні. Основу конструкції складає рама із
                алюмінієвого профілю. Комплектується прихованими завісами та
                магнітним замком.
              </li>
            </ul>
          </div>
        </div>
        <div className={s.perslider}>
          <img src={РАmain} alt="РАmain" className={s.imgMainPa} />
        </div>
      </div>
      <div className={s.bgHero}></div>
      <div className={s.seriasBox}>
        <div>
          <div>
            <h3>СЕРІЇ</h3>
            <NavLink to="/door/catalog/pa" className={s.serias} style={({ isActive }) => ({
                border: isActive
                  ? '3px solid rgb(8, 7, 7)'
                  : '1px solid rgb(8, 7, 7)',
              })}>
              PA
            </NavLink>
            <NavLink to="/door/catalog/pe" className={s.serias} style={({ isActive }) => ({
                border: isActive
                  ? '3px solid rgb(8, 7, 7)'
                  : '1px solid rgb(8, 7, 7)',
              })}>
              PE
            </NavLink>
            <NavLink to="/door/catalog/m" className={s.serias} style={({ isActive }) => ({
                border: isActive
                  ? '3px solid rgb(8, 7, 7)'
                  : '1px solid rgb(8, 7, 7)',
              })}>
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
            <h3>ПРОФІЛЬ</h3>
            <img
              className={s.imgCoolor}
              src={ch}
              alt="ch"
              onClick={() => setSelectedProfile('ch')} 
            />
            <img
              className={s.imgCoolor}
              src={si}
              alt="si"
              onClick={() => setSelectedProfile('si')} 
            />
          </div>
        </div>
        <div>
          {selectedProfile === 'si' && <img src={PAsi} alt="" className={s.imgCoolorDoor}/>}{' '}
       
          {selectedProfile === 'ch' && <img src={PAch} alt="" className={s.imgCoolorDoor}/>}{' '}
        
        </div>
      </div>
    </>
  );
};

export default PA;
