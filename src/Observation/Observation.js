import React from "react";
import { Link } from "react-router-dom";
import "./Observation.css";

export default function Observation(props) {
  const observation = props.observation;
  return (
    <div>
      <table className="Observation" id="observation">
        <td className="Observation-small-column">
          {observation.species}
          <br></br>
          Date: {observation.date}
          <br></br>
          Time: {observation.time} {observation.ampm}
        </td>
        <td className="Observation-wide-column">{observation.description}</td>
        <td className="Observation-button-column">
          <Link
            className="Observation-item"
            to={`/edit/observation/${observation.id}`}
          >
            <button type="button">Edit</button>
          </Link>
        </td>
        <td className="Observation-button-column">
          <button className="Observation-item">Delete</button>
        </td>
      </table>
    </div>
  );
}
