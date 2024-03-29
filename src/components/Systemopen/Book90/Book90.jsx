import React from 'react';
import s from './Book90.module.scss';
import book1 from './img/book1.jpg';
import book2 from './img/book2.jpg';
import book3 from './img/book3.jpg';
import book4 from './img/book4.jpg';

const Book90 = () => {
  return (
    <div className={s.morePenalContainer}>
      <h1>КНИЖКА 90</h1>
      <h2>СИСТЕМА ВІДКРИВАННЯ ДВЕРЕЙ</h2>
      <div className={s.textBox}>
        <p className={s.textOP}>
          Система відкриття дверей «Книжка 90» – ще одне рішення нашого
          виробництва. В основі конструкторської ідеї лежить рішення поділити
          дверне полотно на дві асиметричні частки, завдяки чому відбувається
          складання частин полотна та їх зсув напрямної в ліву або праву сторону
          (залежно від варіанту виконання). У результаті вони займають
          положення, перпендикулярне поверхні стіни.
        </p>
        <p>
          Система відкриття дверей «Книжка 90» - це міцна та надійна
          конструкція, значне збільшення вільного простору та оригінальний
          предмет інтер'єру. Плавність ходу дверей забезпечує механізм системи,
          прихований у верхній частині отвору. Його безшумна робота не буде
          відволікати увагу під час наради чи приємного вечора у компанії
          друзів.
        </p>
        <p>
          Для типових квартир у багатоповерхових будинках двері, що складаються,
          книжка - порятунок. Коли важливо заощадити кожен куточок, зручно
          розмістити меблевий гарнітур і створити атмосферу затишку в будинку,
          дверне полотно з механізмом, що складається. А якщо предмети декору
          розташовані впритул до отвору, книжка замінить і двері у виконанні
          купе.
        </p>
      </div>

      <img src={book1} alt="" />
      <img src={book2} alt="" />
      
      <h2>КОНСТРУКТИВНІ РІШЕННЯ</h2>
      <p className={s.resh}>Одностулкові</p>
      <p className={s.resh}>Сторона: універсальна</p>
      <img src={book3} alt="" />
      <img src={book4} alt="" />
      
    </div>
  );
};

export default Book90;
