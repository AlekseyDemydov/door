import React from 'react';
import s from './Argon.module.scss';
import { motion } from 'framer-motion';
import argon1 from './img/argon1.jpg';
import argon2 from './img/argon2.jpg';
import argon3 from './img/argon3.jpg';
import argon4 from './img/argon4.jpg';

import argonAnim from './img/argonAnim.mp4';

const Argon = () => {
  return (
    <div className={s.morePenalContainer}>
      <h1>ARGON</h1>
      <h2>СИСТЕМА ВІДКРИВАННЯ ДВЕРЕЙ</h2>
      <div className={s.textBox}>
        <p className={s.textOP}>
          Система відкривання дверей ARGON - найкраща альтернатива рішенню зі
          стандартним полотном. Основним елементом приводу є роторний механізм.
          Він притискає середину дверного полотна до відкосу з лівого або
          правого боку отвору, і дає можливість відкривати його рухом на себе та
          від себе. Відкидний пристрій закриття дозволяє повернути двері у
          вихідне положення без зусиль.
        </p>
        <p>
          Дверна конструкція з роторною системою займає лише простір із
          внутрішнього боку отвору, звільняючи місце у кімнаті для предметів
          інтер'єру. Такий спосіб відкривання поєднує в собі функціонал
          розпашних, розсувних та маятникових систем. Поворотний механізм
          зручний для встановлення у вузькому коридорі, у тісному санвузлі та
          інших кімнатах, де потрібно звільнити простір під шафи та полиці.
        </p>
      </div>

      <img src={argon1} alt="" />
      <img src={argon2} alt="" />
      <h2>АНІМАЦІЯ СИСТЕМИ ARGON</h2>
      <motion.video
        autoPlay
        loop
        muted
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={s.kupeAnim}
      >
        <source src={argonAnim} type="video/mp4" />
      </motion.video>

      <h2>КОНСТРУКТИВНІ РІШЕННЯ</h2>
      <div className={s.textBox}>
        <p className={s.textOP}>Одностулкові</p>
        <p>Сторона: ліва чи права (уточнити при замовленні)</p>
      </div>
      <img src={argon3} alt="" />
      <img src={argon4} alt="" />
    </div>
  );
};

export default Argon;
