import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import "./allservices.css";

import Aos from "aos";
import "aos/dist/aos.css";

export default function PhibrowsAfterCare() {
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
            <b>First day for (dry/combined skin):</b> For the first hour every
            15 minutes you must wipe with a sterile watered wipe given to you at
            the studio. After the first 2 hours you must leave your brows alone,
            and keep them dry for up to 3 days. Starting day 4, you must then
            rinse your brows with warm water and mild soap (baby soap) or
            Cetaphil, without stretching the skin. When you rinse the skin it
            must be done in a gentle circular motion on the eyebrows until skin
            feels clean. For the next 4 days ON apply the ointment 1 time a day
            until scabs have fallen off.
          </li>
          <br />
          <li data-aos="flip-up">
            <b>First day for (oily skin): </b>For the first hour every 15
            minutes you must wipe with a sterile watered wipe given to you at
            the studio. After the first 2 hours you must leave your brows alone,
            and keep them dry for up to 4 days. Starting day 5, you must then
            rinse your brows with warm water and mild soap (baby soap) or
            Cetaphil, without stretching the skin. When you rinse the skin it
            must be done in a gentle circular motion on the eyebrows until skin
            feels clean. For the next 5 days ON apply the ointment 1 time a day
            until scabs have fallen off.
          </li>
        </ol>
        <br />
        <br />

        <p data-aos="fade-right">
          <b>
            <i>
              <span style={{ color: "rgb(143, 111, 0)", fontWeight: "bolder" }}>
                PLEASE AVOID:
              </span>
            </i>
          </b>
          <br />
          <br />
          For the next 2-3 weeks starting from day 1 after treatment from
          applying any makeup or cream with active ingredients over the
          eyebrows, bathing in public water, strong exercise with profuse
          sweating, sauna, solarium, etc.
        </p>
        <br />
        <br />
        <p data-aos="fade-right">
          <b>
            <i>
              <span style={{ color: "rgb(143, 111, 0)", fontWeight: "bolder" }}>
                PLEASE NOTE:
              </span>
            </i>
          </b>
          <br /> <br />
          Eyebrows will appear darker and bolder due to natural scabbing and
          healing for the first 10 days. PLEASE STOP OINTMENT TREATMENT ONCE
          SCABS FALL OFF AND SCHEDULE YOUR TOUCH UP APPOINTMENT. FOLLOWING THE
          PROPER AFTERCARE INSTRUCTIONS CAN GUARANTEE BETTER RESULTS.
        </p>

        <br />
        <br />
      </Container>
    </div>
  );
}
