import React from "react";
import "./EditObservation.css";

export default function EditObservation(props) {
  const observation = props.observations.find(
    ({ id }) => id == props.match.params.observationId
  );
  console.log(observation);
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
