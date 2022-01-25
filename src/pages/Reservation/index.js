import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllCalendar, makeReservation } from "../../store/service/actions";
import { selectUser } from "../../store/user/selectors";
import moment from "moment";
import { selectAllCalendar } from "../../store/service/selectors";

export default function Reservation() {
  const user = useSelector(selectUser);

  const allCalendar = useSelector(selectAllCalendar);

  const dispatch = useDispatch();

  const token = user.token;
  console.log("Token is:", token);

  // const [time, setTime] = useState("");
  // const [date, setDate] = useState("");
  const [serviceId, setServiceId] = useState("");

  // console.log("Time is:", time);
  // console.log("Date is:", date);
  console.log("Service is:", serviceId);

  // console.log("type of time is:", typeof time);
  // console.log("type of date is:", typeof date);

  // const dateTime = `${date} ${time}`;
  // console.log("dateTime is:", dateTime);

  const bookFunction = (dateTime) => {
    console.log("Im clicked");

    dispatch(makeReservation(serviceId, dateTime));
  };

  useEffect(() => {
    dispatch(fetchAllCalendar());
  }, [dispatch]);

  const convertedDates = (date) => {
    return moment(date).format("LLLL");
  };

  return (
    <div>
      <h1> Book an Appointment</h1>
      <Container>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Date and time</th>
              <th>Choose the service</th>
              <th>Reserved</th>
            </tr>
          </thead>
          <tbody>
            {allCalendar.map((r, i) => (
              <tr>
                <td>{i + 1}</td>
                <td>{convertedDates(r.time)}</td>
                <td>
                  <Form.Group as={Col} controlId="formState">
                    <Form.Control
                      as="select"
                      name="state"
                      placeholder="Choose your prefered service"
                      onChange={(event) => {
                        event.target.value === "Phibrows"
                          ? setServiceId(2)
                          : event.target.value === "Philashes"
                          ? setServiceId(4)
                          : setServiceId(3);
                      }}
                    >
                      <option value="">Services ...</option>

                      <option value="Phibrows">Phibrows</option>
                      <option value="Philashes">Philashes</option>
                      <option value="Phiremoval">Phiremoval</option>
                    </Form.Control>
                  </Form.Group>
                </td>
                <td>
                  {r.isBooked === null ? (
                    <Button
                      onClick={() => {
                        bookFunction(r.time);
                      }}
                    >
                      Reserve
                    </Button>
                  ) : (
                    "Reserved"
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>

      {/* <Container>
        <Form as={Col} md={{ span: 6, offset: 3 }} className="mt-5">
          <Form.Group as={Col} controlId="formState">
            <img
              style={{ marginLeft: "20px", width: "85%", height: "50%" }}
              src="https://res.cloudinary.com/dkdzt4lca/image/upload/v1642961620/Sheyla/Sheyla_g6mb1t.png"
              alt=""
            />
          </Form.Group>

          <br />

          <Form.Group as={Col} controlId="formState">
            <p>
              <b>***</b> Please note if you are already user you have to{" "}
              <a href="/login">LOGIN</a>, if not no worries, you can always{" "}
              <a href="/signup">SINGUP</a>
            </p>
          </Form.Group>

          <br />

          <Form.Group as={Col} controlId="formState">
            <Form.Label>Select Your Service</Form.Label>
            <Form.Control
              as="select"
              name="state"
              // defaultValue={""}
              placeholder="Choose your prefered service"
              // onChange={(event) => setService(event.target.value)}

              // to prevent the too many loop error, I used the condition here
              onChange={(event) => {
                event.target.value === "Phibrows"
                  ? setServiceId(2)
                  : event.target.value === "Philashes"
                  ? setServiceId(4)
                  : setServiceId(3);
              }}
            >
              <option value="">Services ...</option>

              <option value="Phibrows">Phibrows</option>
              <option value="Philashes">Philashes</option>
              <option value="Phiremoval">Phiremoval</option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="formBasicName">
            <Form.Label>Select your preferred date</Form.Label>
            <Form.Control
              value={date}
              onChange={(event) => setDate(event.target.value)}
              type="date"
              placeholder="Enter name"
              required
            />
          </Form.Group>

          <Form.Group controlId="formBasicName">
            <Form.Label>Select your preferred time</Form.Label>
            <Form.Control
              value={time}
              onChange={(event) => setTime(event.target.value)}
              type="time"
              placeholder="Enter name"
              required
            />
          </Form.Group>

          <br />

          <Form.Group controlId="formBasicName">
            <Button onClick={bookFunction}>Book Appointment</Button>
          </Form.Group>
        </Form>
      </Container> */}
    </div>
  );
}
