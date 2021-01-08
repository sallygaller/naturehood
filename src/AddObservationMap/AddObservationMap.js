import React from "react";
import { GoogleMap, Marker } from "@react-google-maps/api";
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

export default function AddObservationMap(props) {
  let mapRef = React.createRef();
  const getCoordinates = (e) => {
    const lat = e.latLng.lat().toFixed(3);
    const lng = e.latLng.lng().toFixed(3);
    props.onMarkerDrop(lat, lng);
  };

  return (
    <div className="AddObservationMap">
      <GoogleMap
        ref={mapRef}
        mapContainerStyle={containerStyle}
        center={center}
        zoom={13}
      >
        <Marker
          position={center}
          draggable={true}
          onDragEnd={(e) => getCoordinates(e)}
        />
        <></>
      </GoogleMap>
    </div>
  );
}
