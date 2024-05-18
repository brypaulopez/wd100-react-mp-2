import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import Logo from "../img/HeaderLogo.png"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { useState } from "react";

function NavBar() {
  let [color, setColor] = useState({home: "primary", breed: "dark", about: "dark"});
  
  let changeColor = (num) => {
    if (num == 0) {
      setColor({home: "primary", breed: "dark", about: "dark"});
    }
    else if (num == 1){
      setColor({home: "primary", breed: "dark", about: "dark"});
    }
    else if (num == 2) {
      setColor({home: "dark", breed: "primary", about: "dark"});

    }
    else {
      setColor({home: "dark", breed: "dark", about: "primary"});
    }
  }
  return (
    <Navbar expand="lg" className="bg-light sticky-top" id='NavBar'>
      <Container>
        <Navbar.Brand><Link to='/wd100-react-mp-2/' onClick={()=> changeColor(0)} className={`text-${color.home}`}><img src={Logo} alt="" id='HeaderLogo'/></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link><Link to='/wd100-react-mp-2/' onClick={()=> changeColor(1)} className={`text-${color.home}`}>Home</Link></Nav.Link>
            <Nav.Link><Link to='/wd100-react-mp-2/search' onClick={()=> changeColor(2)} className={`text-${color.breed}`}>Breeds A-Z</Link></Nav.Link>
            <Nav.Link><Link to='/wd100-react-mp-2/about' onClick={()=> changeColor(3)} className={`text-${color.about}`}>About Us</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;