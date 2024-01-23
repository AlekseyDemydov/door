import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import s from './Grid.module.scss';
import one from '../img/almat.png';
import two from '../img/almatbel.png'
import three from '../img/almatblack.png';
import four from '../img/siranich.png';
import five from '../img/gold.png';
import six from '../img/bronza.png';

function Gridcolor() {
  return (
    <Container className={s.cont}>
      <Row>
        <Col className={s.col}>
          <img src={one} alt="" className={s.doorimg} />{' '}
          <p>АЛЮМІНІЙ МАТОВИЙ</p>
        </Col>
        <Col className={s.col}>
          <img src={two} alt="" className={s.doorimg} />{' '}
          <p>БІЛИЙ МАТОВИЙ RAL 9003</p>
        </Col>
        <Col className={s.col}>
          <img src={three} alt="" className={s.doorimg} />{' '}
          <p>ЧОРНИЙ МАТОВИЙ RAL 9005</p>
        </Col>
        </Row>
        <Row>
        <Col className={s.col}>
          <img src={four} alt="" className={s.doorimg} />{' '}
          <p>СІРА НІЧ</p>
        </Col>
        <Col className={s.col}>
          <img src={five} alt="" className={s.doorimg} />{' '}
          <p>ЗОЛОТО</p>
        </Col>
        <Col className={s.col}>
          <img src={six} alt="" className={s.doorimg} />{' '}
          <p>БРОНЗА</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Gridcolor;
