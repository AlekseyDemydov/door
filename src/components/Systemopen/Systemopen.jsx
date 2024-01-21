import s from './Systemopen.module.scss';
import penal from './img/penal.jpg';
import kupe from './img/kupe.jpg';
import knizhka180 from './img/knizhka180.jpg';
import knizhka90 from './img/knizhka90.jpg';
import magic from './img/magic.jpg';
import argon from './img/argon.jpg';
import prihnar from './img/prihnar.jpg';
import prihinside from './img/prihinside.jpg';
import { NavLink } from 'react-router-dom';

const Systemopen = () => {
  return (
    <>
      <div className={s.systembox}>
        <div className={s.systemboxlist}>
          <h1>Пенал</h1>
          <div className={s.hover}>
            <img src={penal} alt="" className={s.imgsystem} />
            <div className={s.overlay}></div>
            <NavLink to="/dvery/system/morepenal" className={s.more}>
              ДЕТАЛЬНІШЕ
            </NavLink>
          </div>
          <p className={s.systeminfo}>
            Система прихованого монтажу розсувних дверей, які функціонують за
            допомогою спеціального короба, вмонтованого в стіну. Він приховує
            все дверне полотно, завдяки чому двері не відчиняються, як завжди.
            Внаслідок цього двері практично не займають місце і значно
            економляться корисний простір.
          </p>
        </div>
        <div>
          <h1>Купе</h1>
          <div className={s.hover}>
            <img src={kupe} alt="" className={s.imgsystem} />
            <div className={s.overlay}></div>
            <NavLink to="/dvery/system/morekupe" className={s.more}>
              ДЕТАЛЬНІШЕ
            </NavLink>
          </div>
          <p className={s.systeminfo}>
            Ковзаючі вздовж стіни двері – принцип відкривання дверей, який
            відомий кожному. Конструктив системи може бути з однією і двома
            стулками, де останній виконується як усередині отвору, так і поза
            отвором. У двостулковій системі, всередині отвору, полотна
            знаходяться на одній лінії і кожне полотно при відкритті ховається
            всередину стіни.
          </p>
        </div>
      </div>
      <div className={s.systembox}>
        <div>
          <h1>Книжка 180</h1>
          <div className={s.hover}>
            <img src={knizhka180} alt="" className={s.imgsystem} />
            <div className={s.overlay}></div>
            <NavLink to="/dvery/system/book180" className={s.more}>
              ДЕТАЛЬНІШЕ
            </NavLink>
          </div>
          <p className={s.systeminfo}>
            Компактна та витончена система відкривання, яка може бути виконана
            як з одним дверним полотном, так і двома. Кожне дверне полотно
            складається навпіл при відкритті та прилягає до стіни.
          </p>
        </div>
        <div>
          <h1>Книжка 90</h1>
          <div className={s.hover}>
            <img src={knizhka90} alt="" className={s.imgsystem} />
            <div className={s.overlay}></div>
            <NavLink to="/dvery/system/book90" className={s.more}>
              ДЕТАЛЬНІШЕ
            </NavLink>
          </div>
          <p className={s.systeminfo}>
            Система відкривання, у якій дверне полотно поділено на дві
            асиметричні частини. При відкритті дверей частини полотна
            складаються і зсуваються в одну сторону.
          </p>
        </div>
      </div>
      <div className={s.systembox}>
        <div>
          <h1>Magic</h1>
          <div className={s.hover}>
            <img src={magic} alt="" className={s.imgsystem} />
            <div className={s.overlay}></div>
            <NavLink to="/dvery/system/magic" className={s.more}>
              ДЕТАЛЬНІШЕ
            </NavLink>
          </div>
          <p className={s.systeminfo}>
            MAGIC - опорна безпорогова система ідеально впишеться в житлові
            приміщення. Механізм встановлюється на стіну, а профіль, що держить,
            врізається в дверне полотно. Завдяки цьому дизайнерському рішенню,
            ви не побачите жодних напрямних на стіні. Що, безперечно, вигідно
            позначається на загальному естетичному враженні від інтер'єру.
          </p>
        </div>
        <div>
          <h1>Argon</h1>
          <div className={s.hover}>
            <img src={argon} alt="" className={s.imgsystem} />
            <div className={s.overlay}></div>
            <NavLink to="/dvery/system/argon" className={s.more}>
              ДЕТАЛЬНІШЕ
            </NavLink>
          </div>
          <p className={s.systeminfo}>
            Відмінне альтернативне рішення класичним дверям. Механізм у цій
            системі влаштований так, що дверне полотно своїм центром
            притискається до однієї зі сторін отвору, дозволяючи вам відчиняти
            двері як на себе, так і від себе. Система застосовується тільки до
            каркасних дверей і може бути виконана з одним або двома стулками.
          </p>
        </div>
      </div>
      <div className={s.systembox}>
        <div>
          <h1>Прихована наружна</h1>
          <div className={s.hover}>
            <img src={prihnar} alt="" className={s.imgsystem} />
            <div className={s.overlay}></div>
            <NavLink to="/dvery/system/outside" className={s.more}>
              ДЕТАЛЬНІШЕ
            </NavLink>
          </div>
          <p className={s.systeminfo}>
            Конструктив короба даної системи дозволяє встановити дверне полотно
            врівень зі стіною, без обрамлення прорізу наличниками, створюючи тим
            самим ефект невидимих дверей, який може бути посилений якщо стіна
            буде містити колір або фактуру, що не відрізняється від фактури або
            кольору дверей.
          </p>
        </div>
        <div>
          <h1>Прихована інсайд</h1>
          <div className={s.hover}>
            <img src={prihinside} alt="" className={s.imgsystem} />
            <div className={s.overlay}></div>
            <NavLink to="/dvery/system/inside" className={s.more}>
              ДЕТАЛЬНІШЕ
            </NavLink>
          </div>
          <p className={s.systeminfo}>
            Система прихованих дверей – одне з найактуальніших на сьогоднішній
            день рішень у дизайні інтер'єру. До недавнього часу існувало
            обмеження-двері можна було встановити лише з відкриттям назовні.
            Нова система розроблена спеціально для вирішення цієї проблеми -
            тепер двері отримали можливість відчинення всередину отвору.
          </p>
        </div>
      </div>
    </>
  );
};

export default Systemopen;
