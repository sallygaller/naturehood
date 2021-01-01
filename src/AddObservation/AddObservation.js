import React from "react";
import "./AddObservation.css";

export default function AddObservation() {
  return (
    <div className="AddObservation">
      <h2>Add New Observation</h2>
      <div>
        <form>
          <label htmlFor="species">Species seen:</label>
          <input
            className="AddObservation-text"
            type="text"
            name="species"
            id="species"
          ></input>
          <label htmlFor="type">Type of species:</label>
          <select id="type" name="type">
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
          ></textarea>
          <label htmlFor="date">Date seen:</label>
          <input type="text" id="date" name="date" value="2020-12-31"></input>
          <label htmlFor="date">Time seen (approximate):</label>
          <input type="text" id="time" name="time" value="3:00"></input>
          <select id="ampm">
            <option>am</option>
            <option>pm</option>
          </select>
          <input type="submit" value="Submit"></input>
        </form>
      </div>
    </div>
  );
}
