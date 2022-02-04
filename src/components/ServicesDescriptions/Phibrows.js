import React, { useEffect } from "react";
import "./allservices.css";

import Aos from "aos";
import "aos/dist/aos.css";

export default function Phibrows() {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  return (
    <div id="srvicetextSetting">
      <p data-aos="fade-left">
        Microblading is an advanced brow technique that uses a superfine row of
        needles to deposit pigments into the skin to create thin, hair-like
        strokes. Microblading is ideal for creating a very full and realistic
        looking brow, it is becoming an increasingly popular method in permanent
        makeup.
        <br />
        <br />
      </p>
      <p data-aos="fade-right">
        Microblading is quite similar to hair stroke cosmetic tattoos that use
        the machine method, however the strokes are finer, and are not implanted
        as deeply into the skin. Therefore, brows created with microblading look
        better, but are not as permanent. They should be considered
        semi-permanent and usually last around 12 months before a retouch is
        required.
      </p>
    </div>
  );
}
