import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateReservation } from "../../store/service/actions";
import { selectAllReservation } from "../../store/service/selectors";
import moment from "moment";

import "./adminCompo.css";
import Aos from "aos";
import "aos/dist/aos.css";

import { Button, Container, Form, Table } from "react-bootstrap";

export default function AdminPageCompo() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const allReservation = useSelector(selectAllReservation);

  const dispatch = useDispatch();

  const condition = (id) => {
    if (id === 2) {
      return "Phibrows";
    } else if (id === 3) {
      return "Phiremoval";
    } else {
      return "Philashes";
    }
  };

  const convertedDates = (date) => {
    return moment(date).format("LLLL");
  };
  const [reservationId, setReservationId] = useState();

  const [form, setForm] = useState(false);

  const showDescriptionFrom = (id) => {
    setForm(!form);
    setReservationId(id);
  };
  // console.log(form);

  console.log("Id from map is", reservationId);

  const [description, setDescription] = useState("");

  const doneForm = () => {
    dispatch(updateReservation(description, reservationId));
    showDescriptionFrom();
  };

  console.log("All reservations from reservation page are:", allReservation);

  return (
    <Container id="adminReservationtable" style={{ backgroundColor: "black" }}>
      <Table striped borderless hover variant="dark" size="sm">
        <thead>
          <tr>
            <th>
              <h4>#</h4>
            </th>
            <th>
              <h4>Customer Name</h4>
            </th>
            <th>
              <h4>Email</h4>
            </th>
            <th>
              <h4>Phone</h4>
            </th>
            <th>
              <h4>Service</h4>
            </th>
            <th>
              <h4>Date&Time</h4>
            </th>
            <th>
              <h4>Pigement</h4>
            </th>
            <th>
              <h4>Status</h4>
            </th>
          </tr>
        </thead>
        <tbody>
          {allReservation.map((r, i) => (
            <tr>
              <td>{i + 1}</td>
              <td>{r.user.name}</td>
              <td>{r.user.email}</td>
              <td>{r.user.phone}</td>
              <td>{condition(r.serviceId)}</td>
              <td>{convertedDates(r.time)}</td>
              <td>{r.description}</td>
              <td>
                {r.isConfirmed ? (
                  "✅"
                ) : (
                  <Button
                    id="tableButton"
                    onClick={() => showDescriptionFrom(r.id)}
                  >
                    {!form || r.id !== reservationId ? "Done" : "Close"}
                  </Button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <br />
      {!form ? null : (
        <div>
          <Form.Group
            id="description"
            // data-aos="flip-up"
            controlId="formBasicEmail"
          >
            <Form.Control
              // value={email}
              onChange={(event) => setDescription(event.target.value)}
              type="text"
              placeholder="Enter description"
            />
          </Form.Group>
          <br />

          <Button id="submitButton" onClick={doneForm}>
            Sumbit the description
          </Button>
        </div>
      )}
    </Container>
  );
}
