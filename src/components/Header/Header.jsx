import { useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Style.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

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
      bg="light"
      variant="light"
      className="shadow-sm"
      expanded={expanded}
    >
      <Container>
        <Navbar.Brand className="fs-1" as={Link} to="/dvery">
          ЛАОЛА
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => setExpanded(!expanded)}
        />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
          <Nav activeKey={location.pathname}>
            <Nav.Link
              className={handlerActive('/dvery')}
              as={Link}
              to="/dvery"
              onClick={handleNavClick}
            >
              Головна
            </Nav.Link>
            <Nav.Link
              className={handlerActive('/dvery/catalog')}
              as={Link}
              to="/dvery/catalog"
              onClick={handleNavClick}
            >
              Каталог
            </Nav.Link>
            <Nav.Link
              className={handlerActive('/dvery/system')}
              as={Link}
              to="/dvery/system"
              onClick={handleNavClick}
            >
              Системи відкривання
            </Nav.Link>
            <Nav.Link
              className={handlerActive('/dvery/projects')}
              as={Link}
              to="/dvery/projects"
              onClick={handleNavClick}
            >
              Проекти
            </Nav.Link>
            <Nav.Link
              className={handlerActive('/dvery/contacts')}
              as={Link}
              to="/dvery/contacts"
              onClick={handleNavClick}
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