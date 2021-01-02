import React from "react";
import { Link } from "react-router-dom";
import Observation from "../Observation/Observation";
import "./ObservationList.css";

export default function ObservationList(props) {
  const observations = props.observations;

  function countSpecies(observations, observation) {
    let count = observations.filter(
      (obs) => obs.species === observation.species
    ).length;
    return count;
  }

  return (
    <div className="ObservationList">
      <h2>My Observations</h2>
      <Link to={"/add-observation"}>
        <button className="Observations-button" type="button">
          Add Observation
        </button>
      </Link>
      <div>
        <label htmlFor="Observations-sort">Sort by</label>
        <select>
          <option value="date-desc">Date (Newest to Oldest)</option>
          <option value="date-asc">Date (Oldest to Newest)</option>
          <option value="species">Species</option>
        </select>
      </div>
      <div>
        <ul>
          {observations.map((observation) => (
            <li key={observation.id}>
              <Observation observation={observation} />
            </li>
          ))}
        </ul>
      </div>
      <h3>Analysis</h3>
      <p>
        Total observations: {observations.length} <br></br>
        First observation: 12/10/2020 <br></br>
        Last observation: 12/31/2020
      </p>
      <ul>
        {observations.map((observation) => (
          <li key={observation.id}>
            {countSpecies(observations, observation)} {observation.species} seen{" "}
          </li>
        ))}
      </ul>
    </div>
  );
}
