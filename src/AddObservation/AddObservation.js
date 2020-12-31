import React from "react";
import "./AddObservation.css";

export default function AddObservation() {
  return (
    <div className="AddObservation">
      <h2>Add New Observation</h2>
      <div className="AddObservation">
        <form>
          <label for="species">Species seen:</label>
          <input
            className="AddObservation-text"
            type="text"
            name="species"
            id="species"
          ></input>
          <label for="speciesType">Type of species:</label>
          <select id="speciesType" name="speciesType">
            <option value="mammal">Mammal</option>
            <option value="bird">Bird</option>
            <option value="arthropod">Arthropod</option>
            <option value="amphibian">Amphibian</option>
            <option value="reptile">Reptile</option>
            <option value="fish">Fish</option>
          </select>
          <label for="description">
            Description (be as detailed as possible!):
          </label>
          <textarea
            id="description"
            name="description"
            placeholder="Description"
            className="AddObservation-textarea"
          ></textarea>
          <label for="date">Date seen:</label>
          <input type="text" id="date" name="date" value="2020-12-31"></input>
          <input type="submit" value="Submit"></input>
        </form>
      </div>
    </div>
  );
}
