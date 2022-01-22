import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchGallary } from "../../store/service/actions";
import { selectGallaryData } from "../../store/service/selectors";

export default function Gallary() {
  const dispatch = useDispatch();

  const gallaryData = useSelector(selectGallaryData);

  console.log("gallaryData is:", gallaryData);

  useEffect(() => {
    dispatch(fetchGallary());
  }, [dispatch]);

  return <div>This is gallary page</div>;
}
