import React from "react";
import { Link } from "react-router-dom";
import { dateFormat, timeFormat } from "../Utils/Utils";
import "./Observation.css";

export default function Observation(props) {
  const observation = props.observation;

  return (
    <div className="Observation">
      <div className="Observation-item Observation-title">
        {observation.species}
      </div>
      <div className="Observation-item">
        Date: {dateFormat(observation)}
        <br></br>
        Time: {timeFormat(observation)}
      </div>
      <div className="Observation-item">{observation.description}</div>
      <div className="Observation-item">
        <Link
          className="Observation-item"
          to={`/observations/edit/${observation.id}`}
        >
          <button type="button">Edit</button>
        </Link>
      </div>
      <div className="Observation-item">
        <button onClick={() => props.handleDeleteRequest(observation.id)}>
          Delete
        </button>
      </div>
    </div>
  );
}
