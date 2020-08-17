import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectToken } from "../../store/user/selectors";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Col } from "react-bootstrap";
import axios from "axios";
import { newPet } from "../../store/user/actions";
export default function NewPet() {
  const token = useSelector(selectToken);
  const history = useHistory();
  const { id } = useParams();
  const [type, set_type] = useState("");
  const [name, set_name] = useState("");
  const [birth, set_birth] = useState();
  const [sex, set_sex] = useState("other");
  const [image, set_image] = useState("");
  const [breed, set_breed] = useState("");
  const [description, set_description] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    if (token === null) {
      history.push("/");
    }
  }, [token, history]);

  const uploadImage = async (e) => {
    const files = e.target.files[0];
    const formData = new FormData();
    formData.append("upload_preset", "bugtracker1");
    formData.append("file", files);
    setLoading(true);

    axios
      .post("https://api.cloudinary.com/v1_1/dsyta0pbg/image/upload", formData)
      .then((res) => set_image(res.data.url))
      .then(setLoading(false))
      .catch((err) => console.log(err));
    console.log("sucee finish");
  };

  function submitForm(event) {
    event.preventDefault();
    dispatch(newPet(type, name, birth, sex, image, breed, description));
    console.log(name, sex);
  }

  return (
    <div className="background">
      <div className="transbox">
        <Container>
          <Form as={Col} md={{ span: 6, offset: 3 }} className="mt-5">
            <h3>Please fill the form</h3>
            <Form.Group controlId="formBasicType">
              <Form.Label>type</Form.Label>
              <Form.Control
                value={type}
                onChange={(event) => set_type(event.target.value)}
                type="text"
                placeholder="Enter Type"
                required
              />
            </Form.Group>
            <Form.Group controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                value={name}
                onChange={(event) => set_name(event.target.value)}
                type="text"
                placeholder="Enter Name"
              />
            </Form.Group>
            <Form.Group controlId="formBasicBirth">
              <Form.Label>Birthday</Form.Label>
              <Form.Control
                value={birth}
                onChange={(event) => set_birth(event.target.value)}
                type="Date"
              />
            </Form.Group>

            <Form.Group controlId="formBasicSex">
              <Form.Label>Sex</Form.Label>
              <Form.Control
                as="select"
                value={sex}
                onChange={(event) => set_sex(event.target.value)}
              >
                <option>female</option>
                <option>male</option>
                <option>other</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="formBasicImageUrl">
              <Form.Label>Image url</Form.Label>
              <Form.Control onChange={uploadImage} type="file" required />
            </Form.Group>
            {loading ? (
              <h5>loading...</h5>
            ) : (
              <img src={image} style={{ width: "45px", height: "45px" }} />
            )}
            <Form.Group controlId="formBasicBreed">
              <Form.Label>Breed</Form.Label>
              <Form.Control
                value={breed}
                onChange={(event) => set_breed(event.target.value)}
                type="text"
              />
            </Form.Group>
            <Form.Group controlId="formBasicName">
              <Form.Label>Description</Form.Label>
              <Form.Control
                value={description}
                onChange={(event) => set_description(event.target.value)}
                type="text"
              />
            </Form.Group>
            <Form.Group className="mt-5">
              <Button variant="primary" type="submit" onClick={submitForm}>
                submit
              </Button>
            </Form.Group>
          </Form>
        </Container>
      </div>
    </div>
  );
}
