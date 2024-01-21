import React from 'react';
import s from './Footer.module.scss';

function Footer() {
  return (
    <footer className={s.footer}>
      <a href="tel:+380679420901" className={s.number}>0679420901</a>
      <a href="tel:+380739420901" className={s.number}>0739420901</a>
      <a href="https://maps.app.goo.gl/LUFTWNezysmumXZt9" className={s.linkAdress} target='_blank' rel="noreferrer">
        Виробництво - Київ, вул. Якутська, 7
      </a>
      <div className={s.bgFooter}></div>
    </footer>
  );
}

export default Footer;