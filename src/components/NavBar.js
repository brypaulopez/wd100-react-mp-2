import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import Logo from "../img/HeaderLogo.png"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-light sticky-top" id='NavBar'>
      <Container>
        <Navbar.Brand href="#home"><img src={Logo} alt="" id='HeaderLogo'/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link><Link to='/' style={{textDecoration: "none"}}>Home</Link></Nav.Link>
            <Nav.Link><Link to='/search'>Breeds A-Z</Link></Nav.Link>
            <Nav.Link href="#link">About Us</Nav.Link>
            <Nav.Link href="#link">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;