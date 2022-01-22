import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import HomepageCompo from "../../components/HomepageCompo";
import { fetchAllService } from "../../store/service/actions";
import { selectAllServices } from "../../store/service/selectors";

export default function Homepage() {
  const dispatch = useDispatch();
  /// didint have the ()faced error lesson learned..now working only need the rout so back to backend.

  useEffect(() => {
    dispatch(fetchAllService());
  }, [dispatch]);

  const allServices = useSelector(selectAllServices);

  console.log("AllService are:", allServices);

  // const aboutMe = allServices[0];
  ///// first did this to only get the first element but then from stackoverflow got .shift method tested it seems like it worked source:https://stackoverflow.com/questions/50161658/remove-first-item-of-array-in-react-state/50161758   remve first element from an array

  const aboutMe = allServices.shift();
  console.log("aboutMe is:", aboutMe);

  // console.log(
  //   "Allservices are fetched from the store via selector:",
  //   allServices
  // );

  /// ivegot problems with the url couldnt load so back to the database change the url source.then it worked .// src={aboutMe && aboutMe.imageUrl} before doing this it was aboutme.imageurl it said its undifined then with && accepted.

  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <h1> {aboutMe && aboutMe.serviceName} </h1>
        <img
          style={{ width: "50%", height: "50%" }}
          src={aboutMe && aboutMe.imageUrl}
          alt="Sheyla Saadat"
        />
        <p>
          Do you also dream of perfect eyebrows that you no longer have to draw?
          Then I am your certified permanent makeup artist who can provide you
          with the latest technique using PMU device, and 100 percent natural
          pigment which is applied in the first layer of your skin. This
          treatment is 100% safe and does not involve any risks because MP-Brows
          has the very latest equipment.
          <br />
          <br />
          With permanent make up I create full, natural and beautiful eyebrows.
          It is a godsend for anyone who spends a lot of time drawing the
          eyebrows. With PMU you will save lots of time and will look beautiful
          at any time of the day.
        </p>
        <Link to={"/gallary"}>
          <Button>Gallary</Button>
        </Link>
      </div>

      {allServices.map((service) => (
        <HomepageCompo
          id={service.id}
          key={service.key}
          imageUrl={service.imageUrl}
          serviceName={service.serviceName}
        />
      ))}
    </div>
  );
}
