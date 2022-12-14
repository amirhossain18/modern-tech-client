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
    const {user , logout}= useContext(AuthContext)
  
 const handleLogOut= ()=>{
  logout()
  .then(()=>{})
  .catch(err=>console.log(err))
 }
     
    return (
      



        
        <Navbar bg="light" expand="lg">
        <Container className="nevNew">

        <Nav className="me-end item">
            <NavLink  className={({ isactives, isPending }) => {return isactives ? "actives" :  "text-black"}} to='/' >Home</NavLink>
            <NavLink className={({ isactives, isPending }) => {return isactives ? "actives" :  "text-black"}} to='/courses'>Course</NavLink>
            <NavLink  className={({ isactives, isPending }) => {return isactives ? "actives" :  "text-black"}} to='/blog' >Blog</NavLink>
            <NavLink className={({ isactives, isPending }) => {return isactives ? "actives" :  "text-black"}} to='faq'>Faq</NavLink>
          

            </Nav>

       
   
        
          
       
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav ">
          <h4 className='text-black mr-4'>{}</h4>
      
      <img className="ml-5" src={logo} alt="" />
        <Navbar.Brand className='active' href="/">
       
         Modern Tech</Navbar.Brand>
            <ReactThemeToggleButton isDark={isDark} onChange={() => setIsDark(prevIsDark => !prevIsDark)} />
          </Navbar.Collapse>
      
        </Container>
        {
  user?.uid ? 
  <>
    <span>{user.displayName}  </span> : {user.email}
    <button className="btn btn-danger" onClick={handleLogOut}>Sign Out</button>
   
  </>
   :
 <div className="btn btn-success text-white">
 <NavLink   className={({ isactives, isPending }) => {return isactives ? "actives" :  "text-white"}} to='login'>Login</NavLink>
 </div>
}
      </Navbar>
    );
};

export default Header;