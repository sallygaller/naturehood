import React from "react";
import { Link } from "react-router-dom";
import Observation from "../Observation/Observation";
import Analysis from "../Analysis/Analysis";
import "./ObservationList.css";

export default function ObservationList(props) {
  const observations = props.observations;

  return (
    <div className="ObservationList">
      <h2>My Observations</h2>
      <div>
        <label htmlFor="Observations-sort">Sort by </label>
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
        <Link to={"/add-observation"}>
          <button className="Observations-button" type="button">
            Add Observation
          </button>
        </Link>
      </div>
      <h3>Analysis</h3>
      <Analysis observations={observations} />
    </div>
  );
}
