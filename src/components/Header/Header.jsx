import { useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import './Style.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import logo from './img/logodoorr.jpg'
import s from './Header.module.scss'

const Header = () => {
  const location = useLocation();
  const [expanded, setExpanded] = useState(false);

  const handlerActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  const handleNavClick = () => {
    setExpanded(false); // Закрити бургер-меню після кліку на вкладку
  };

  const settings = {
    fixed: 'top',
  };

  return (
    <Navbar
      {...settings}
      collapseOnSelect
      expand="lg"
      style={{ backgroundColor: '#b68743' }}
      variant="light"
      className="shadow-sm"
      expanded={expanded}
    >
      <Container>
        <Navbar.Brand className="fs-1" as={Link} to="/door">
          <img src={logo} alt="logo" className={s.logomain} />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => setExpanded(!expanded)}
        />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end" >
          <Nav activeKey={location.pathname}>
            <Nav.Link
              className={handlerActive('/door')}
              as={Link}
              to="/door"
              onClick={handleNavClick}
              style={{fontWeight: 'bold', borderBottom: handlerActive('/door') ? '1px solid rgb(8, 7, 7)' : ''}}
            >
              Головна
            </Nav.Link>
            <Nav.Link
              className={handlerActive('/door/catalog')}
              as={Link}
              to="/door/catalog"
              onClick={handleNavClick}
              style={{fontWeight: 'bold', borderBottom: location.pathname.includes('/door/catalog') ? '1px solid rgb(8, 7, 7)' : ''}}
            >
              Каталог
            </Nav.Link>
            <Nav.Link
              className={handlerActive('/door/system')}
              as={Link}
              to="/door/system"
              onClick={handleNavClick}
              style={{fontWeight: 'bold', borderBottom: location.pathname.includes('/door/system') ? '1px solid rgb(8, 7, 7)' : ''}}
            >
              Системи відкривання
            </Nav.Link>
            <Nav.Link
              className={handlerActive('/door/projects')}
              as={Link}
              to="/door/projects"
              onClick={handleNavClick}
              style={{fontWeight: 'bold', borderBottom: location.pathname.includes('/door/projects') ? '1px solid rgb(8, 7, 7)' : ''}}
            >
              Проекти
            </Nav.Link>
            <Nav.Link
              className={handlerActive('/door/contacts')}
              as={Link}
              to="/door/contacts"
              onClick={handleNavClick}
              style={{fontWeight: 'bold', borderBottom: location.pathname.includes('/door/contacts') ? '1px solid rgb(8, 7, 7)' : ''}}
            >
              Контакти
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;