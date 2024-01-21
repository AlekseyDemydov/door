import React from 'react';
import s from './Magic.module.scss';
import { motion } from 'framer-motion';
import magic1 from './img/magic1.jpg';
import magic2 from './img/magic2.jpg';
import magic3 from './img/magic3.jpg';
import magic4 from './img/magic4.jpg';
import magic5 from './img/magic5.jpg';

import magicAnim from './img/magicAnim.mp4';

const Magic = () => {
  return (
    <div className={s.morePenalContainer}>
      <h1>MAGIC</h1>
      <h2>СИСТЕМА ВІДКРИВАННЯ ДВЕРЕЙ</h2>
      <div className={s.textBox}>
        <p className={s.textOP}>
          Інноваційне рішення для розсувних дверей - система відкриття Magic -
          це універсальна можливість організувати простір відповідно до останніх
          тенденцій дизайну.
        </p>
        <p>
          Система відкривання Magic встановлюється на каркасні двері з
          дерев'яною та скляною поверхнею у зонах будь-яких призначень. Такий
          варіант виконання органічно впишеться в сучасний стиль робочого
          кабінету чи конференц-залу: безшумна робота механізму не відволікатиме
          від роботи, ділових переговорів чи виступу оратора. У квартирі або
          житловому будинку подібна система дозволить нестандартно оформити вхід
          до вбиральні, бібліотеки або кімнати для відпочинку.
        </p>
        
      </div>

      <img src={magic1} alt="" />
      <img src={magic2} alt="" />
      <h2>АНІМАЦІЯ СИСТЕМИ MAGIC</h2>
      <motion.video
        autoPlay
        loop
        muted
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={s.kupeAnim}
      >
        <source src={magicAnim} type="video/mp4" />
      </motion.video>

      <h2>КОНСТРУКТИВНІ РІШЕННЯ</h2>
      <div className={s.textBox}>
        <p className={s.textOP}>
        Одностулкові
        </p>
        <p>
        Сторона: ліва чи права (уточнити при замовленні)
        </p>
        
      </div>
      <img src={magic3} alt="" />
      <img src={magic4} alt="" />
      <p className={s.resh}>Двостулкові</p>
      <img src={magic5} alt="" />
      
    </div>
  );
};

export default Magic;
