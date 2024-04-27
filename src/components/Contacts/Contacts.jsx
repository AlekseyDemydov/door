import React from 'react';
import s from './Contacts.module.scss';

const Contacts = () => {
  return (
    <>
    
    <div className={s.contacts}>
      <div className={s.contactInfo}>
        <h1>НАШІ КОНТАКТИ</h1>
        <a href="mailto:laola.wood@gmail.com" className={s.number}>
        laola.wood@gmail.com
        </a>
        <br />
        <a href="tel:+380679420901" className={s.number}>
          0679420901
        </a>
        <br />
        <a href="tel:+380739420901" className={s.number}>
          0739420901
        </a>
        <br />
        <a href="https://www.instagram.com/larindoors49?igsh=MXBtcWJkYXNoa3E2YQ==" className={s.number}>instagram</a>
      </div>
      
    </div>
    <div className={s.map}>
        {/* Відображення з гугл карт тут */}
        {/* Наприклад: */}
        <iframe
        title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2542.232068840468!2d30.4099653!3d50.41814769999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cbfb4c21aaed%3A0x5acd126ee6fb0200!2z0YPQuy4g0KHQtdC80YzQuCDQkdGD0L3Qs9C1LCA3LCDQmtC40LXQsiwg0JrQuNC10LLRgdC60LDRjyDQvtCx0LvQsNGB0YLRjCwgMDM2ODA!5e0!3m2!1sru!2sua!4v1713885365180!5m2!1sru!2sua"
          width="600"
          height="450"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          style={{
            width: '100%', // Зберігаємо ширину на всю ширину батьківського контейнера
            '@media screen and (max-width: 480px)': {
              width: '400px', // Зменшуємо ширину на екранах шириною 480px або менше
            },
          }}
        ></iframe>
      </div>
    </>
  );
};

export default Contacts;
