import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import one from '../img/М1.jpg'
import two from '../img/М2.jpg'
import three from '../img/М3.jpg'
import four from '../img/М4.jpg'

import s from './Slider.module.scss'

export default class DemoCarousel extends Component {
    render() {
        const settings = {
            infiniteLoop:true,
            autoPlay:true,
            showStatus: false,
            showThumbs: false,
        }
        return (
            <Carousel {...settings} className={s.carSlider}
            renderArrowPrev={(clickHandler) => {
                return (
                  <div
                    
                    onClick={clickHandler}
                  >
                    <button className={s.btnPrev}></button>
                  </div>
                );
              }}
              renderArrowNext={(clickHandler) => {
                return (
                  <div
                    
                    onClick={clickHandler}
                  >
                    <button className={s.btnNext}></button>
                  </div>
                );
              }}>
                <div>
                    <img src={one} alt="" />
                    
                </div>
                <div>
                    <img src={two} alt="" />
                    
                </div>
                <div>
                    <img src={three} alt="" />
                    
                </div>
                <div>
                    <img src={four} alt="" />
                   
                </div>
                
            </Carousel>
        );
    }
};
