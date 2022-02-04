import React, { useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import { useSelector } from "react-redux";
import { selectGallaryData } from "../../store/service/selectors";
import { Container } from "react-bootstrap";

import "./Gallary.css";
import Aos from "aos";
import "aos/dist/aos.css";

export default function CarouselComp(props) {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  const gallaryData = useSelector(selectGallaryData);

  console.log("gallaryData is:", gallaryData);

  return (
    <div style={{ backgroundColor: "black", paddingTop: "5px" }}>
      <Container
        className="firstContainer"
        style={{ width: "40%", height: "40%" }}
      >
        <Carousel variant="dark" fade className="carouselmedia-box">
          {gallaryData.map((item) => {
            return item.serviceId === 1 ? null : (
              <Carousel.Item key={item.id} interval={1500}>
                {item.imageUrl ? (
                  <img
                    style={{ borderRadius: "25px" }}
                    className="d-block w-100"
                    src={item.imageUrl}
                    alt=""
                  />
                ) : null}
              </Carousel.Item>
            );
          })}
        </Carousel>
      </Container>

      <br />
      <br />
      <br />

      <Container style={{ textAlign: "center" }} id="textSetting">
        <h2 data-aos="fade-down">
          <b>* NOTE</b>
        </h2>
        <p data-aos="fade-down">
          If you lost your brows due to any disease you can pay with your smile
        </p>
        <img
          data-aos="fade-up"
          style={{ width: "10%", height: "10%" }}
          src="https://res.cloudinary.com/dkdzt4lca/image/upload/v1643757043/Sheyla/smilepay-white_ihakzr.png"
          alt=""
        />
      </Container>
      <br />
    </div>
  );
}
