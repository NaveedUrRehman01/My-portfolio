import { NavLink } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'
import logo from '../images/NA.png'
function Navigationbar() {
  return (
    <ul class="nav justify-content-center">
  <li class="nav-item">
    <NavLink exact activeClassName='active' class="nav-link" aria-current="page" to="/"><img src={logo} alt="logo" id='image' /></NavLink>
  </li>
  <li class="nav-item">
    <NavLink exact activeClassName='active' class="nav-link" to="/">Home</NavLink>
  </li>
  <li class="nav-item">
    <NavLink exact activeClassName='active' class="nav-link" to="/projects">Projects</NavLink>
  </li>
  <li class="nav-item">
    <NavLink exact activeClassName='active' class="nav-link" to="/services">Services</NavLink>
  </li>
  <li class="nav-item">
    <NavLink exact activeClassName='active' class="nav-link" to="/resume">Resume</NavLink>
  </li>
  <li class="nav-item">
    <NavLink exact activeClassName='active' class="nav-link" to="/about">About</NavLink>
  </li>
  <li class="nav-item">
    <NavLink exact activeClassName='active' class="nav-link" to="/contact">Contact</NavLink>
  </li>
</ul>
  );
}

export default Navigationbar;