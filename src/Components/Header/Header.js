import React, { useContext, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import '../Header/Header.css'
import ReactThemeToggleButton from '../ReactThemeToggle';
import logo from '../../logo.jpg'
import { AuthContext } from '../../Context/UserContext';



const Header = () => {
    const [isDark, setIsDark] = useState(false);
    const {user}= useContext(AuthContext)

     
    return (
      


        
        <Navbar bg="dark" expand="lg">
        <Container className="nevNew">
        <h4 className='text-white mr-4'>{user?.name}</h4>
        <img className="ml-5" src={logo} alt="" />
          <Navbar.Brand className='active' href="/">
         
           Modern Tech</Navbar.Brand>
        
          
       
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav ">
            <Nav className="me-end item">
            <NavLink  className={({ isActive, isPending }) => {return isActive ? "active" :  "text-white"}} to='/' >Home</NavLink>
            <NavLink className={({ isActive, isPending }) => {return isActive ? "active" :  "text-white"}} to='/courses'>Course</NavLink>
            <NavLink  className={({ isActive, isPending }) => {return isActive ? "active" :  "text-white"}} to='/blog' >Blog</NavLink>
            <NavLink className={({ isActive, isPending }) => {return isActive ? "active" :  "text-white"}} to='faq'>Faq</NavLink>
            <NavLink className={({ isActive, isPending }) => {return isActive ? "active" :  "text-white"}} to='login'>Login</NavLink>

            </Nav>
            <ReactThemeToggleButton isDark={isDark} onChange={() => setIsDark(prevIsDark => !prevIsDark)} />
          </Navbar.Collapse>
      
        </Container>
      </Navbar>
    );
};

export default Header;