import React from "react";
import { GoogleMap, Marker, LoadScript } from "@react-google-maps/api";
import API_KEY from "../config";

const containerStyle = {
  width: "400px",
  height: "400px",
};

const center = {
  lat: 45.6008,
  lng: -122.7606,
};

export default function AddObservationMap(props) {
  const getCoordinates = (e) => {
    const lat = e.latLng.lat().toFixed(3);
    const lng = e.latLng.lng().toFixed(3);
    props.onMarkerDrop(lat, lng);
  };
  return (
    <LoadScript googleMapsApiKey={API_KEY}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        <Marker
          position={center}
          draggable={true}
          onDragEnd={(e) => getCoordinates(e)}
        />
        <></>
      </GoogleMap>
    </LoadScript>
  );
}

// import React from "react";
// import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
// import API_KEY from "../config";
// import "./AddObservationMap.css";

// const containerStyle = {
//   width: "400px",
//   height: "400px",
//   margin: "0 auto",
// };

// const center = {
//   lat: 45.6008,
//   lng: -122.7606,
// };

// function AddObservationMap(props) {
//   const getCoordinates = (e) => {
//     const lat = e.latLng.lat().toFixed(3);
//     const lng = e.latLng.lng().toFixed(3);
//     props.onMarkerDrop(lat, lng);
//   };

//   const { isLoaded } = useJsApiLoader({
//     id: "google-map-script",
//     googleMapsApiKey: { API_KEY },
//   });

//   console.log(isLoaded);

//   const [map, setMap] = React.useState(null);

//   const onUnmount = React.useCallback(function callback(map) {
//     setMap(null);
//   }, []);

//   return (
//     <div className="AddObservationMap">
//       <GoogleMap
//         mapContainerStyle={containerStyle}
//         defaultCenter={center}
//         zoom={13}
//         onLoad={(map) => {
//           const bounds = new window.google.maps.LatLngBounds();
//           map.fitBounds(bounds);
//         }}
//         onUnmount={onUnmount}
//       >
//         <Marker
//           position={center}
//           draggable={true}
//           onDragEnd={(e) => getCoordinates(e)}
//         />
//         <></>
//       </GoogleMap>
//     </div>
//   );
// }

// export default React.memo(AddObservationMap);
