import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { GoogleApiWrapper } from "google-maps-react";
import API_KEY from "../config";
import "./AddObservationMap.css";

const containerStyle = {
  width: "400px",
  height: "400px",
  margin: "0 auto",
};

const center = {
  lat: 45.6008,
  lng: -122.7606,
};

export function AddObservationMap(props) {
  const getCoordinates = (e) => {
    const lat = e.latLng.lat().toFixed(3);
    const lng = e.latLng.lng().toFixed(3);
    props.onMarkerDrop(lat, lng);
  };

  return (
    <div className="AddObservationMap">
      <LoadScript googleMapsApiKey={API_KEY}>
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={13}>
          <Marker
            position={center}
            draggable={true}
            onDragEnd={(e) => getCoordinates(e)}
          />
          <></>
        </GoogleMap>
      </LoadScript>
    </div>
  );
}

export default GoogleApiWrapper({
  apiKey: API_KEY,
})(AddObservationMap);
