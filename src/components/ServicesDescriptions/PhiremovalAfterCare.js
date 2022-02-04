import React, { useEffect } from "react";
import "./allservices.css";

import Aos from "aos";
import "aos/dist/aos.css";
import { Container } from "react-bootstrap";

export default function PhiremovalAfterCare() {
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
            First, use the A&D cream, this is to soothe the scabs & to improve
            healing. Then, 48 hours after the procedure, apply a thin layer of
            this cream on the area that was treated during the procedure. Apply
            the cream at least 2-3 times per day until the scabs come off & scab
            shedding is completed. This may take 7-14 days and even more.
          </li>
          <br />
          <li data-aos="flip-up">
            Anti-Scar gel (New Gel + advance silicone gel for scars) is applied
            after serious injuries, as a surgical intervention when tissue
            scarring is expected and for scar prevention. Apply this gel after
            the initial scab shedding. A small amount is enough, it is to be
            applied on the skin every 8 hrs. It should be applied every day
            until the skin relief is restored, redness disappears & the skin
            color in the area obtains the same color as surrounding tissues. The
            usual time is 30 or more days.
          </li>
        </ol>
      </Container>
      <br /> <br />
    </div>
  );
}
