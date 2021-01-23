import React from "react";

const Context = React.createContext({
  lat: null,
  lng: null,
  addLat: () => {},
  addLng: () => {},
});

export default Context;
