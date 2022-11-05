import React from 'react';
import {Container, Row, Col, Form, FloatingLabel, Button} from 'react-bootstrap';

import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as Icon from 'react-bootstrap-icons';


const Contact = () => {

  const notify = () => toast.success("Submitted Successfully!");
  const notsend = () => toast.error("Not sent, Please try again");

function sendEmail(e){
  e.preventDefault();
 
  emailjs.sendForm('service_ffcf1qc', 'template_92o217j', e.target, 'thTkJrIEteaNtY8ph')
  .then(res=>{
    console.log(res)
    notify()
  }).catch(err=>{console.log(err);
     notsend()
    });
   e.target.reset();
}
  return (
    <>
    <div className="contact">
      <ToastContainer  className="p-3"/>
    <Container >
      <Row className='mb-5'>
        <div data-aos="fade-up">
          <p className='pre-headline'>CONTACT</p>
          <h1 className='mb-3 headline'>ENQUIRE NOW</h1>
        </div>
 
          <Col md={7}>
          <Form onSubmit={sendEmail} class="contact-form">
            
            <FloatingLabel
               controlId="floatingInput"
               label="Name"
               className="mb-3" data-aos="fade-up" data-aos-delay="100">
               <Form.Control type="name" name="name" placeholder="name" required />
           </FloatingLabel>
           <FloatingLabel
               controlId="floatingInput"
               label="Mobile Number"
               className="mb-3" data-aos="fade-up" data-aos-delay="200">
               <Form.Control type="tel" name="mobile" placeholder="Mobile Number" required/>
           </FloatingLabel>
           <FloatingLabel
               controlId="floatingInput"
               label="Email"
               className="mb-3" data-aos="fade-up" data-aos-delay="300">
               <Form.Control type="email" name="email" placeholder="name@example.com" required/>
           </FloatingLabel>
           <FloatingLabel controlId="floatingTextarea2" label="Message" data-aos="fade-up" data-aos-delay="400">
           <Form.Control
             as="textarea"
             placeholder="Leave a comment here"
             name="message"
             style={{ height: '70px' }}/>
            </FloatingLabel>
           <Button type="submit" className="buttonfx slideleft mt-3" data-aos="fade-up" data-aos-delay="500">Submit</Button>
        </Form>
        </Col>

        <Col md={5} className="mt-5 mt-md-0">
          <div className="d-flex align-items-center mb-4">
          <a href="tel:8830153805" target="_blank"><Icon.Telephone className="me-2 contact-icon" width={24} height={24}/> 
            <h5 className='m-0'>+91 883015 53805</h5></a>
          </div>
          <div className="d-flex align-items-center mb-4">
          <a href="mailto:shubhamubale1803@gmail.com" target="_blank"><Icon.Envelope className="me-2 contact-icon" width={24} height={24}/> 
            <h5 className='m-0'>shubhamubale1803@gmail.com</h5></a>
          </div>
          <div className="d-flex align-items-center mb-4">
          <a href="https://goo.gl/maps/goyaCDdMYGP4Ce3F9" target="_blank"><Icon.Building className="me-2 contact-icon" width={24} height={24}/> 
            <h5 className='mb-0'>office: Pune-411041</h5></a>
          </div>
          <div className="d-flex align-items-center mb-4">
          <a href="https://goo.gl/maps/dUAMstB6uF4PquY26" target="_blank"><Icon.Building className="me-2 contact-icon" width={24} height={24}/> 
            <h5 className='mb-0'>Headquarters: Latur-413512</h5></a>
          </div>
        </Col>
     </Row>
    </Container>

   
  <div className="collab" data-aos="fade-up">
      <div className="collab-text">
        <Container>
          <Row className='text-center justify-content-center'>
            <Col md={9}>
              <h1 className="headline">Have an Idea, <br/>looking for collab?</h1>
              <p>looking for passioante team to collab, you search is is end here!</p>
                <Button className="buttonfx slideleft">Book Appointment</Button>
            </Col>
        </Row>
      </Container>
    </div>
  </div>
    
       
  </div>
  
 
</>
  )
}

export default Contact;