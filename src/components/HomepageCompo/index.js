import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function HomepageCompo(props) {
  return (
    <div>
      <h2> {props.serviceName} </h2>
      {/* now pictures are also clickable  */}
      <Link to={`${props.serviceName}`}>
        <img
          style={{ width: "25%", height: "25%" }}
          src={props.imageUrl}
          alt={props.serviceName}
        />
      </Link>
      <Link to={`${props.serviceName}`}>
        <Button>Read more</Button>
      </Link>

      <Link to="/reservation">
        <Button>Reservation</Button>
      </Link>
    </div>
  );
}
