import Container from 'react-bootstrap/Container';
import { NavLink } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import s from './Grid.module.scss';
import one from '../img/1ax.png';
import two from '../img/2av.png';
import three from '../img/3ag.png';
import four from '../img/4agn.jpg';
import five from '../img/5AGP.png';
import six from '../img/6agk.png';
import peregorodka from '../img/7peregorodki.jpg';
import eight from '../img/8PA.png';
import nine from '../img/9PЕ.png';
import ten from '../img/10PW.png';
import eleven from '../img/11PM.png';
import twelve from '../img/12P.png';
import thirteen from '../img/13М.jpg';
import fourteen from '../img/14U.jpg';
import fifteen from '../img/15N.png';
import sixteen from '../img/16NA.png';

function AutoLayoutExample() {
  return (
    <Container>
      <Row>
        <NavLink to="/door/catalog/ax" 
        className={s.col}>
          <img src={one} alt="" className={s.doorimg} />{' '}
          <button type="button" className={s.doorbtn}>
            AX
          </button>
        </NavLink>
        <NavLink to="/door/catalog/av" 
        className={s.col}>
          <img src={two} alt="" className={s.doorimg} />{' '}
          <button type="button" className={s.doorbtn}>
            AV
          </button>
        </NavLink>
        <NavLink to="/door/catalog/ag" 
        className={s.col}>
          <img src={three} alt="" className={s.doorimg} />{' '}
          <button type="button" className={s.doorbtn}>
            AG
          </button>
        </NavLink>
        <NavLink to="/door/catalog/agn" 
        className={s.col}>
          <img src={four} alt="" className={s.doorimg} />{' '}
          <button type="button" className={s.doorbtn}>
            AGN
          </button>
        </NavLink>
        <NavLink to="/door/catalog/agp" 
        className={s.col}>
          <img src={five} alt="" className={s.doorimg} />{' '}
          <button type="button" className={s.doorbtn}>
            AGP
          </button>
        </NavLink>
        <NavLink to="/door/catalog/agk" 
        className={s.col}>
          <img src={six} alt="" className={s.doorimg} />{' '}
          <button type="button" className={s.doorbtn}>
            AGK
          </button>
        </NavLink>
      </Row>

      <Row>
        <NavLink to="/door/peregorodki" 
        className={s.col}>
          <img src={peregorodka} alt="" className={s.doorimg} />{' '}
          <button type="button" className={s.doorbtn}>
            Перегородки
          </button>
        </NavLink>
        <NavLink to="/door/catalog/pa" 
        className={s.col}>
          <img src={eight} alt="" className={s.doorimg} />{' '}
          <button type="button" className={s.doorbtn}>
            PA
          </button>
        </NavLink>
        <NavLink to="/door/catalog/pe" 
        className={s.col}>
          <img src={nine} alt="" className={s.doorimg} />{' '}
          <button type="button" className={s.doorbtn}>
            PE
          </button>
        </NavLink>
        <NavLink to="/door/catalog/pw" 
        className={s.col}>
          <img src={ten} alt="" className={s.doorimg} />{' '}
          <button type="button" className={s.doorbtn}>
            PW
          </button>
        </NavLink>
        <NavLink to="/door/catalog/pm" 
        className={s.col}>
          <img src={eleven} alt="" className={s.doorimg} />{' '}
          <button type="button" className={s.doorbtn}>
            PM
          </button>
        </NavLink>
        <NavLink to="/door/catalog/p" 
        className={s.col}>
          <img src={twelve} alt="" className={s.doorimg} />{' '}
          <button type="button" className={s.doorbtn}>
            P
          </button>
        </NavLink>
      </Row>

      <Row>
        <NavLink to="/door/catalog/m" 
        className={s.col}>
          <img src={thirteen} alt="" className={s.doorimg} />{' '}
          <button type="button" className={s.doorbtnq}>
            M
          </button>
        </NavLink>
        <NavLink to="/door/catalog/u" 
        className={s.col}>
          <img src={fourteen} alt="" className={s.doorimg} />{' '}
          <button type="button" className={s.doorbtnq}>
            U
          </button>
        </NavLink>
        <NavLink to="/door/catalog/n" 
        className={s.col}>
          <img src={fifteen} alt="" className={s.doorimg} />{' '}
          <button type="button" className={s.doorbtnq}>
            N
          </button>
        </NavLink>
        <NavLink to="/door/catalog/na" 
        className={s.col}>
          <img src={sixteen} alt="" className={s.doorimg} />{' '}
          <button type="button" className={s.doorbtnq}>
            NA
          </button>
        </NavLink>
      </Row>
    </Container>
  );
}

export default AutoLayoutExample;
