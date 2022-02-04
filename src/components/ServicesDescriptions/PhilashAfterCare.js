import React, { useEffect } from "react";
import "./allservices.css";

import Aos from "aos";
import "aos/dist/aos.css";
import { Container } from "react-bootstrap";

export default function PhilashAfterCare() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <div>
      <h2 data-aos="flip-down">
        <b id="afterCareTopic"> After care:</b>
      </h2>
      <br />
      <Container id="aftercaretextSetting">
        <ol>
          <li data-aos="flip-up">
            For the first 24 hours, do not get your lashes wet, do not use
            mascara
          </li>
          <br />
          <li data-aos="flip-up">
            Do not use waterproof mascara after the lift, this will affect the
            result
          </li>
          <br />

          <li data-aos="flip-up">
            Try not to sleep on your eyes, this can affect the result, the perm
            can still oxidize after.
          </li>
          <br />

          <li data-aos="flip-up">
            Do not clean your eyes by brushing or rubbing, but try to clean with
            the lift, so up and down, so you keep a nice result and prevent the
            lashes from getting mixed up
          </li>
        </ol>
      </Container>
      <br /> <br />
    </div>
  );
}
