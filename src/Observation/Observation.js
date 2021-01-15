import React from "react";
import { Link } from "react-router-dom";
import "./Observation.css";

export default function Observation(props) {
  const observation = props.observation;
  return (
    <div className="Observation">
      <div className="Observation-item Observation-title">
        {observation.species}
      </div>
      <div className="Observation-item">
        Date: {observation.date}
        <br></br>
        Time: {observation.time} {observation.ampm}
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
        <button>Delete</button>
      </div>
    </div>
  );
}
