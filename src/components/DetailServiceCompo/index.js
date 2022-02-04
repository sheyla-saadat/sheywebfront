import React, { useEffect } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import Phibrows from "../ServicesDescriptions/Phibrows";
import PhibrowsAfterCare from "../ServicesDescriptions/PhibrowsAfterCare";
import Philash from "../ServicesDescriptions/Philash";
import PhilashAfterCare from "../ServicesDescriptions/PhilashAfterCare";
import Phiremoval from "../ServicesDescriptions/Phiremoval";
import PhiremovalAfterCare from "../ServicesDescriptions/PhiremovalAfterCare";

import "./detailservices.css";
import Aos from "aos";
import "aos/dist/aos.css";

export default function DetailServiceCompo(props) {
  const { name } = useParams();

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <Container data-aos="fade-down">
        {name === "Phibrows" ? (
          <Phibrows />
        ) : name === "Phiremoval" ? (
          <Phiremoval />
        ) : name === "Philashes" ? (
          <Philash />
        ) : (
          "Nothing"
        )}
      </Container>
      <br />
      <br />
      <Container data-aos="fade-up">
        <Row>
          <Col>
            <img
              data-aos="fade-right"
              className="servicemedia-box"
              src={props.imageUrl}
              alt=""
            />
          </Col>

          <Col id="tabletext" data-aos="fade-left">
            <Row style={{ fontSize: "35px" }}>
              <Col style={{ textAlign: "right" }}>
                <p> Price: </p>
              </Col>
              <Col style={{ textAlign: "left" }}>
                <p> {props.servicePrice} €</p>
              </Col>
            </Row>
            <br />
            <br />

            <Row>
              <p>* NOTE</p>
              <p>
                If you lost your brows due to any disease you can pay with your
                smile
              </p>
              <img
                src="https://res.cloudinary.com/dkdzt4lca/image/upload/v1643757043/Sheyla/smilepay-white_ihakzr.png"
                alt=""
                style={{ width: "25%", height: "25%", margin: "auto" }}
              />
            </Row>
            <br />
            <br />

            <Row>
              <Link to="/reservation">
                <Button id="homeButton" data-aos="flip-right">
                  Reservation
                </Button>
              </Link>
            </Row>
          </Col>
        </Row>
      </Container>
      <br />

      <Container style={{ paddingTop: "75px" }}>
        {name === "Phibrows" ? (
          <PhibrowsAfterCare />
        ) : name === "Phiremoval" ? (
          <PhiremovalAfterCare />
        ) : name === "Philashes" ? (
          <PhilashAfterCare />
        ) : (
          "Nothing"
        )}
      </Container>
    </div>
  );
}
