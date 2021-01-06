import React from "react";
import MainMap from "../MainMap/MainMap";
import Observation from "../Observation/Observation";
import "./MyNaturehood.css";

export default function MyNaturehood(props) {
  const observations = props.observations;
  return (
    <div className="MyNaturehood">
      <h2>My natureHood</h2>
      <MainMap observations={observations} />
      <p className="MyNaturehood-instructions">
        Click on a marker to see a neighbor's observation.
      </p>
      <div className="MyNaturehood-date-filter">
        <input
          type="text"
          id="startDate"
          placeholder="Start Date"
          name="startDate"
        ></input>
        <input
          type="text"
          id="endDate"
          placeholder="End Date"
          name="endDate"
        ></input>
      </div>
      <div className="MyNaturehood-species-filter">
        <select>
          <option value="all">All Species</option>
          <option value="robin">Robin</option>
          <option value="fox">Fox</option>
          <option value="raccoon">Raccoon</option>
        </select>
      </div>
      <div className="MyNaturehood-observations">
        <h3>Recent Observations</h3>
        <ul>
          {observations.map((observation) => (
            <li key={observation.id}>
              <div className="MyNaturehood-item MyNaturehood-title">
                {observation.species}
              </div>
              <div className="MyNaturehood-item">
                Date: {observation.date}
                <br></br>
                Time: {observation.time} {observation.ampm}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
