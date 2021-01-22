import React from "react";

const Context = React.createContext({
  observations: [],
  addObservation: () => {},
  deleteObservation: () => {},
  updateObservation: () => {},
  setObservations: () => {},
  error: null,
  setError: () => {},
  clearError: () => {},
});

export default Context;
