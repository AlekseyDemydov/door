import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import s from './Grid.module.scss';
import one from '../img/one.jpg';
import two from '../img/two.jpg';
import three from '../img/three.jpg';
import four from '../img/four.jpg';
import five from '../img/five.jpg';
import six from '../img/six.jpg';

function Profilfive() {
  return (
    <Container className={s.cont}>
      <Row>
        <Col className={s.col}>
          <img src={one} alt="" className={s.doorimg} />{' '}
          <p>МОДЕЛЬ 1</p>
        </Col>
        <Col className={s.col}>
          <img src={two} alt="" className={s.doorimg} />{' '}
          <p>МОДЕЛЬ 2</p>
        </Col>
        <Col className={s.col}>
          <img src={three} alt="" className={s.doorimg} />{' '}
          <p>МОДЕЛЬ 3</p>
        </Col>
        <Col className={s.col}>
          <img src={four} alt="" className={s.doorimg} />{' '}
          <p>МОДЕЛЬ 4</p>
        </Col>
        <Col className={s.col}>
          <img src={five} alt="" className={s.doorimg} />{' '}
          <p>МОДЕЛЬ 5</p>
        </Col>
        <Col className={s.colsk}>
          <img src={six} alt="" className={s.doorimgsk} />{' '}
          <p>РУЧКА СКОБА </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Profilfive;
