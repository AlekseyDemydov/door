import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import one from '../img/1peregorodka.jpg'
import two from '../img/2peregorodka.jpg'
import three from '../img/3peregorodka.jpg'
import four from '../img/4peregorodka.jpg'
import five from '../img/5peregorodka.jpg'
import six from '../img/6peregorodka.jpg'
import seven from '../img/7peregorodka.jpg'
import eight from '../img/8peregorodka.jpg'
import nine from '../img/9peregorodka.jpg'
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
                <div>
                    <img src={five} alt="" />
                    
                </div>
                <div>
                    <img src={six} alt="" />
                    
                </div>
                <div>
                    <img src={seven} alt="" />
                    
                </div>
                <div>
                    <img src={eight} alt="" />
                    
                </div>
                <div>
                    <img src={nine} alt="" />
                    
                </div>
            </Carousel>
        );
    }
};
