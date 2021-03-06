import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllCalendar,
  fetchAllReservationForAdmin,
} from "../../store/service/actions";

import { selectToken, selectUser } from "../../store/user/selectors";
import { useNavigate } from "react-router-dom";
import AdminPageCompo from "../../components/AdminPageCompo";
import AdminAvailableDateForm from "../../components/AdminPageCompo/dateForm";
import { Button, Col, Container, Row } from "react-bootstrap";

import "./admin.css";

export default function AdminPage() {
  const token = useSelector(selectToken);
  const user = useSelector(selectUser);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (token === null || user.isAdmin !== true) {
      navigate("/");
    }
    dispatch(fetchAllReservationForAdmin());
    dispatch(fetchAllCalendar());
  }, [dispatch, navigate, token, user]);

  const [showCalendar, setShowCalendar] = useState(false);
  const [showReservation, setShowReservation] = useState(false);

  const reservationButton = () => {
    setShowCalendar(false);
    setShowReservation(!showReservation);
  };

  const calendarButton = () => {
    setShowCalendar(!showCalendar);
    setShowReservation(false);
  };

  return (
    <div
      style={{
        backgroundColor: "black",
        paddingTop: "20px",
        paddingBottom: "600px",
      }}
    >
      <Container className="firstAdminContainer">
        <Row>
          <Col style={{ textAlign: "right" }}>
            {!showCalendar ? (
              <Button id="adminButton" onClick={calendarButton}>
                Show Calendar
              </Button>
            ) : (
              <Button id="adminButton" onClick={calendarButton}>
                Close
              </Button>
            )}
          </Col>
          <Col style={{ textAlign: "left" }}>
            {!showReservation ? (
              <Button id="adminButton" onClick={reservationButton}>
                Show Reservations
              </Button>
            ) : (
              <Button id="adminButton" onClick={reservationButton}>
                Close
              </Button>
            )}
          </Col>
        </Row>

        <br />
      </Container>

      {showCalendar ? <AdminAvailableDateForm /> : null}

      {showReservation ? <AdminPageCompo /> : null}
    </div>
  );
}
