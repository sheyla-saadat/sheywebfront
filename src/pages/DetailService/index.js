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
  console.log("name of specific service  from detailservice page is:", name);

  useEffect(() => {
    dispatch(fetchServiceByName(name));
  }, [dispatch, name]); /// got the inifint here ,fixed

  const specificService = useSelector(selectSpecificServices);

  console.log("Specific service is:", specificService);
  /////checked till here all good from consol it showed the chosen service name so now go to back . back done checked in console data is fetched correct
  return (
    <div>
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
  ); //// now ready to be used in the component ...
}
