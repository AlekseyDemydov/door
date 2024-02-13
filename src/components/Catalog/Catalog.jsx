import { NavLink } from 'react-router-dom';
import s from './Catalog.module.scss';
import kolFarb from './img/kolFarb.jpg';

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
        <img src={kolFarb} alt="kolFarb" className={s.imgCatalog} />
      </div>
    </div>
  );
};

export default Catalog;
