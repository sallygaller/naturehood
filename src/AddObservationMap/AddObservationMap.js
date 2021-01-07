import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
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

// Create the script tag, set the appropriate attributes
var script = document.createElement("script");
script.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&callback=initMap`;
script.defer = true;

// Attach your callback function to the `window` object
window.initMap = function () {
  // JS API is loaded and available
};

// Append the 'script' element to 'head'
document.head.appendChild(script);

export default function AddObservationMap(props) {
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
