import React, { useEffect } from "react";
import "./App.css";

import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Loading from "./components/Loading";
import MessageBox from "./components/MessageBox";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";

import { useDispatch, useSelector } from "react-redux";
import { selectAppLoading } from "./store/appState/selectors";
import { getUserWithStoredToken } from "./store/user/actions";
import Homepage from "./pages/Homepage";
import DetailService from "./pages/DetailService";
import Reservation from "./pages/Reservation";
import Gallary from "./pages/Gallary";
import AdminPage from "./pages/AdminPage";

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectAppLoading);

  useEffect(() => {
    dispatch(getUserWithStoredToken());
  }, [dispatch]);

  return (
    <div className="App">
      <Navigation />
      <MessageBox />
      {isLoading ? <Loading /> : null}
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/reservation" element={<Reservation />} />
        <Route exact path="/gallary" element={<Gallary />} />
        <Route exact path="/admin" element={<AdminPage />} />

        <Route exact path="/:name" element={<DetailService />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
///didnt have the exact on every rout in the begining which made the routs wired in the app . always keep the exact on
