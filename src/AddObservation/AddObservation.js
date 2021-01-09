import React, { useState } from "react";
import AddObservationMap from "../AddObservationMap/AddObservationMap";
import "./AddObservation.css";

export default function AddObservation() {
  const [species, setSpecies] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("3:00");
  const [ampm, setAmpm] = useState("pm");
  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);

  const isFilledIn =
    species && type && description && date && time && ampm && lat && lng;

  const handleMarkerDrop = (lngLat) => {
    console.log(lngLat);
  };

  return (
    <div className="AddObservation">
      <h2>Add Observation</h2>
      <div>
        <form className="AddObservation-form">
          <label htmlFor="species">Species seen:</label>
          <input
            className="AddObservation-text"
            type="text"
            name="species"
            id="species"
            value={species}
            onChange={(e) => setSpecies(e.target.value)}
          ></input>
          <label htmlFor="type">Type of species:</label>
          <select
            id="type"
            name="type"
            onChange={(e) => setType(e.target.value)}
          >
            <option value={type}></option>
            <option value="mammal">Mammal</option>
            <option value="bird">Bird</option>
            <option value="arthropod">Arthropod</option>
            <option value="amphibian">Amphibian</option>
            <option value="reptile">Reptile</option>
            <option value="fish">Fish</option>
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
          <label htmlFor="date">Date seen:</label>
          <input
            type="text"
            id="date"
            name="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <label htmlFor="date">Time seen (approximate):</label>
          <input
            type="text"
            id="time"
            name="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
          <select
            id="ampm"
            value={ampm}
            onChange={(e) => setAmpm(e.target.value)}
          >
            <option>am</option>
            <option>pm</option>
          </select>
          <label htmlFor="location">Location (drag and drop the marker):</label>
          <AddObservationMap onMarkerDrop={handleMarkerDrop} />
          <p className="AddObservation-latlong">
            Latitude: {lat}
            <br></br>
            Longitude: {lng}
          </p>
          <button type="submit" disabled={!isFilledIn}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
