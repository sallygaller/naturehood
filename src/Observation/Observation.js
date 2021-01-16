import React from "react";
import { Link } from "react-router-dom";
import { API_ENDPOINT } from "../config";
import moment from "moment";
import "./Observation.css";

export default function Observation(props) {
  const { id, species, date, time, description } = props.observation;
  const dateFormat = moment(date).format("L");
  const timeFormat = moment(time, "hh:mm:ss").format("hh:mm a");
  const timeFormatSplit = timeFormat.split(" ");
  const timeCorrect = timeFormatSplit[0];
  const ampm = timeFormatSplit[1];

  return (
    <div className="Observation">
      <div className="Observation-item Observation-title">{species}</div>
      <div className="Observation-item">
        Date: {dateFormat}
        <br></br>
        Time: {timeCorrect}
        {ampm}
      </div>
      <div className="Observation-item">{description}</div>
      <div className="Observation-item">
        <Link className="Observation-item" to={`/observations/edit/${id}`}>
          <button type="button">Edit</button>
        </Link>
      </div>
      <div className="Observation-item">
        <button onClick={() => props.handleDeleteRequest(id)}>Delete</button>
      </div>
    </div>
  );
}
