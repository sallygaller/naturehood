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
  const getCoordinates = (e) => {
    const lat = e.latLng.lat().toFixed(3);
    const lng = e.latLng.lng().toFixed(3);
    props.onMarkerDrop(lat, lng);
  };

  return (
    <div className="AddObservationMap">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={13}>
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

// export default React.memo(AddObservationMap);

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
