import React, { Component } from "react";
import Select from "react-select";
import { Col, Container, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../store/user/selectors";

export default function Reservation() {
  const user = useSelector(selectUser);

  const token = user.token;

  console.log("Token is:", token);

  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  const MyComponent = () => <Select options={options} />;

  return (
    <div>
      <h1> Book an Appointment</h1>
      <Container>
        <form>
          <label> Select your service</label>
          <select>
            <option value="grapefruit">Phibrows</option>
            <option value="lime">Phiremoval</option>
            <option selected value="coconut">
              Philash
            </option>
          </select>
        </form>

        <Form as={Col} md={{ span: 6, offset: 3 }} className="mt-5">
          <Form.Group controlId="formBasicName">
            <Form.Label>Select your preferred date and time</Form.Label>
            <Form.Control
              // value={name}
              // onChange={(event) => setName(event.target.value)}
              type="date"
              placeholder="Enter name"
              required
            />
          </Form.Group>

          <Form.Group controlId="formBasicName">
            <Form.Label>Select your preferred date and time</Form.Label>
            <Form.Control
              // value={name}
              // onChange={(event) => setName(event.target.value)}
              type="time"
              placeholder="Enter name"
              required
            />
          </Form.Group>

          <Form.Group controlId="formBasicName">
            <Form.Label>Select your preferred date and time</Form.Label>
            <Form.Control
              // value={name}
              // onChange={(event) => setName(event.target.value)}
              type="text"
              placeholder={"Enter name"}
              required
            />
          </Form.Group>

          {MyComponent}
        </Form>
      </Container>
    </div>
  );
}
