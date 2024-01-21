import React from 'react';
import s from './Book180.module.scss';
import { motion } from 'framer-motion';
import book1 from './img/book1.jpg';
import book2 from './img/book2.jpg';
import book3 from './img/book3.jpg';
import book4 from './img/book4.jpg';
import book5 from './img/book5.jpg';

import bookAnim from './img/bookAnim.mp4';

const Book180 = () => {
  return (
    <div className={s.morePenalContainer}>
      <h1>КНИЖКА 180</h1>
      <h2>СИСТЕМА ВІДКРИВАННЯ ДВЕРЕЙ</h2>
      <div className={s.textBox}>
        <p className={s.textOP}>
          Система відкриття «Книжка 180» – це симбіоз витонченого стилю та
          практичної конструкції. Система призначена для варіантів виконання з
          одним або двома стулками. Компактні двері, оснащені поворотним та
          зсувним механізмом, виконують одночасно 2 завдання – економія простору
          та створення сучасного інтер'єру.
        </p>
        <p>
          При відкритті кожне дверне полотно складається навпіл і розміщується
          вздовж стіни, займаючи площу в 2 рази менше за власну поверхню. Це
          зручно при близькому розташуванні меблів та предметів декору до
          отвору.
        </p>
        <p>
          Міжкімнатні двері, що складаються навпіл, стануть відповідним рішенням
          для створення входу в гардеробну кімнату, комору або архівне
          приміщення. Розсувний механізм незамінний для отворів, у яких
          класичний розпашний варіант створює незручності. Двері, що складаються
          з системою «Книжка 180» - вибір практичних людей, що йдуть в ногу з
          часом.
        </p>
      </div>

      <img src={book1} alt="" />
      <img src={book2} alt="" />
      <h2>АНІМАЦІЯ СИСТЕМИ КНИЖКА 180</h2>
      <motion.video
        autoPlay
        loop
        muted
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={s.kupeAnim}
      >
        <source src={bookAnim} type="video/mp4" />
      </motion.video>
      <div className={s.textBox}>
        <p className={s.textOP}>
          Комплект "Книжка 180" включає два полотна, механізм складаний, замок
          під фіксатор. Дверні ручки натискна та врізна купуються окремо залежно
          від кольору та моделі ручок. Коробка Книжка 180. Додатково: стандартна
          лиштва.
        </p>
      </div>
      <h2>КОНСТРУКТИВНІ РІШЕННЯ</h2>
      <p className={s.resh}>Одностулкові</p>
      <img src={book3} alt="" />
      <img src={book4} alt="" />
      <p className={s.resh}>Двостулкові</p>
      <img src={book5} alt="" />
    </div>
  );
};

export default Book180;
