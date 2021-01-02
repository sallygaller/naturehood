// import React from "react";
// import "./Map.css";
// import API_KEY from "../config.js";
// import Image from "./map.png";

// export default function Map() {
//   return (
//     <div className="Map">
//       <img src={Image} alt="temp" />
//     </div>
//   );
// }

import React from "react";
import { Autocomplete, GoogleMap, LoadScript } from "@react-google-maps/api";
import API_KEY from "../config.js";

const containerStyle = {
  width: "400px",
  height: "400px",
  margin: "0 auto",
};

const center = {
  lat: 45.570966235743214,
  lng: -122.76914618094335,
};

function Map() {
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
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        {/* Child components, such as markers, info windows, etc. */}
        <></>
      </GoogleMap>
    </LoadScript>
  );
}

export default React.memo(Map);
