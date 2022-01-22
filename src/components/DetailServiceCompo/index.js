import React from "react";
import { Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import Phibrows from "../ServicesDescriptions/Phibrows";
import PhibrowsAfterCare from "../ServicesDescriptions/PhibrowsAfterCare";
import Philash from "../ServicesDescriptions/Philash";
import PhilashAfterCare from "../ServicesDescriptions/PhilashAfterCare";
import Phiremoval from "../ServicesDescriptions/Phiremoval";
import PhiremovalAfterCare from "../ServicesDescriptions/PhiremovalAfterCare";

export default function DetailServiceCompo(props) {
  const { name } = useParams();
  ////// the process went is such that at first i tried to keep every thing together and partialy in the back end and here but since i had also after care  and one more part in every service which can be subjected to change depndes on the new info i decided to seperate the descriptin and the after care seperate so i can handle them easier in the future
  return (
    <div>
      {name === "Phibrows" ? (
        <Phibrows />
      ) : name === "Phiremoval" ? (
        <Phiremoval />
      ) : name === "Philashes" ? (
        <Philash />
      ) : (
        "Nothing"
      )}

      <img
        style={{ width: "30%", height: "30%" }}
        src={props.imageUrl}
        alt=""
      />

      <Link to="/reservation">
        <Button>Reservation</Button>
      </Link>

      {name === "Phibrows" ? (
        <PhibrowsAfterCare />
      ) : name === "Phiremoval" ? (
        <PhiremovalAfterCare />
      ) : name === "Philashes" ? (
        <PhilashAfterCare />
      ) : (
        "Nothing"
      )}

      <h5> Price: </h5>
      <p> {props.servicePrice} €</p>

      <h6>* NOTE</h6>
      <p>
        If you lost your brows due to any disease you can pay with your smile
      </p>
      <img
        style={{ width: "10%", height: "10%" }}
        src="https://res.cloudinary.com/dkdzt4lca/image/upload/v1642683054/Sheyla/ay-with-smile-pay-with-smile-phibrows-logo-115628985252yyb40duey_e0pzkr.png"
        alt=""
      />
    </div>
  );
}
