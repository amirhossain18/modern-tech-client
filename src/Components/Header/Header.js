import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import '../Header/Header.css'
import ReactThemeToggleButton from '../ReactThemeToggle';




const Header = () => {
    const [isDark, setIsDark] = useState(false);
  

     
    return (
      


        
        <Navbar bg="dark" expand="lg">
        <Container>
        <Navbar.Brand href="#home">
            <img
              src="/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto item">
            <NavLink  className={({ isActive, isPending }) => {return isActive ? "active" :  "text-white"}} to='/' >Home</NavLink>
            <NavLink className={({ isActive, isPending }) => {return isActive ? "active" :  "text-white"}} to='/courses'>Course</NavLink>
            <NavLink  className={({ isActive, isPending }) => {return isActive ? "active" :  "text-white"}} to='/blog' >Blog</NavLink>
            <NavLink className={({ isActive, isPending }) => {return isActive ? "active" :  "text-white"}} to='faq'>Faq</NavLink>
            <NavLink className={({ isActive, isPending }) => {return isActive ? "active" :  "text-white"}} to='login'>Login</NavLink>

            </Nav>
          </Navbar.Collapse>
          <ReactThemeToggleButton isDark={isDark} onChange={() => setIsDark(prevIsDark => !prevIsDark)} />
        </Container>
      </Navbar>
    );
};

export default Header;