import DemoCarousel from './Slider/Slider';
import s from './M.module.scss';
import b from './img/b.png';
import ch from './img/ch.png';
import g from './img/g.png';
import n from './img/n.png';
import si from './img/s.png';
import d from './img/d.jpg';
import db from './img/db.jpg';
import dg from './img/dg.jpg';

const M = () => {
  return (
    <>
      <div className={s.peregorodkibox}>
        <div>
          <h1 className={s.titleper}>ДВЕРІ іЗ ДЗЕРКАЛОМ</h1>
          <div>
            <ul className={s.infolistper}>
              <li className={s.infoper}>
                Суцільна дзеркальна поверхня з одного боку дверей – це одне з
                найбільш функціональних та стильних рішень для вбиральні або
                доповнення вашого інтер'єру в цілому.
              </li>
            </ul>
          </div>
        </div>
        <div className={s.perslider}>
          <DemoCarousel className={s.slider}/>
        </div>
      </div>
      <div className={s.colorBlock}>
        <h1>Кольора алюмінієвого профілю</h1>
        <div className={s.alColor}>
          <div>
            <img src={g} alt="g" className={s.sizeColor} />
            <p>Золото</p>
          </div>
          <div>
            <img src={ch} alt="ch" className={s.sizeColor} />
            <p>Чорний матовий</p>
          </div>
          <div>
            <img src={n} alt="n" className={s.sizeColor} />
            <p>Нікель</p>
          </div>
          <div>
            <img src={si} alt="si" className={s.sizeColor} />
            <p>Серебро</p>
          </div>
          <div>
            <img src={b} alt="b" className={s.sizeColor} />
            <p>Бронза</p>
          </div>
        </div>
      </div>
      <div className={s.colorBlock}>
        <h1>Варіанти дзеркал</h1>
        <div className={s.alColor}>
          <div>
            <img src={d} alt="d" className={s.sizeColor} />
            <p>дзеркало</p>
          </div>
          <div>
            <img src={dg} alt="dg" className={s.sizeColor} />
            <p>дзеркало GREY</p>
          </div>
          <div>
            <img src={db} alt="db" className={s.sizeColor} />
            <p>дзеркало BRONZE</p>
          </div>
        </div>
        <h4>
          Різноманітність варіантів уможливлює їх застосування в будь-якому
          інтер'єрі та в приміщеннях з будь-якою квадратурою. Більше того, такі
          двері здатні зробити потрібні акценти в інтер'єрі та зберегти стильову
          єдність.
        </h4>
      </div>
    </>
  );
};

export default M;
