import React from "react";
import Spinner from "react-bootstrap/Spinner";
import "./spinner.css";

export default function Loading() {
  return (
    <div  style={{
      backgroundColor: "black",
      paddingTop: "20px",
      paddingBottom: "600px",
    }}
    className="loading_spinner">
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    </div>
  );
}
