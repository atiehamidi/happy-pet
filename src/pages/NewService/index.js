import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { selectToken } from "../../store/user/selectors";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { Col } from "react-bootstrap";

export default function NewService() {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const history = useHistory();

  useEffect(() => {
    if (token === null) {
      history.push("/");
    }
  }, [token, history]);

  function submitForm(event) {
    console.log("hi");
    event.preventDefault();
  }

  return (
    <Container>
      <input type="date"></input>
      <Form as={Col} md={{ span: 6, offset: 3 }} className="mt-5">
        <h1 className="mt-5 mb-5"> new Services</h1>
        <Form.Group controlId="formBasicService">
          <Form.Label>Start</Form.Label>
          <Form.Control
            // value={email}
            // onChange={event => setEmail(event.target.value)}
            type="DateAndTime"
            placeholder="Enter Start"
            required
          />
        </Form.Group>
        {["checkbox", "radio"].map((type) => (
          <div key={`inline-${type}`} className="mb-3">
            <Form.Check inline label="1" type={type} id={`inline-${type}-1`} />
            <Form.Check inline label="2" type={type} id={`inline-${type}-2`} />
            <Form.Check
              inline
              disabled
              label="3 (disabled)"
              type={type}
              id={`inline-${type}-3`}
            />
          </div>
        ))}
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            // value={password}
            // onChange={event => setPassword(event.target.value)}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Form.Group className="mt-5">
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form.Group>
      </Form>
    </Container>
  );
}
