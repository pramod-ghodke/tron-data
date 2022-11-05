import React from 'react'

import { useLocation } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap';


const SingleBlogPage = () => {
const location = useLocation();
const {title, img, description} = location.state;
console.log(title)
  return (
<>
    <Container className="singlepage">
      <Row>
        <Col md={10}>
        <h1>{title}</h1>
        <img src={img} alt="dsdsd" className='img-fluid mb-3'/>
        <p>{description}</p>
        </Col>
      </Row>
    </Container>
    
    </>
  )
}

export default SingleBlogPage;