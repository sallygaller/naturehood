import React from "react";
import MainMap from "../MainMap/MainMap";
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
          <option value="fox">Raccoon</option>
        </select>
      </div>
    </div>
  );
}
