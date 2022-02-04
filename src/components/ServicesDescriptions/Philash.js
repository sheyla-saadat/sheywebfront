import React, { useEffect } from "react";
import "./allservices.css";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Philash() {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  return (
    <div id="srvicetextSetting">
      <p data-aos="fade-left">
        Eyelash lifting is a treatment of your own eyelashes, without applying
        false eyelashes. The lashes are lifted by silicone pads. All eyelash
        hairs can be treated with these pads. This makes mascara and an eyelash
        curler unnecessary. Lash Lifting can be applied to all eyelash types,
        both short and long eyelashes. With the Lash Lift technique, the lashes
        are lifted up, to get a striking look.
      </p>
      <br />
      <ul>
        <li>Result visible for 6 to 9 weeks. </li>
        <li>
          You no longer have to use mascara and / or eyelash curler during the
          treatment
        </li>
        <li>Eyes look bigger </li>
        <li>Gives a natural look </li>
        <li>
          Resistant to water, showering, sweating, tears, swimming and sleeping
          after 24 hours
        </li>
        <li>Eyelashes hardly need care</li>
      </ul>
    </div>
  );
}
