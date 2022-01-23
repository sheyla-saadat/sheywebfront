import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import CarouselComp from "../../components/GallaryCarousel";
import { fetchGallary } from "../../store/service/actions";
import { selectGallaryData } from "../../store/service/selectors";

export default function Gallary() {
  const dispatch = useDispatch();

  const gallaryData = useSelector(selectGallaryData);

  console.log("gallaryData is:", gallaryData);

  useEffect(() => {
    dispatch(fetchGallary());
  }, [dispatch]);
  /////////first I decided to map the data here then use it in the componenet but then since I decided to bring carousel which could be used in more than one page in the future I decided to have it done in a seperate component and kep this one as the parent .
  return (
    <div>
      <CarouselComp />

      {/* {gallaryData.map((item) => (
        <CarouselComp
          key={item.id}
          id={item.serviceId}
          imageUrl={item.imageUrl}
        />
      ))} */}
    </div>
  );
}
