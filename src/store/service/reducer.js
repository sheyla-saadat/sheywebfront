const initialState = {
  allServices: [], //empty array is due to the our data shape which was array
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "SERVICE/fetchAllService": //type
      return {
        ...state,
        allServices: [...action.payload.allServices],
      }; //// in the consol we see response.data is an object meaning it should atleast have 2 elements inside our case is exactly 2 of them one is allservices and one is message which we dont need ,inside it has an array so what we need is then action.payload.allservices in fact action.payload is exactly response.data /// now to the selector ... and the rootreducer /// checked in consol both in redux and the normal all data are fetched and brought correct .

    default:
      return state;
  }
}
