import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import founder from '../Assets/about-img.png';

const About = () => {
  return (
    <>
    <div className="pt-5 about-hero" data-aos="fade-up" data-aos-duration="500">
    </div>

    <div className='pt-5'>
      <Container>
        <Row>
          
          <Col md={6} className="mb-0 mb-md-4" data-aos="fade-up">
            <div>
           <p className='pre-headline'>OVERVIEW</p>
            <h1 className='mb-2 headline'>COMPANY</h1>
            <p className='mb-2'>Tronix365 is dream by founders and team with fire in belly, who initiated a platform which is
              providing best quality products and components at affordable rates.</p>
              <p> We started our journey in 2018 and counting legacy ahead to deliver quality content to our audience</p>
            <p>Pune based edtech startup with young enterprenureship and energetic attitude towards changing engineers lives.</p>
            <p>We firmly believe that our customers are the reason for our existence, and greatly respect the trust that they place in us. We grow through creativity and innovation. We integrate honesty, integrity and business ethics into all aspects of our business functioning.</p>
            </div>
           
            </Col>
            <Col data-aos="fade-up" className="align-items-end d-flex">
            <img src={founder} alt="about-founder" className='img-fluid'/>
            </Col>
          </Row>
        </Container>
        </div>

    </>
  )
}

export default About;