import React from "react";
import { API_ENDPOINT } from "../config";

const Context = React.createContext({
  observations: [],
  error: null,
  setError: () => {},
  clearError: () => {},
  addObservation: () => {},
  deleteObservation: () => {},
  updateObservation: () => {},
});

export default Context;

export class Provider extends React.Component {
  state = {
    observations: [],
    error: null,
  };

  setError = (error) => {
    console.error(error);
    this.setState({ error });
  };

  clearError = () => {
    this.setState({ error: null });
  };

  addObservation = (observation) => {
    this.setState({
      observations: [...this.state.observations, observation],
    });
  };

  deleteObservation = (observationId) => {
    const newObservations = this.state.observations.filter(
      (observation) => observation.id !== observationId
    );
    this.setState({
      observations: newObservations,
    });
  };

  render() {
    const value = {
      observations: this.state.observations,
      setObservations: this.setObservations,
      addObservation: this.handleAddObservation,
      deleteObservation: this.handleDeleteObservation,
      updateObservation: this.handleUpdateObservation,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
    };
    return (
      <Context.Provider value={value}>{this.props.children}</Context.Provider>
    );
  }
}
