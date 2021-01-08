import React from "react";
import { LoadScript } from "@react-google-maps/api";
import AddObservationMap from "../AddObservationMap/AddObservationMap";
import MainMap from "../MainMap/MainMap";
import API_KEY from "../config";

export default function MapContainer(props) {
  return (
    <div>
      <LoadScript googleMapsApiKey={API_KEY}>
        <AddObservationMap onMarkerDrop={(e) => props.handleMarkerDrop} />
        <MainMap observations={props.observations} />
      </LoadScript>{" "}
    </div>
  );
}

/* <LoadScript googleMapsApiKey={API_KEY}>
<AddObservationMap onMarkerDrop={props.onMarkerDrop} />
<MainMap observations={props.observations} />
</LoadScript> */
