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
import { apiKeyGoogle } from "../../config/constants";

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
    console.log("in file", apiKeyGoogle);
    dispatch(fetchServices());
    if (token === null) {
      history.push("/");
    }
  }, [token, history]);

  function submitForm(event) {
    console.log("hi");
    event.preventDefault();
  }

  function totalChange() {
    const startDate = Date.parse(start);
    const endDate = Date.parse(end);
    const time = endDate - startDate;
    var minutes = 1000 * 60;
    var hours = minutes * 60;
    var days = hours * 24;
    var years = days * 365;
    console.log(time);
    return setTotal(time / hours);
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
        <label htmlfor="pet">Choose a service:</label>

        <select
          name="services"
          id="pet"
          multiple="multiple"
          onChange={(event) => {
            const startDate = Date.parse(start);
            const endDate = Date.parse(end);
            const time = endDate - startDate;
            var minutes = 1000 * 60;
            var hours = minutes * 60;
            var days = hours * 24;
            var years = days * 365;
            console.log(time);
            setTotal((time / hours) * event.target.value);
            return setService([...event.target.value]);
          }}
        >
          {services.map((service) => {
            return (
              <option value={service.price} key={service.id}>
                {service.typeOfOrder}
              </option>
            );
          })}
        </select>

        <Form.Group controlId="formBasicMap">
          {service}
          <Form.Label>Location</Form.Label>
          <GoogleComponent
            apiKey={apiKeyGoogle}
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
        <p>total{total}</p>
        <Form.Group className="mt-5">
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form.Group>
      </Form>
    </Container>
  );
}
