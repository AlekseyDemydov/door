import React from 'react';
import s from './MoreKupe.module.scss';
import { motion } from 'framer-motion';
import kupe1 from './img/kupe1.jpg';
import kupe2 from './img/kupe2.jpg';
import kupe3 from './img/kupe3.png';
import kupe4 from './img/kupe4.png';
import kupe5 from './img/kupe5.png';
import kupe6 from './img/kupe6.png';
import kupe7 from './img/kupe7.png';
import kupe8 from './img/kupe8.png';
import kupe9 from './img/kupe9.png';
import kupe10 from './img/kupe10.png';
import kupeAnim from './img/kupeAnim.mp4';

const MoreKupe = () => {
  return (
    <div className={s.morePenalContainer}>
      <h1>КУПЕ</h1>
      <h2>СИСТЕМА ВІДКРИВАННЯ ДВЕРЕЙ</h2>
      <div className={s.textBox}>
        <p className={s.textOP}>
          Двері-купе виготовляються у двох варіантах - з розташуванням дверного
          полотна всередині отвору та вздовж стіни.
        </p>
        <p>
          У першому варіанті дверне полотно кріпиться до направляючої,
          встановленої у верхній частині дверного отвору. У цьому виконанні
          система відкриття дверей-купе встановлюється на дві стулки, щоб
          зменшити глибину кишені всередині стіни.
        </p>
        <p>
          У другому випадку алюмінієва направляюча кріпиться до стіни, вздовж
          якої рухається полотно.
        </p>
        <p>
          В обох варіантах додатково можна встановити доводчик та механізм
          синхронного відкривання, що полегшують експлуатацію конструкції.
        </p>
        <p>
          Система відчинення дверей Купе гармонійно впишеться в інтер'єр великої
          обіденної зали, вітальні чи кімнати переговорів. Верхнє кріплення
          легко приховати за допомогою різних декоративних елементів або
          стандартного карнизу МДФ кольору дверного полотна.
        </p>
      </div>

      <img src={kupe1} alt="" />
      <img src={kupe2} alt="" />
      <h2>АНІМАЦІЯ СИСТЕМИ КУПЕ</h2>
      <motion.video
        autoPlay
        loop
        muted
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={s.kupeAnim}
      >
        <source src={kupeAnim} type="video/mp4" />
      </motion.video>

      <h2>КОНСТРУКТИВНІ РІШЕННЯ</h2>
      <p className={s.resh}>Виконання поза отвором, одностулкове та двостулкове</p>
      <img src={kupe3} alt="" />
      <img src={kupe4} alt="" />
      <p className={s.resh}>Виконання всередині отвору, 2 та 3 полотна</p>
      <img src={kupe5} alt="" />
      <img src={kupe6} alt="" />
      <p className={s.resh}>Виконання всередині отвору, 4 полотна</p>
      <img src={kupe7} alt="" />
      <img src={kupe8} alt="" />
      <p className={s.resh}>Виконання Каскад: всередині отвору, 3 та 4 полотна</p>
      <img src={kupe9} alt="" />
      <img src={kupe10} alt="" />
    </div>
  );
};

export default MoreKupe;
