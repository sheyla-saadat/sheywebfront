import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateReservation } from "../../store/service/actions";
import { selectAllReservation } from "../../store/service/selectors";
import moment from "moment";

import { Button, Container, Form, Table } from "react-bootstrap";

export default function AdminPageCompo() {
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
    <Container>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Customer Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Service</th>
            <th>Date&Time</th>
            <th>Pigement</th>
            <th>Status</th>
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
                  <Button onClick={() => showDescriptionFrom(r.id)}>
                    Done
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
          <Form.Group controlId="formBasicEmail">
            <Form.Control
              // value={email}
              onChange={(event) => setDescription(event.target.value)}
              type="text"
              placeholder="Enter description"
            />
          </Form.Group>
          <br />

          <Button onClick={doneForm}>Sumbit the description</Button>
        </div>
      )}
    </Container>
  );
}
