import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import API_KEY from "../config.js";
import "./MainMap.css";

const containerStyle = {
  width: "400px",
  height: "400px",
  margin: "0 auto",
};

const center = {
  lat: 45.6008,
  lng: -122.7606,
};

export default function MainMap(props) {
  const locations = [
    { lat: props.observations[0].lat, lng: props.observations[0].lng },
    { lat: props.observations[1].lat, lng: props.observations[1].lng },
    { lat: props.observations[2].lat, lng: props.observations[2].lng },
  ];

  function createKey(location) {
    return location.lat + location.lng;
  }

  return (
    <div className="MainMap">
      <LoadScript googleMapsApiKey={API_KEY}>
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
          {locations.map((location) => (
            <Marker
              key={createKey(location)}
              position={location}
              averageCenter={true}
            />
          ))}
          <></>
        </GoogleMap>
      </LoadScript>
    </div>
  );
}
