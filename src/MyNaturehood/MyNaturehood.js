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
              <Observation observation={observation} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
