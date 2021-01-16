import React from "react";

const Context = React.createContext({
  observations: [],
  addObservation: () => {},
  deleteObservation: () => {},
  updateObservation: () => {},
});

export default Context;
