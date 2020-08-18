import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { signUp } from "../../store/user/actions";
import { selectToken } from "../../store/user/selectors";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { Col } from "react-bootstrap";

export default function SignUp() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [phone, setPhone] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const history = useHistory();

  useEffect(() => {
    if (token !== null) {
      history.push("/");
    }
  }, [token, history]);

  function submitForm(event) {
    event.preventDefault();

    dispatch(signUp(firstname, lastname, phone, email, password));

    setEmail("");
    setPassword("");
    setFirstname("");
    setLastname("");
    setPhone("");
  }

  return (
    <Container>
      <Form as={Col} md={{ span: 6, offset: 3 }} className="mt-5">
        <h1 className="mt-5 mb-5">Signup</h1>
        <Form.Group controlId="formFirstName">
          <Form.Label>Firstname</Form.Label>
          <Form.Control
            value={firstname}
            onChange={(event) => setFirstname(event.target.value)}
            type="text"
            placeholder="Enter Firstname"
            required
          />
        </Form.Group>
        <Form.Group controlId="formLastName">
          <Form.Label>Lastname</Form.Label>
          <Form.Control
            value={lastname}
            onChange={(event) => setLastname(event.target.value)}
            type="text"
            placeholder="Enter Lastname"
            required
          />
        </Form.Group>
        <Form.Group controlId="formBasicPhone">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            type="text"
            placeholder="Enter Phone"
            required
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="email"
            placeholder="Enter email"
            required
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Form.Group className="mt-5">
          <Button variant="primary" type="submit" onClick={submitForm}>
            Sign up
          </Button>
        </Form.Group>
        <Link to="/login">Click here to log in</Link>
      </Form>
    </Container>
  );
}
