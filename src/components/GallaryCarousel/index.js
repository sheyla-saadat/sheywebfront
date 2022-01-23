import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { useSelector } from "react-redux";
import { selectGallaryData } from "../../store/service/selectors";
import { Container } from "react-bootstrap";

export default function CarouselComp(props) {
  const gallaryData = useSelector(selectGallaryData);

  console.log("gallaryData is:", gallaryData);

  return (
    <div>
      <Container style={{ width: "50%", height: "50%" }}>
        <Carousel variant="dark" fade>
          {gallaryData.map((item) => {
            // here I needed to exclude the Url from my first item in the backend which was about me therfore brought this condition in ..... //
            return item.serviceId === 1 ? null : (
              // to change the sliding time spend long  browsing so at the end inside bootstrap website I got the interval in !!!! so yesss
              <Carousel.Item key={item.id} interval={1500}>
                {item.imageUrl ? (
                  <img className="d-block w-100" src={item.imageUrl} alt="" />
                ) : null}
              </Carousel.Item>
            );
          })}
        </Carousel>
      </Container>

      <br />
      <br />

      <Container style={{ textAlign: "center" }}>
        <h6>* NOTE</h6>
        <p>
          If you lost your brows due to any disease you can pay with your smile
        </p>
        <img
          style={{ width: "10%", height: "10%" }}
          src="https://res.cloudinary.com/dkdzt4lca/image/upload/v1642683054/Sheyla/ay-with-smile-pay-with-smile-phibrows-logo-115628985252yyb40duey_e0pzkr.png"
          alt=""
        />
      </Container>
    </div>
  );
}
