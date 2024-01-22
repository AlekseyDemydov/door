import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
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
import seventeen from '../img/17NЕ.png';

function AutoLayoutExample() {
  return (
    <Container>
      <Row>
        <Col className={s.col}>
          <img src={one} alt="" className={s.doorimg} />{' '}
          <button type="button" className={s.doorbtn}>
            AX
          </button>
        </Col>
        <Col className={s.col}>
          <img src={two} alt="" className={s.doorimg} />{' '}
          <button type="button" className={s.doorbtn}>
            AV
          </button>
        </Col>
        <Col className={s.col}>
          <img src={three} alt="" className={s.doorimg} />{' '}
          <button type="button" className={s.doorbtn}>
            AG
          </button>
        </Col>
        <Col className={s.col}>
          <img src={four} alt="" className={s.doorimg} />{' '}
          <button type="button" className={s.doorbtn}>
            AGN
          </button>
        </Col>
        <Col className={s.col}>
          <img src={five} alt="" className={s.doorimg} />{' '}
          <button type="button" className={s.doorbtn}>
            AGP
          </button>
        </Col>
        <Col className={s.col}>
          <img src={six} alt="" className={s.doorimg} />{' '}
          <button type="button" className={s.doorbtn}>
            AGK
          </button>
        </Col>
      </Row>

      <Row>
        <Col className={s.col}>
          <img src={peregorodka} alt="" className={s.doorimg} />{' '}
          <button type="button" className={s.doorbtn}>
            Перегородки
          </button>
        </Col>
        <Col className={s.col}>
          <img src={eight} alt="" className={s.doorimg} />{' '}
          <button type="button" className={s.doorbtn}>
            PA
          </button>
        </Col>
        <Col className={s.col}>
          <img src={nine} alt="" className={s.doorimg} />{' '}
          <button type="button" className={s.doorbtn}>
            PE
          </button>
        </Col>
        <Col className={s.col}>
          <img src={ten} alt="" className={s.doorimg} />{' '}
          <button type="button" className={s.doorbtn}>
            PW
          </button>
        </Col>
        <Col className={s.col}>
          <img src={eleven} alt="" className={s.doorimg} />{' '}
          <button type="button" className={s.doorbtn}>
            PM
          </button>
        </Col>
        <Col className={s.col}>
          <img src={twelve} alt="" className={s.doorimg} />{' '}
          <button type="button" className={s.doorbtn}>
            P
          </button>
        </Col>
      </Row>

      <Row>
        <Col className={s.col}>
          <img src={thirteen} alt="" className={s.doorimg} />{' '}
          <button type="button" className={s.doorbtnq}>
            M
          </button>
        </Col>
        <Col className={s.col}>
          <img src={fourteen} alt="" className={s.doorimg} />{' '}
          <button type="button" className={s.doorbtnq}>
            U
          </button>
        </Col>
        <Col className={s.col}>
          <img src={fifteen} alt="" className={s.doorimg} />{' '}
          <button type="button" className={s.doorbtnq}>
            N
          </button>
        </Col>
        <Col className={s.col}>
          <img src={sixteen} alt="" className={s.doorimg} />{' '}
          <button type="button" className={s.doorbtnq}>
            NA
          </button>
        </Col>
        <Col className={s.col}>
          <img src={seventeen} alt="" className={s.doorimg} />{' '}
          <button type="button" className={s.doorbtnq}>
            NE
          </button>
        </Col>
      </Row>
    </Container>
  );
}

export default AutoLayoutExample;
