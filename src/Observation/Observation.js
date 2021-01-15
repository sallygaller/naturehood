import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import { API_ENDPOINT } from "../config";
import moment from "moment";
import "./Observation.css";

export default function Observation(props) {
  const history = useHistory();
  const { id, species, date, time, description } = props.observation;
  const dateFormat = moment(date).format("L");
  const timeFormat = moment(time, "hh:mm:ss").format("hh:mm a");
  const timeFormatSplit = timeFormat.split(" ");
  const timeCorrect = timeFormatSplit[0];
  const ampm = timeFormatSplit[1];

  const handleDeleteRequest = (id) => {
    fetch(API_ENDPOINT + `/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => {
        if (!res.ok) return res.json().then((error) => Promise.reject(error));
        return res;
      })
      .then((data) => {
        history.push("/");
      })
      .catch((error) => {
        console.error({ error });
      });
  };

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
        <button onClick={() => handleDeleteRequest(id)}>Delete</button>
      </div>
    </div>
  );
}
