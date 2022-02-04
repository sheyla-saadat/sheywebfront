import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import DetailServiceCompo from "../../components/DetailServiceCompo";
import { fetchServiceByName } from "../../store/service/actions";
import { selectSpecificServices } from "../../store/service/selectors";

export default function DetailService() {
  const dispatch = useDispatch();

  const { name } = useParams();
  console.log("name of specific service is:", name);

  useEffect(() => {
    dispatch(fetchServiceByName(name));
  }, [dispatch, name]);

  const specificService = useSelector(selectSpecificServices);

  console.log("Specific service is:", specificService);

  return (
    <div style={{ backgroundColor: "black" }}>
      {specificService.map((service) => (
        <DetailServiceCompo
          id={service.id}
          key={service.key}
          imageUrl={service.imageUrl}
          serviceName={service.serviceName}
          servicePrice={service.servicePrice}
        />
      ))}
    </div>
  );
}
