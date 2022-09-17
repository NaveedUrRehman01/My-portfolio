import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {NavLink} from 'react-router-dom'
import logo from '../images/NA.png'
import './Collapsible.css'
function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark" id='menu'>
      <Container>
        <NavLink to="/"><img src={logo} alt="logo"/></NavLink>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/home" >Home</NavLink>
            <NavLink to="/projects" >Projects</NavLink>
            <NavLink to="/resume" >Resume</NavLink>
            <NavLink to="/services" >Services</NavLink>
          </Nav>
          <Nav>
            <NavLink to="/about">About</NavLink>
            <NavLink eventKey={2} to="/contact">
              Contact
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;