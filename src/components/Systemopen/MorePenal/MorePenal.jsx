// import s from './MorePenal.module.scss';
import pen1 from './img/pen1.jpg';
import pen2 from './img/pen2.jpg';
import pen3 from './img/pen3.jpg';
import pen4 from './img/pen4.jpg';
import pen5 from './img/pen5.jpg';
import pen6 from './img/pen6.jpg';
import pen7 from './img/pen7.jpg';
import pen8 from './img/pen8.jpg';


import React from 'react';
import s from './MorePenal.module.scss';

const MorePenal = () => {
  return (
    <div className={s.morePenalContainer}>
      <h1>ПЕНАЛ</h1>
      <h2>СИСТЕМА ВІДКРИВАННЯ ДВЕРЕЙ</h2>
      <div className={s.textBox}>
        <p>
        Система відкриття «Пенал» - це система прихованого монтажу розсувних
        дверей, що функціонує за допомогою спеціального короба, вмонтованого в
        стіну. Він приховує все дверне полотно, завдяки чому двері не
        відчиняються, як завжди. Внаслідок цього двері практично не займають
        місце і значно економляться корисний простір. Приблизно збільшує площу
        приміщення на 8-10% за рахунок зменшення «мертвих зон» у місці
        відкривання дверей. Дане рішення доопрацьовано та вдосконалено з
        урахуванням думок фахівців із монтажу.
      </p>
      <p>
        Спеціальний короб з розсувною системою для встановлення дверних полотен,
        встановлюється в отвір у стіні і обшивається гіпсокартоном (обробляється
        штукатуркою) для подальшого оздоблення чистовими оздоблювальними
        матеріалами (фарбою, шпалерами, плиткою тощо).
      </p>
      </div>
      
      <img src={pen1} alt="" />
      <img src={pen2} alt="" />
      <img src={pen3} alt="" />
      <img src={pen4} alt="" />
      <h2 className={s.textColor}>СЕРІЇ ДВЕРЕЙ, ДО ЯКИХ МОЖЕ БУТИ ЗАСТОСОВАНА СИСТЕМА «ПЕНАЛ» треба уточнювати у менеджера.</h2>
      <h2 className={s.textColor}>КОНСТРУКТИВНІ РІШЕННЯ</h2>
      <h4 className={s.textColor}>Одностулкові або двостулкові</h4>
      <img src={pen5} alt="" />
      <img src={pen6} alt="" />
      <h3 className={s.textColor}>З лиштвою або без лиштви</h3>
      <img src={pen7} alt="" />
      <img src={pen8} alt="" />
    </div>
  );
};

export default MorePenal;

