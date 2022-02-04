import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setCalendar } from "../../store/service/actions";
import { selectAllCalendar } from "../../store/service/selectors";
import moment from "moment";

import "./adminCompo.css";
import Aos from "aos";
import "aos/dist/aos.css";

export default function AdminAvailableDateForm() {
  const dispatch = useDispatch();
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const allCalendar = useSelector(selectAllCalendar);
  console.log("All calendar ", allCalendar);

  console.log("Time is", time);
  console.log("Date is", date);

  const dateTime = `${date} ${time}`;
  console.log("dateTime is:", dateTime);

  const confirmedDateTime = () => {
    console.log("Im clicked");
    dispatch(setCalendar(dateTime));
  };

  const convertedDates = (date) => {
    return moment(date).format("LLLL");
  };

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div style={{ backgroundColor: "black" }}>
      <Container id="adminCalendertable">
        <Table striped borderless hover variant="dark" size="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Date and time</th>
              <th>Available Dates</th>
            </tr>
          </thead>
          <tbody>
            {allCalendar.map((r, i) => (
              <tr>
                <td>{i + 1}</td>
                <td>{convertedDates(r.time)}</td>
                <td>{r.isBooked ? "❌" : "✅"}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>

      <Container style={{ paddingTop: "20px" }}>
        <Form as={Col} md={{ span: 6, offset: 3 }} className="mt-5">
          <Form.Group>
            <h1 data-aos="flip-up"> Set Reservation Calendar</h1>
          </Form.Group>
          <br />

          <Form.Group data-aos="flip-up" controlId="formBasicName">
            <Form.Label>Select date</Form.Label>
            <Form.Control
              value={date}
              onChange={(event) => setDate(event.target.value)}
              type="date"
              placeholder="Enter name"
              required
            />
          </Form.Group>

          <Form.Group data-aos="flip-up" controlId="formBasicName">
            <Form.Label>Select time</Form.Label>
            <Form.Control
              value={time}
              onChange={(event) => setTime(event.target.value)}
              type="time"
              placeholder="Enter name"
              required
            />
          </Form.Group>

          <br />

          <Form.Group data-aos="flip-up" controlId="formBasicName">
            <Button id="confirmButton" onClick={confirmedDateTime}>
              Confirm Date & Time
            </Button>
          </Form.Group>
        </Form>
      </Container>
    </div>
  );
}
