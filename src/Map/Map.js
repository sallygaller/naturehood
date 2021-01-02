import React, { useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import API_KEY from "../config.js";

const containerStyle = {
  width: "400px",
  height: "400px",
  margin: "0 auto",
};

const center = {
  lat: 45.6008,
  lng: -122.7606,
};

function Map(props) {
  const getCoordinates = (e) => {
    console.log(
      "Marker dropped: Current Lat:" +
        e.latLng.lat().toFixed(3) +
        " Current Lng: " +
        e.latLng.lng().toFixed(3)
    );
    const lat = e.latLng.lat().toFixed(3);
    console.log(lat);
    const lng = e.latLng.lng().toFixed(3);
    console.log(lng);
    props.onMarkerDrop(lat, lng);
  };

  const [map, setMap] = useState(null);

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return (
    <LoadScript googleMapsApiKey={API_KEY}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={13}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        <Marker
          onLoad={onLoad}
          position={center}
          draggable={true}
          onDragEnd={(e) => getCoordinates(e)}
        />
        <></>
      </GoogleMap>
    </LoadScript>
  );
}

export default React.memo(Map);
