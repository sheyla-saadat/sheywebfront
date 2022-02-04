import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./homeCompo.css";

export default function HomepageCompo(props) {
  const phi = () => {
    return (
      <img
        style={{ width: "30px", height: "30px" }}
        src="https://res.cloudinary.com/dkdzt4lca/image/upload/v1643146266/Sheyla/a91e524e73508bb1d4b03fd22756e041_v3fp82.png"
        alt=""
      />
    );
  };
  return (
    <div className="media-box">
      <div id="wrapper">
        <div class="image-container">
          <Link to={props.serviceName}>
            <img src={props.imageUrl} alt="" />
          </Link>
          <a href={`/${props.serviceName}`}>
            <div class="image-caption">
              <h1 style={{ border: "solid, 10px, white" }}>
                {props.serviceName}
              </h1>
            </div>
          </a>
        </div>
      </div>
      <br />

      <Link to="/reservation">
        <Button id="homeButton">{phi()}Book Now</Button>
      </Link>
      <a href={`/${props.serviceName}`}>
        <Button id="homeButton">{phi()}Read more</Button>
      </a>
      <br />
      <br />
    </div>
  );
}
