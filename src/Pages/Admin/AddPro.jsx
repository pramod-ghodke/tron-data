import React, {useState} from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "../../App.css";

const Admin = () => {

  const [user, setUser]=useState({
    title:"", image:"", intro1:"", intro2:"", youtube:""
  });
  let name, value;
  const handleInputs =(e)=>{
    console.log(e);
    name=e.target.name;
    value=e.target.value;
    setUser({...user, [name]:value});
  }

  const PostData= async(e)=>{
     e.preventDefault();
     const{title, image, intro1, intro2, youtube}= user;
  }

  return (
    <div className="pt-5">
      <Container className="mt-5">
        <h1>Hey Admin, Welcome.</h1>
        <Row className="gx-5 admin">
    
  
            <Col md={6}>
   
              <Form.Group className="mb-3 mb-md-4">
                <Form.Label><strong>Title</strong></Form.Label>
                <Form.Control type="text" name="title" placeholder="Enter Blog title" 
                value={user.title} onChange={handleInputs}/>
              </Form.Group>
              <Form.Group controlId="formFile" className="mb-3 mb-md-4">
                <Form.Label><strong>Upload Blog Image</strong></Form.Label>
                <Form.Control type="text" name="image" placeholder="Enter Image Link" 
                value={user.image} onChange={handleInputs}/>
              </Form.Group>
              <Form.Group className="mb-3 mb-md-4">
                <Form.Label><strong>Introduction</strong></Form.Label>
                <Form.Control
                  as="textarea"
                  style={{ height: "100px" }}
                  type="text"
                  name="intro1"
                  placeholder="Enter first pargraph of introduction"
                  className="textarea"
                  value={user.intro1} onChange={handleInputs}
                />
              </Form.Group>
            </Col>

            <Col md={6}>
            <Form.Group className="mb-3 mb-md-4">
                <Form.Label><strong>Introduction-2</strong></Form.Label>
                <Form.Control
                  as="textarea"
                  style={{ height: "100px" }}
                  type="text"
                  name="intro2"
                  placeholder="Enter Second paragraph of introduction"
                  className="textarea"
                  value={user.intro2}  onChange={handleInputs}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label><strong>Youtube vedio</strong></Form.Label>
                <Form.Control type="text" name="youtube" placeholder="Enter Link Here" 
                value={user.youtube} onChange={handleInputs}/>
              </Form.Group>
              <Button className="" onClick={PostData}>Add Project</Button>
          
            </Col>
    

 
        </Row>
      </Container>
    </div>
  );
};

export default Admin;
