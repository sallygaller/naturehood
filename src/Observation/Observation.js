import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import "./Observation.css";

export default function Observation(props) {
  const observation = props.observation;
  const dateFormat = moment(observation.date).format("L");
  const timeFormat = moment(observation.time, "hh:mm:ss").format("hh:mm a");
  const timeFormatSplit = timeFormat.split(" ");
  const time = timeFormatSplit[0];
  const ampm = timeFormatSplit[1];
  return (
    <div className="Observation">
      <div className="Observation-item Observation-title">
        {observation.species}
      </div>
      <div className="Observation-item">
        Date: {dateFormat}
        <br></br>
        Time: {time}
        {ampm}
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
