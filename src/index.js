import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App/App";

const OBSERVATIONS = [
  {
    id: 1,
    species: "Robin",
    type: "Bird",
    date: "12/31/2020",
    time: "3:00",
    ampm: "PM",
    description: "I saw a robin. It was pretty fat.",
    lat: 45.559802,
    long: 122.753875,
  },
  {
    id: 2,
    species: "Raccoon",
    type: "Mammal",
    date: "12/15/2020",
    time: "6:00",
    ampm: "AM",
    description: "A group of raccoons chased me down the street.",
    lat: 49.559802,
    long: 120.753875,
  },
  {
    id: 3,
    species: "Fox",
    type: "Mammal",
    date: "12/10/2020",
    time: "5:00",
    ampm: "AM",
    description: "I saw a fox and her two cubs. The mother fox hissed at me.",
    lat: 49.559802,
    long: 120.753875,
  },
];

ReactDOM.render(
  <BrowserRouter>
    <App observations={OBSERVATIONS} />
  </BrowserRouter>,
  document.getElementById("root")
);
