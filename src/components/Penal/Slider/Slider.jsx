import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
// import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';
// import './Slider.css';
import s from './Slider.module.scss'
import one from '../img/one.jpg'
import two from '../img/two.jpg'
import three from '../img/three.jpg'
import four from '../img/four.jpg'

export default class PenalSlider extends Component {
    
    render() {
        
        const settings = {
            infiniteLoop:true,
            autoPlay:true,
            showStatus: false,
            showThumbs: false,
            height: '933,781px',
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
              }}
              
              >
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
