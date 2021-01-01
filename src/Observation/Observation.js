import React from "react";
import { Link } from "react-router-dom";
import "./Observation.css";

export default function Observation(props) {
  const observation = props.observation;
  console.log(observation);
  return (
    <div className="Observation">
      <h3>{observation.species}</h3>
      <p>
        Date: {observation.date} <br></br>
        Time: {observation.time} {observation.ampm}
      </p>
      <p>{observation.description}</p>
      <Link to={`/edit/observation/${observation.id}`}>
        <button type="button">Edit</button>
      </Link>
      <button>Delete</button>
    </div>
  );
}
