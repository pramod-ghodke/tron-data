import React, { useContext } from 'react';
import { Container, Row, Col,Tabs, Tab } from 'react-bootstrap';

import Details, { store } from './Details';
import Card from '../Component/Card';



const Projects = () => {
    const [detail] = useContext(store);
    console.log(Details);
    return (
        <>
        <Container className='main-container'>
            <Row data-aos="fade-up">
            <p className='p'>BLOGS</p>
            <h1 className='mb-3'>READ OUR BLOGS</h1>
                <Col lg={12} >

                <Tabs defaultActiveKey="home" id="justify-tab-example" className="mb-3">
                    <Tab eventKey="home" title="Home">
                        <Row>
                          <Col md={6}>
                            {
                              detail.filter((article) => { return article.category === "Bollywood3" }).map((n) => (
                                <Card
                                articleid={n.id}
                                imgUrl={n.Image}
                                title={n.title}
                                description={n.description}
                                author={n.author}
                                />
                                ))
                                }
                            </Col>
                          </Row>
                           
                            </Tab>
                            <Tab eventKey="profile" title="Profile">
                            {
                             detail.filter((article) => { return article.category === "iot" }).map((n) => (
                            <Card
                                articleid={n.id}
                                imgUrl={n.Image}
                                title={n.title}
                                description={n.description}
                                author={n.author}
                            />
                        ))
                    }
                  
                    </Tab> 
                          
                           
                </Tabs>
                 
                    {
                        detail.filter((article) => { return article.category === "Bollywood" }).map((n) => (
                            <Card
                                articleid={n.id}
                                imgUrl={n.Image}
                                title={n.title}
                                description={n.description}
                                author={n.author}
                            />
                        ))
                    }
                </Col>
                <Col lg={6}>
              
                    {
                        detail.filter((article) => { return article.category === "Bollywood2" }).map((n) => (
                            <Card
                                articleid={n.id}
                                imgUrl={n.Image}
                                title={n.title}
                                description={n.description}
                                author={n.author}
                            />
                        ))
                    }
                </Col>

              
            </Row>


        </Container>
 


        
        </>

    )
}
export default Projects;