import React from 'react';
import Header from '../Header/Header';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Sidevar from '../SideBar/Sidevar';
const Main = () => {
    return (
        <div>
              <Header></Header>
            <Container>
          
            <Row >
        <Col className="col-lg-8 b"><Outlet></Outlet></Col>
        <Col className="col-lg-4"> 
        <Sidevar></Sidevar>
         </Col>
      </Row>
      
   
            </Container>
          <Footer></Footer>
            
        </div>
    );
};

export default Main;