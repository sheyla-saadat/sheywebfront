import React, { useEffect } from "react";
import { Button, Col, Container, Jumbotron, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import HomepageCompo from "../../components/HomepageCompo";
import { fetchAllService } from "../../store/service/actions";
import { selectAllServices } from "../../store/service/selectors";
import "./homepage.css";

import Aos from "aos";
import "aos/dist/aos.css";

export default function Homepage() {
  const dispatch = useDispatch();

  useEffect(() => {
    Aos.init({ duration: 3000 });
    dispatch(fetchAllService());
  }, [dispatch]);

  const allServices = useSelector(selectAllServices);

  console.log("AllService are:", allServices);

  const aboutMe = allServices[0];

  console.log("aboutMe is:", aboutMe);

  return (
    <div style={{ backgroundColor: "black" }}>
      <Jumbotron style={{ marginBottom: "20px", paddingTop: "50px" }}>
        <Row className="firstJumbotron" id="animationOne">
          <Col data-aos="fade-right" md="5">
            <Container>
              <img
                style={{ width: "100%", height: "100%" }}
                src={aboutMe && aboutMe.imageUrl}
                alt="Sheyla Saadat"
              />
            </Container>
          </Col>
          <Col
            data-aos="fade-left"
            md="5"
            style={{
              textAlign: "left",
              paddingLeft: "60px",
            }}
          >
            <h1 id="topic">Wat is permanente make up?</h1>
            <br />
            <p id="textSetting">
              Do you also dream of perfect eyebrows that you no longer have to
              draw? Then I am your certified permanent makeup artist who can
              provide you with the latest technique using PMU device, and 100
              percent natural pigment which is applied in the first layer of
              your skin. This treatment is 100% safe and does not involve any
              risks because MP-Brows has the very latest equipment.
              <br />
              With permanent make up I create full, natural and beautiful
              eyebrows. It is a godsend for anyone who spends a lot of time
              drawing the eyebrows. With PMU you will save lots of time and will
              look beautiful at any time of the day.
            </p>
          </Col>
        </Row>

        <Row style={{ paddingTop: "50px" }}>
          <Col
            data-aos="fade-up"
            style={{ textAlign: "center", border: "solid,3px,red" }}
            colspan="2"
          >
            <video
              className="media-box"
              src="https://res.cloudinary.com/dkdzt4lca/video/upload/v1642853159/Sheyla/video_yc6fbo.mov"
              width="75%"
              height="75%"
              controls="controls"
              // autoplay="true"
            />
          </Col>
        </Row>
      </Jumbotron>

      <Jumbotron>
        <Row className="firstJumbotron">
          {allServices.map((service, i) =>
            service.id === 1 ? null : (
              <Col
                data-aos="fade-right"
                md="3"
                style={{ textAlign: "center", animationDelay: `${150 * i}ms` }}
              >
                <HomepageCompo
                  id={service.id}
                  key={service.key}
                  imageUrl={service.imageUrl}
                  serviceName={service.serviceName}
                />
              </Col>
            )
          )}
        </Row>

        <Row style={{ paddingTop: "50px" }}>
          <Col></Col>
        </Row>
      </Jumbotron>
    </div>
  );
}
