import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllReservationForAdmin } from "../../store/service/actions";
import { selectAllReservation } from "../../store/service/selectors";

//import moment from "moment";

export default function AdminPage() {
  const allReservation = useSelector(selectAllReservation);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllReservationForAdmin());
  }, [dispatch]);

  console.log("All reservations from reservation page are:", allReservation);
  return (
    <div>
      {allReservation.map((r, i) => (
        <p>{r.dateTime}</p>
      ))}
    </div>
  );
}
