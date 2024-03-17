import { NavLink } from 'react-router-dom';
import s from './Catalog.module.scss';
import p1 from './img/p1.jpg';
import p2 from './img/p2.jpg';
import p3 from './img/p3.jpg';
import p4 from './img/p4.jpg';
import p5 from './img/p5.jpg';

const Catalog = () => {
  return (
    <div className={s.catalog}>
      <div className={s.cardBox}>
        <div className={s.cardList}>
          <h5 className={s.listTitle}>
            Колекції під фарбування та приховані короба
          </h5>
          <div className={s.serias}>
          <NavLink to="/door/catalog/pa" className={s.more}>
            Серія PA
          </NavLink>
          <NavLink to="/door/catalog/pe" className={s.more}>
            Серія PE
          </NavLink>
          <NavLink to="/door/catalog/m" className={s.more}>
            Серія M
          </NavLink>
          </div>
        </div>
        <img src={p1} alt="p1" className={s.imgCatalog} />
      </div>
      <div className={s.cardBox}>
        <div className={s.cardList}>
          <h5 className={s.listTitle}>
          Колекції фарбованих дверей
          </h5>
          <div className={s.serias}>
          <NavLink to="/door/catalog/pw" className={s.more}>
            Серія PW
          </NavLink>
          <NavLink to="/door/catalog/pm" className={s.more}>
            Серія PM
          </NavLink>
          <NavLink to="/door/catalog/p" className={s.more}>
            Серія P
          </NavLink>
          <NavLink to="/door/catalog/u" className={s.more}>
            Серія U
          </NavLink>
          </div>
        </div>
        <img src={p2} alt="kolFarb" className={s.imgCatalog} />
      </div>
      <div className={s.cardBox}>
        <div className={s.cardList}>
          <h5 className={s.listTitle}>
          Колекції скляних міжкімнатних дверей в алюмінієвому профілі
          </h5>
          <div className={s.serias}>
          <NavLink to="/door/catalog/ax" className={s.more}>
            Серія AX
          </NavLink>
          <NavLink to="/door/catalog/av" className={s.more}>
            Серія AV
          </NavLink>
          <NavLink to="/door/catalog/ag" className={s.more}>
            Серія AG
          </NavLink>
          <NavLink to="/door/catalog/agn" className={s.more}>
            Серія AGN
          </NavLink>
          <NavLink to="/door/catalog/agp" className={s.more}>
            Серія AGP
          </NavLink>
          <NavLink to="/door/catalog/agk" className={s.more}>
            Серія AGK
          </NavLink>
          </div>
        </div>
        <img src={p3} alt="kolFarb" className={s.imgCatalog} />
      </div>
      <div className={s.cardBox}>
        <div className={s.cardList}>
          <h5 className={s.listTitle}>
          Колекції з дерев’яним покриттям
          </h5>
          <div className={s.serias}>
          <NavLink to="/door/catalog/n" className={s.more}>
            Серія N
          </NavLink>
          <NavLink to="/door/catalog/na" className={s.more}>
            Серія NA
          </NavLink>
          <NavLink to="/door/catalog/ne" className={s.more}>
            Серія NE
          </NavLink>
          </div>
        </div>
        <img src={p4} alt="kolFarb" className={s.imgCatalog} />
      </div>
      <div className={s.cardBox}>
        <div className={s.cardList}>
          <h5 className={s.listTitle}>
      Розсувні алюмінієві перегородки
          </h5>
          <div className={s.serias}>
          <NavLink to="/door/catalog/kaskad" className={s.more}>
          Каскад
          </NavLink>
          <NavLink to="/door/catalog/classic" className={s.more}>
          Класичне відкриття
          </NavLink>
          </div>
        </div>
        <img src={p5} alt="kolFarb" className={s.imgCatalog} />
      </div>
    </div>
  );
};

export default Catalog;
