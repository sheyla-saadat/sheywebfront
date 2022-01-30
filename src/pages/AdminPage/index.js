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
import { Button } from "react-bootstrap";

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
  }, [dispatch, navigate, token]);

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
    <div>
      {!showCalendar ? (
        <Button onClick={calendarButton}>Show Calendar</Button>
      ) : (
        <Button onClick={calendarButton}>Close</Button>
      )}

      <br />

      {!showReservation ? (
        <Button onClick={reservationButton}>Show Reservations</Button>
      ) : (
        <Button onClick={reservationButton}>Close</Button>
      )}

      {showCalendar ? <AdminAvailableDateForm /> : null}

      {showReservation ? <AdminPageCompo /> : null}
    </div>
  );
}
