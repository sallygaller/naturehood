import React, { useState } from "react";
import { useHistory } from "react-router";
import moment from "moment";
import AddObservationMap from "../AddObservationMap/AddObservationMap";
import TokenService from "../services/token-service";
import { API_ENDPOINT } from "../config";
import "./AddObservation.css";

export default function AddObservation(props) {
  const history = useHistory();
  const [species, setSpecies] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [timeShort, setTimeShort] = useState("3:00");
  const [ampm, setAmpm] = useState("pm");
  const [lat, setLat] = useState(45.6008);
  const [lng, setLng] = useState(-122.7606);
  const [error, setError] = useState(null);

  const Required = () => <span className="AddObservation-required">*</span>;
  const validTime = (str) => /^(1[0-2]|0?[1-9]):[0-5][0-9]$/.test(str);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validTime(timeShort)) {
      setError("Time must be in twelve hour HH:MM format (e.g. 08:15)");
    } else {
      const fullTime = timeShort.concat(ampm);
      const time = moment(fullTime, "h:mm a").format("H:mm");
      const observation = {
        species,
        type,
        description,
        date,
        time,
        lat,
        lng,
      };
      fetch(API_ENDPOINT + `/observations`, {
        method: "POST",
        body: JSON.stringify(observation),
        headers: {
          "content-type": "application/json",
          authorization: `bearer ${TokenService.getAuthToken()}`,
        },
      })
        .then((res) => {
          if (!res.ok) {
            return res.json().then((error) => {
              throw error;
            });
          }
          return res.json();
        })
        .then((data) => {
          history.push("/observations/user");
        })
        .catch((error) => {
          setError(error.message);
        });
    }
  };

  const handleClickCancel = () => {
    history.push("/observations/user");
  };

  return (
    <div className="AddObservation">
      <h2>Add Observation</h2>
      <div>
        <form className="AddObservation-form" onSubmit={(e) => handleSubmit(e)}>
          <div className="AddObservation-error" role="alert">
            {error && (
              <p>
                {error.message}
                {error}
              </p>
            )}
          </div>
          <label htmlFor="species">
            Species seen:
            <Required />
          </label>
          <input
            className="AddObservation-text"
            type="text"
            name="species"
            id="species"
            value={species}
            onChange={(e) => setSpecies(e.target.value)}
            required
          ></input>
          <label htmlFor="type">
            Type of species:
            <Required />
          </label>
          <select
            id="type"
            name="type"
            required
            onChange={(e) => setType(e.target.value)}
          >
            <option value={type}></option>
            <option value="Mammal">Mammal</option>
            <option value="Bird">Bird</option>
            <option value="Arthropod">Arthropod</option>
            <option value="Amphibian">Amphibian</option>
            <option value="Reptile">Reptile</option>
            <option value="Fish">Fish</option>
          </select>
          <label htmlFor="description">
            Description (be as detailed as possible):
          </label>
          <textarea
            id="description"
            name="description"
            className="AddObservation-textarea"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <label htmlFor="date">Date seen (MM/DD/YYYY):</label>
          <input
            type="text"
            id="date"
            name="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <label htmlFor="date">
            Time seen (approximate):
            <Required />
          </label>
          <input
            type="text"
            id="time"
            name="time"
            value={timeShort}
            onChange={(e) => setTimeShort(e.target.value)}
            required
            placeholder="HH:MM"
          />
          <select
            id="ampm"
            value={ampm}
            onChange={(e) => setAmpm(e.target.value)}
            required
          >
            <option>am</option>
            <option>pm</option>
          </select>
          <div className="AddObservation-location-label">
            <label htmlFor="location">
              Location (drag and drop the marker):
              <Required />
            </label>
          </div>
          <AddObservationMap
            lat={lat}
            lng={lng}
            setLat={setLat}
            setLng={setLng}
            centralLat={props.centralLat}
            centralLng={props.centralLng}
          />
          <p className="AddObservation-latlong">
            Latitude: {lat}
            <br></br>
            Longitude: {lng}
          </p>
          <button type="submit">Submit</button>{" "}
          <button type="button" onClick={handleClickCancel}>
            Cancel
          </button>{" "}
        </form>
      </div>
    </div>
  );
}
