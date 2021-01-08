import React from "react";
import AddObservationMap from "../AddObservationMap/AddObservationMap";
import MainMap from "../MainMap/MainMap";
import API_KEY from "../config";

export default function MapContainer(props) {
  return (
    <div>
      <h1>Hi!</h1>
      {/* <AddObservationMap onMarkerDrop={(e) => props.handleMarkerDrop} />
        <MainMap observations={props.observations} /> */}
    </div>
  );
}

// const containerStyle = {
//   width: "400px",
//   height: "400px",
// };

// const center = {
//   lat: 45.6008,
//   lng: -122.7606,
// };

// export default function AddObservationMap(props) {
//   const getCoordinates = (e) => {
//     const lat = e.latLng.lat().toFixed(3);
//     const lng = e.latLng.lng().toFixed(3);
//     props.onMarkerDrop(lat, lng);
//   };

//   return (
//     <div className="AddObservationMap">
//       <Map
//         center={center}
//         containerStyle={{
//           height: "400px",
//           width: "400px",
//           margin: "0 auto",
//         }}
//       >
//         {/* <Marker
//           position={center}
//           draggable={true}
//           onDragEnd={(e) => getCoordinates(e)}
//         /> */}
//       </Map>
//     </div>
//   );
// }

/* <LoadScript googleMapsApiKey={API_KEY}>
<AddObservationMap onMarkerDrop={props.onMarkerDrop} />
<MainMap observations={props.observations} />
</LoadScript> */
