import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { signUp } from "../../store/user/actions";
import { selectToken } from "../../store/user/selectors";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { Col } from "react-bootstrap";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const navigate = useNavigate();

  useEffect(() => {
    if (token !== null) {
      navigate(-1);
    } ///// with this i make sure that from any where in the page people click signup the will be navigate to the page before clicking signup . cool :)stackoverflow and search specific for reactrouter dom 6 ... 1 hour but it worth it
  }, [token, navigate]); //// only if token is there,do the following ....

  function submitForm(event) {
    event.preventDefault();

    dispatch(signUp(name, email, password, phone));

    setEmail("");
    setPassword("");
    setName("");
    setPhone("");
  }

  return (
    <Container>
      <Form as={Col} md={{ span: 6, offset: 3 }} className="mt-5">
        <h1 className="mt-5 mb-5">Signup</h1>
        <Form.Group controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            value={name}
            onChange={(event) => setName(event.target.value)}
            type="text"
            placeholder="Enter name"
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

        {/* didnt add the phone here at first, but we have it required in the back and I need it in the base customer info so added here  */}

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            type="phone"
            placeholder="Enter your phone number"
            required
          />
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
