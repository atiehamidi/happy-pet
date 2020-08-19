import React, { useState, useEffect, Component } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { selectToken } from "../../store/user/selectors";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { Col } from "react-bootstrap";
import { GoogleComponent } from "react-google-location";
import { selectService } from "../../store/homePage/selectors";
import { fetchServices } from "../../store/homePage/actions";

export default function NewService() {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const history = useHistory();

  const services = useSelector(selectService);

  const [start, setStart] = useState();
  const [end, setEnd] = useState("");
  const [address, setAddress] = useState(" ");
  const [service, setService] = useState([]);
  const [description, setDescription] = useState("");
  const [total, setTotal] = useState(0);

  useEffect(() => {
    dispatch(fetchServices());
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
            value={start}
            onChange={(event) => {
              return setStart(event.target.value);
            }}
            required
          />
        </Form.Group>

        <Form.Group controlId="formBasicEnd">
          <Form.Label>End</Form.Label>
          <Form.Control
            type="datetime-local"
            placeholder="Enter End"
            value={end}
            onChange={(event) => {
              return setEnd(event.target.value);
            }}
            required
          />
        </Form.Group>
        <label for="pet">Choose a service:</label>

        <select
          name="services"
          id="pet"
          multiple="multiple"
          onChange={(event, newValue) => {
            return setService([...event.target.value, newValue]);
          }}
        >
          {services.map((service) => {
            return (
              <option value={service.typeOfOrder} key={service.id}>
                {service.typeOfOrder}
              </option>
            );
          })}
        </select>
      <input typr

        {/* <Form.Check
              inline
              disabled
              label="3 (disabled)"
              type={type}
              id={`inline-${type}-3`}
            /> */}

        <Form.Group controlId="formBasicMap">
          {service}
          <Form.Label>Location</Form.Label>
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
        </Form.Group>

        <Form.Group controlId="formBasicDecciption">
          <Form.Label>Decsription</Form.Label>
          <Form.Control
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            type="text"
            placeholder="description.."
            required
          />
        </Form.Group>
        <Form.Group controlId="formBasicTotal">
          <Form.Label>Total</Form.Label>
          <Form.Control
            value={total}
            onChange={(event) => setTotal(event.target.value)}
            type="text"
            placeholder="description.."
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
