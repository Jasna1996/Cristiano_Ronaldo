import React from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

function Contact() {
  return (
    <div className="contactBackground text-white py-4">
      <h1 className="text-center text-white">Contact</h1>
      <div className="container">
        <Form>
          <Row>
            <Col>
              <Form.Control placeholder="Your Name" />
            </Col>
            <Col>
              <Form.Control placeholder="Your Email" />
            </Col>
          </Row>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label></Form.Label>
            <Form.Control as="textarea" placeholder="Your Message" rows={3} />
          </Form.Group>
          <Button variant="primary" className="mx-auto d-block">
            Send Message
          </Button>
        </Form>
      </div>
    </div>
  );
}
export default Contact;
