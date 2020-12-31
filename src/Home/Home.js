import React from "react";
import Map from "../Map/Map";
import "./Home.css";

export default function Home() {
  return (
    <div className="Home">
      <h1>Home</h1>
      <Map />
      <div class="Home-date-filter">
        <input
          type="text"
          id="startDate"
          placeholder="Start Date"
          name="startDate"
        ></input>
        <input
          type="text"
          id="endDate"
          placeholder="End Date"
          name="endDate"
        ></input>
      </div>
      <div class="Home-species-filter">
        <select>
          <option value="all">All Species</option>
          <option value="robin">Robin</option>
          <option value="fox">Fox</option>
          <option value="fox">Raccoon</option>
        </select>
      </div>
    </div>
  );
}
