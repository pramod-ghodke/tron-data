import React, {useState} from "react";
import { Container, Row, Col, Accordion, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import AdminTopNav from "./AdminTopNav";
import AddPro from './AddPro';
import EditPro from "./EditPro";

const Dashboard = () => {

    const [Active, setActive] = useState();

  return (
    <>
      <AdminTopNav />
      <div>
        <Container fluid className="pt-5">
         <Row>
         <Col md={3} className="sidenav pt-5">
         <Accordion defaultActiveKey="0" flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Project</Accordion.Header>
        <Accordion.Body>
          <Button className="btn-block mb-2" onClick={ () => setActive("AddPro")}>Add Porject</Button>
          <Button className="d-block mb-2"  onClick={ () => setActive("EditPro")}>Edit Porject</Button>
            <Button className="d-block mb-2">Delete Porject</Button>
 
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
         </Col>

         <Col md={9}>
         {Active==="AddPro" && <AddPro/>}
         {Active==="EditPro" && <EditPro/>}
         </Col>
         </Row>
        </Container>
      </div>
    </>
  );
};

export default Dashboard;
