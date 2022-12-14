
import React from 'react';
import { Card,  Col, Row , } from 'react-bootstrap';
import { Link, Navigate } from 'react-router-dom';
import './CourseCard.css'


const CourseCade = (props) => {
    const course=props.course
    const {id, img , time, category}= course;
console.log(course)
    const handledata=(id)=>{
      Navigate(`/courses/${id}`)
    }


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
              
              <button onClick={()=> handledata(id)}>

              <Link to={`/courses/${id}`} course={course} className="btn btn-primary">    Details</Link>
              </button>
               
                
             
              </Card.Body>
        </Col>
              
              
            </Card>
          </Col>
        
      </Row>
    );
};

export default CourseCade;