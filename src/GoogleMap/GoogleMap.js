import React from "react";
import { LoadScript } from "@react-google-maps/api";

import MainMap from "../MainMap/MainMap";
import AddObservationMap from "../AddObservationMap/AddObservationMap";
import API_KEY from "../config";

function GoogleMap(props) {
  return (
    <LoadScript
      id="script-loader"
      googleMapsApiKey={API_KEY}
      language="en"
      region="EN"
      version="weekly"
    >
      <MainMap />
      <AddObservationMap onMarkerDrop={props.onMarkerDrop} />
    </LoadScript>
  );
}

export default GoogleMap;
