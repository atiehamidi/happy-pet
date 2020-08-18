import React, { useState, useEffect, Component } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { selectToken } from "../../store/user/selectors";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { Col } from "react-bootstrap";
import { GoogleComponent } from "react-google-location";

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
      <Form as={Col} md={{ span: 6, offset: 3 }} className="mt-5">
        <h1 className="mt-5 mb-5"> new Services</h1>
        <Form.Group controlId="formBasicStart">
          <Form.Label>Start</Form.Label>
          <Form.Control
            type="datetime-local"
            placeholder="Enter Start"
            required
          />
        </Form.Group>
        <Form.Group controlId="formBasicEnd">
          <Form.Label>End</Form.Label>
          <Form.Control
            type="datetime-local"
            placeholder="Enter End"
            required
          />
        </Form.Group>
        {["checkbox"].map((type) => (
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
        <Form.Group controlId="formBasicMap">
          <Form.Label>Location</Form.Label>
          <Form.Control
            // value={password}
            // onChange={event => setPassword(event.target.value)}
            type="address"
            placeholder="location"
            required
          />
        </Form.Group>
        <GoogleComponent
          apiKey="AIzaSyAvdO7vkUxdst7CD_-JlFp8JojrxfF1Nhw"
          language={"en"}
          country={"country:nl"}
          coordinates={true}
          locationBoxStyle={"custom-style"}
          locationListStyle={"custom-style-list"}
          // onChange={(e) => {
          //   this.setState({ place: e });
          // }}
        />
        <Form.Group className="mt-5">
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form.Group>
      </Form>
    </Container>
  );
}
