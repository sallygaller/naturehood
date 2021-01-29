import React from "react";
import { Link } from "react-router-dom";
import { dateFormat, timeFormat } from "../Utils/Utils";
import "./Observation.css";

export default function Observation(props) {
  const observation = props.observation;

  return (
    <div className="Observation">
      <div className="Observation-time-date">
        {timeFormat(observation)}, {dateFormat(observation)}
      </div>
      <div className="Observation-title">{observation.species}</div>
      <div>{observation.description}</div>
      <div className="Observation-buttons">
        <Link to={`/observations/edit/${observation.id}`}>
          <button className="Observation-button" type="button">
            Edit
          </button>
        </Link>{" "}
        <button
          className="Observation-button"
          onClick={() => props.handleDeleteRequest(observation.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
