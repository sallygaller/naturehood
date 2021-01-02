import React from "react";
import {
  GoogleMap,
  LoadScript,
  MarkerClusterer,
  Marker,
} from "@react-google-maps/api";
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

export default function MainMap(props) {
  const locations = [
    { lat: props.observations[0].lat, lng: props.observations[0].lng },
    { lat: props.observations[1].lat, lng: props.observations[1].lng },
  ];

  function createKey(location) {
    return location.lat + location.lng;
  }

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
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
        zoom={16}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        <MarkerClusterer>
          {(clusterer) =>
            locations.map((location) => (
              <Marker
                key={createKey(location)}
                position={location}
                clusterer={clusterer}
                averageCenter={true}
              />
            ))
          }
        </MarkerClusterer>
        <></>
      </GoogleMap>
    </LoadScript>
  );
}

// export default React.memo(MainMap);
