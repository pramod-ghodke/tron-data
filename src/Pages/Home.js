import React from 'react';
import {Container, Row, Col, Button}  from 'react-bootstrap';
import '../App.css';


import herofloat from '../Assets/hero-float.png';
import media from '../Assets/exp.png';
import project from '../Assets/projects3D.png';
import seminar from '../Assets/seminars.png';
import blog from '../Assets/blogs.png';
import * as Icon from 'react-bootstrap-icons';



//import { store } from './Details'


const Home = () => {

/*const [detail, setDetail] = useContext(store);*/
  return (

    <>
      <div className='hero'>
          <div className='hero-text'>
            <div data-aos="zoom-in"><img src={herofloat} alt="floating" className='vert-move mb-3'/></div>
            <div data-aos="fade-up" data-aos-offset="10">
            <h1>Welcome to the worlds smartest engineering community</h1>
            <p className='mt-3'>PROJECTS | KITS | SEMINARS | BLOGS | +MUCH MORE</p>
            <Button href="#exp" className="hero-btn mt-3">Explore us</Button>
            </div>
          </div>
      </div>

    <div className='exp mt-5' id="exp">
      <Container>
        <Row className="text-center justify-content-center" data-aos="fade-up">
          <Col md={8}>
            <h1>DELIRVERING IDEAS !</h1>
            <p>We have legacy delievering top-notch industry experiences and solutions. Projects made by our expert and experinced team and solutions definately impact in your visions. </p>
          </Col>
          </Row>

          <Row className="justify-content-center mt-2">
          <Col md={4}>
            <img src={media} alt="media-experience-3D" className='img-fluid' data-aos="fade-up"/>
          </Col>
        </Row>
      </Container>
    </div>

 {/* ------ PROJECTS Section Started --------------- */}
    <div className='projects pt-5 pb-5'>
      <Container>
        <Row data-aos="fade-up">
          <p>PROJECTS</p>
          <Col md={7}>
            <h1 className='mb-2'>ENGINEERING PROJECTS</h1>
            <div className='projects-li ms-3'>
              <p className='mb-4'>We have team of experienced codres and engineers who consitently work on innovative ideas to deliver you unique and modern industry projects. </p>
                <div className='d-flex mb-3 align-items-center'><Icon.Laptop className='projects-icon'/> <p>Comp/IT Projects</p></div>
                <div className='d-flex mb-3 align-items-center'><Icon.Plugin className='projects-icon'/> <p>Electronic Projects</p></div>
                <div className='d-flex mb-3 align-items-center'><Icon.Sliders className='projects-icon'/><p>Custom Projects</p></div>
                <div className='d-flex align-items-center'><Icon.Lightbulb className='projects-icon'/><p>Innovative Mini-Projects</p></div>
             </div>
          </Col>

          <Col md={4}>
                <img src={project} alt="projects-3D" className='img-fluid'/> 
          </Col>
        </Row>
     </Container>
    </div>

 {/* ------ SEMINAR Section Started --------------- */}
    <div className="seminars mt-5 mb-5">
      <Container>
        <Row data-aos="fade-up">
          <p>SEMINARS</p>
          <Col md={6}>
            <h1 className='mb-2'>COMMUNITY SEMINARS</h1>
            <div className='seminars-li ms-3'>
            <p className='mb-4'>"you have a idea, and you cant present it". The worse problem with our generation. But don't worry, we have the solution for this too. our followings seminars not only make able to develope ideas, but also gives cofident to present it. </p>
            <div className='d-flex mb-3 align-items-center'><Icon.People className='seminars-icon'/> <p>Group Interractive Sessions</p></div>
            <div className='d-flex mb-3 align-items-center'><Icon.PersonVideo className='seminars-icon'/> <p>Personlised Solutions</p></div>
            </div>
          
          </Col>
          <Col md={5}>
                <img src={seminar} alt="seminar-3D" className='img-fluid'/> 
          </Col>
        </Row>
      </Container>
    </div>

 {/* ------ BLOG Section Started --------------- */}
    <div className="blogs pt-5 pb-5">
      <Container>
        <Row data-aos="fade-up">
          <p>BLOGS</p>
          <Col md={6}>
            <h1 className='mb-2'>SORTED DOGITAL CONTENT</h1>
            <div className='seminars-li ms-3'>
            <p className='mb-4'>"you have a idea, and you cant present it". The worse problem with our generation. But don't worry, we have the solution for this too. our followings seminars not only make able to develope ideas, but also gives cofident to present it. </p>
            <div className='d-flex mb-3 align-items-center'><Icon.People className='seminars-icon'/> <p>Group Interractive Sessions</p></div>
            <div className='d-flex mb-3 align-items-center'><Icon.PersonVideo className='seminars-icon'/> <p>Personlised Solutions</p></div>
            {/*<LinkContainer to="/about"><Button  className="buttonfx slideleft">Read Blogs</Button></LinkContainer>*/}
            </div>
          
          </Col>
          <Col md={5}>
                <img src={blog} alt="Blog-3D" className='img-fluid'/> 
          </Col>
        </Row>
      </Container>
    </div>

   {/* ------ Much More Started --------------- */}

    <div className='much-more mt-5 mb-5'>
      <Container>
        <Row className="text-center justify-content-center" data-aos="fade-up">
          <Col md={10}>
          <p>+MUCH MORE</p>
          <h1>WE NEVER STOP INNOVATING</h1>
          <p className='muchmore-li'>We are daily working to add-on new exciting features and campaign to make our community creative. </p>
          </Col>
        </Row>
      </Container>

    </div>

{/* ------ Much More Started --------------- */}



   </>
  )
}

export default Home;