import React, { useEffect, useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  Jumbotron,
  Table,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllCalendar, makeReservation } from "../../store/service/actions";
import { selectUser } from "../../store/user/selectors";
import moment from "moment";
import { selectAllCalendar } from "../../store/service/selectors";

import "./Reservation.css";
import Aos from "aos";
import "aos/dist/aos.css";

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

  const bookFunction = (dateTime, id) => {
    console.log("Im clicked");

    dispatch(makeReservation(serviceId, dateTime, id));
  };

  useEffect(() => {
    Aos.init({ duration: 3000 });
    dispatch(fetchAllCalendar());
  }, [dispatch]);

  const convertedDates = (date) => {
    return moment(date).format("LLLL");
  };

  return (
    <div style={{ backgroundColor: "black" }}>
      <Jumbotron className="firstJumbotron" data-aos="fade-left">
        <h1 id="topic"> Book an Appointment</h1>
      </Jumbotron>

      <Container className="firstJumbotron" data-aos="fade-right">
        <Form as={Col} md={{ span: 6, offset: 3 }} className="mt-5">
          <Form.Group as={Col} controlId="formState">
            <img
              style={{ marginLeft: "20px", width: "85%", height: "50%" }}
              src="https://res.cloudinary.com/dkdzt4lca/image/upload/v1642961620/Sheyla/Sheyla_g6mb1t.png"
              alt=""
            />
          </Form.Group>
        </Form>
      </Container>

      {token === null ? (
        <Form.Group as={Col} controlId="formState" data-aos="fade-up">
          <p id="textSettingReservation">
            <b>***</b> Please note if you are already user you have to{" "}
            <a className="anchorStyle" href="/login">
              LOGIN
            </a>{" "}
            to be able to see the available date and time, if not no worries,
            you can always{" "}
            <a className="anchorStyle" href="/signup">
              SINGUP
            </a>
            <br />
            <br />
          </p>
        </Form.Group>
      ) : (
        <Container className="firstContainer" data-aos="flip-up">
          <Table striped borderless hover variant="dark" size="sm">
            <thead>
              <tr>
                <th>
                  <h3>#</h3>
                </th>
                <th>
                  <h3>Date and time</h3>
                </th>
                <th>
                  <h3>Choose the service</h3>
                </th>
                <th>
                  <h3>Reserved</h3>
                </th>
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
                            : event.target.value === "Phiremoval"
                            ? setServiceId(3)
                            : setServiceId(null);
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
                    {token !== null ? (
                      r.isBooked === null || r.isBooked === false ? (
                        <Button
                          id="reserveButton"
                          onClick={() => {
                            bookFunction(r.time, r.id);
                          }}
                        >
                          Reserve
                        </Button>
                      ) : (
                        "Reserved"
                      )
                    ) : (
                      "Login to see"
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>
      )}
      <br />
      <br />
    </div>
  );
}
