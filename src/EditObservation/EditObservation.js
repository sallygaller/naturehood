import React from "react";
import "./EditObservation.css";
import Context from "../Context/Context";
import { API_ENDPOINT } from "../config";

class EditObservation extends React.Component {
  static contextType = Context;

  state = {
    error: null,
    species: "",
    type: "",
    date: "",
    time: "",
    ampm: "",
    lat: "",
    lng: "",
  };

  render() {
    const paramsId = parseInt(this.props.match.params.observationId);
    const observation = this.props.observations.find(
      ({ id }) => id === paramsId
    );
    return (
      <div className="EditObservation">
        <h2>Edit Observation</h2>
        <form>
          <label htmlFor="species">Species seen:</label>
          <input type="text" defaultValue={observation.species}></input>
          <label htmlFor="type">Type of species:</label>
          <select id="type" name="type">
            <option defaultValue={observation.type}>{observation.type}</option>
            <option value="mammal">Mammal</option>
            <option value="bird">Bird</option>
            <option value="arthropod">Arthropod</option>
            <option value="amphibian">Amphibian</option>
            <option value="reptile">Reptile</option>
            <option value="fish">Fish</option>
          </select>
          <label htmlFor="description">
            Description (be as detailed as possible!):
          </label>
          <textarea
            id="description"
            name="description"
            className="AddObservation-textarea"
            defaultValue={observation.description}
          ></textarea>
          <label htmlFor="date">Date seen:</label>
          <input
            type="text"
            id="date"
            name="date"
            defaultValue={observation.date}
          ></input>
          <label htmlFor="date">Time seen (approximate):</label>
          <input
            type="text"
            id="time"
            name="time"
            defaultValue={observation.time}
          ></input>
          <select id="ampm">
            <option value={observation.ampm}>{observation.ampm}</option>
            <option>am</option>
            <option>pm</option>
          </select>
          <button className="EditNote-button" type="submit">
            Save
          </button>
          <button type="button">Cancel</button>{" "}
        </form>
      </div>
    );
  }
}

export default EditObservation;
