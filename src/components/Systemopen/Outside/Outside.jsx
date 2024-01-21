import React from 'react';
import s from './Outside.module.scss';
import { motion } from 'framer-motion';
import outside1 from './img/outside1.jpg';

import outsideAnim from './img/outsideAnim.mp4';

const Outside = () => {
  return (
    <div className={s.morePenalContainer}>
      <h1>ПРИХОВАНА НАРУЖНА</h1>
      <h2>СИСТЕМА ВІДКРИВАННЯ ДВЕРЕЙ</h2>
      <div className={s.textBox}>
        <p className={s.textOP}>
          Система відкривання дверей «ПРИХОВАНА НАРУЖНА» - це можливість
          встановити "невидимі" двері з прихованим коробом. Конструктивне
          рішення та дизайнерське оформлення дозволяє змонтувати дверне полотно
          в отворі врівень з площиною стіни. При цьому короб не оформляється
          лиштвою, що дозволяє створити ефект невидимих дверей.
        </p>
        <p>
          Головна особливість даної конструкції полягає в тому, що колір та
          фактура стіни та дверного полотна виконуються в єдиному стилі, фактурі
          та кольоровому рішенні.
        </p>
        <p>
          Приховані міжкімнатні двері під фарбування – це оптимальний спосіб
          візуального збільшення простору. Дане рішення дозволить створити
          відчуття простору та неповторний стиль кімнати.
        </p>
      </div>

      <img src={outside1} alt="" />
      
      <h2>АНІМАЦІЯ СИСТЕМИ ПРИХОВАНА НАРУЖНА</h2>
      <motion.video
        autoPlay
        loop
        muted
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={s.kupeAnim}
      >
        <source src={outsideAnim} type="video/mp4" />
      </motion.video>

      <h2>КОМПЛЕКТАЦІЯ</h2>
      <div className={s.textBox}>
        <p className={s.textOP}>1. Дверне полотно;</p>
        <p>2. Прихована коробка.</p>
      </div>
      
    </div>
  );
};

export default Outside;
