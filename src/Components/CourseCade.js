
import React from 'react';
import { Card, CardGroup, Col, ListGroup, Row , Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CourseCard.css'
const CourseCade = (props) => {
    const course=props.course
    const {img , time, category}= course;
    return (
        <Row  className="g-4">
        
          <Col className="d-flex">
            <Card >
            <Col>
            <Card.Img className="img" variant="top" src={img} />
            </Col>
        <Col>
        <Card.Body>
                <Card.Title>{category}</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
                <h4> {time}</h4>
                <Link className="btn btn-primary"> Details</Link>
              </Card.Body>
        </Col>
              
              
            </Card>
          </Col>
        
      </Row>
    );
};

export default CourseCade;