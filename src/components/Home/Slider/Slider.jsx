import React, { Component } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import one from '../img/penal.jpg';
import two from '../img/peregorodka.jpg';
import s from './Slider.module.scss';
import { NavLink } from 'react-router-dom';
import './Slider.css';

export default class HeroSlider extends Component {

  render() {
    const settings = {
      infiniteLoop: true,
      autoPlay: true,
      showThumbs: false,
      showIndicators: false,
      
    };
    
    return (
      <Carousel {...settings}>
        <div>
          <img src={one} alt="" className={s.img} />
          <div className={s.infoslider}>
            <h2 className={s.infoTitle}>ПЕНАЛ</h2>
            <h2 className={s.infoTitle}>РОЗСУВНА СИСТЕМА</h2>
            <h2 className={s.infoTitle}>ПРИХОВАНОГО МОНТАЖУ</h2>
            <NavLink className={s.gopenalbtn} to="/dvery/penal">
              ДЕТАЛЬНІШЕ
            </NavLink>
          </div>
        </div>
        <div>
          <img src={two} alt="" className={s.img} />
          <div className={s.infoslider}>
            <h2 className={s.infoTitle}>КАСКАД</h2>
            <h2 className={s.infoTitle}>РОЗСУВНІ</h2>
            <h2 className={s.infoTitle}>ПЕРЕГОРОДКИ</h2>
            <NavLink className={s.gopenalbtn} to="/dvery/peregorodki">
              ДЕТАЛЬНІШЕ
            </NavLink>
          </div>
        </div>
      </Carousel>
    );
  }
}
