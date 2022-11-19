import React, { useState, useRef } from "react";
import {Container, Row, Col, Card,  Form,  InputGroup,  Button,  Spinner} from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import "../../App.css";
import { ToastContainer, toast } from "react-toastify";

import { useNavigate } from "react-router-dom";
import Dashboard from "./Dashboard";

const AdminLogin = () => {
  const [loader, setLoader] = useState(false);
  const [showPassword, setshowPassword] = useState(false);
  const Mobile = useRef();
  console.log(Mobile);
  const Pass = useRef();

  const notify = () => toast.error("Please Enter Valid Details !");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    setLoader(true);
    e.preventDefault();
    console.log("login");
    if (
      Mobile.current.value === "7249456632" &&
      Pass.current.value === "admin"
    ) {
      setLoader(false);
      localStorage.setItem("MobileData", "7249456632");
      localStorage.setItem("PassData", "admin");

      navigate("/admin/dashboard");
    } else {
      notify();
      setLoader(false);
    }
  };

  const getMobile = localStorage.getItem("MobileData");
  const getPass = localStorage.getItem("PassData");

  return (
    <div>
      <ToastContainer />
      {getMobile && getPass ? (
         <Dashboard/>
      ) : (
        <Container className="login">
          <Row className="justify-content-center align-items-center h-100">
            <Col md={6}>
              <Card className="card px-4 py-4 text-center">
                <h1 className="heading mb-3">Admin Login</h1>

                <Form className="px-4" onSubmit={handleSubmit}>
                  <Form.Control
                    type="tel"
                    placeholder="Mobile Number"
                    ref={Mobile}
                    className="mb-3"
                  />

                  <InputGroup className="mb-3">
                    <Form.Control
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      ref={Pass}
                    />
                    <InputGroup.Text>
                      {showPassword ? (
                        <Icon.EyeSlash
                          style={{ cursor: "pointer" }}
                          onClick={() => setshowPassword(!showPassword)}
                        />
                      ) : (
                        <Icon.Eye
                          style={{ cursor: "pointer" }}
                          onClick={() => setshowPassword(!showPassword)}
                        />
                      )}
                    </InputGroup.Text>
                  </InputGroup>
                  <Button
                    className="btn-submit"
                    type="submit"
                    onClick={(e) => {
                      handleSubmit(e);
                    }}
                  >
                    {loader ? (
                      <Spinner animation="border" variant="light" />
                    ) : (
                      "Login"
                    )}
                  </Button>
                </Form>
              </Card>
            </Col>
          </Row>
        </Container>
      )}
    </div>
  );
};

export default AdminLogin;
