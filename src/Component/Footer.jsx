import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';
import { LinkContainer } from "react-router-bootstrap";
import '../App.css';

import footerimg from '../Assets/footer-img.png';

const Footer = () => {
  return (
    <footer className='pt-4 pb-4'>

        <Container fluid>
            <Row>
            <Col md={2} className="mb-4 mb-md-0 text-center">
             <img src={footerimg} alt="footer-scetion"  className='img-fluid'/>
            </Col>
            <Col md={4} className="mb-3 mb-md-0">
            <h5 className="mb-2">Company</h5>
            <p className='mb-2'>Established in 2018, with purpose driven mission for change in engineering and tech domains.</p>
            <p>Pune based edtech startup with young enterprenureship and energetic attitude towards our mission.</p>
            </Col>

            <Col md={2} className="mb-4 mb-md-0">
            <h5 className="mb-2">Socials</h5>
             <div>
              <a href="https://www.instagram.com" target="_blank"><Icon.Instagram className="me-2"/>Instagram</a>
              <a href="https://www.facebook.com" target="_blank"><Icon.Facebook className="me-2"/>Facebook</a>
              <a href="https://www.youtube.com" target="_blank"><Icon.Youtube className="me-2"/>Youtube</a>
            </div>
            </Col>

            <Col md={4} className="mb-4 mb-md-0">
            <h5 className="mb-2">Contact</h5>
              <a href="tel:8830153805" target="_blank"><Icon.Telephone className="me-2"/>+91 88301 53805</a>
              <a href="mailto:shubhamubale1803@gmail.com" target="_blank"><Icon.Envelope className="me-2"/>shubhamubale1803@gmail.com</a>
              <a href="https://goo.gl/maps/goyaCDdMYGP4Ce3F9" target="_blank"><Icon.Building className="me-2"/>Sinhgad Campus, Wadgaon BK, Pune-411041</a>
            </Col>
            <h6 className='text-center p-0 mt-2 m-0'>Tronix365 | 2022 | &copy; All Rights Reserved</h6>
            </Row>
        </Container>

    </footer>
  )
}

export default Footer;