import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import API_KEY from "./config";

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
    lat: 45.591,
    lng: -122.749,
  },
  {
    id: 2,
    species: "Raccoon",
    type: "Mammal",
    date: "12/15/2020",
    time: "6:00",
    ampm: "AM",
    description: "A group of raccoons chased me down the street.",
    lat: 45.589,
    lng: -122.741,
  },
  {
    id: 3,
    species: "Fox",
    type: "Mammal",
    date: "12/10/2020",
    time: "5:00",
    ampm: "AM",
    description: "I saw a fox and her two cubs. The mother fox hissed at me.",
    lat: 45.586,
    lng: -122.751,
  },
];

// Create the script tag, set the appropriate attributes
var script = document.createElement("script");
script.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&callback=initMap`;
script.defer = true;

// Attach your callback function to the `window` object
window.initMap = function () {
  // JS API is loaded and available
};

// Append the 'script' element to 'head'
document.head.appendChild(script);

ReactDOM.render(
  <BrowserRouter>
    <App observations={OBSERVATIONS} />
  </BrowserRouter>,
  document.getElementById("root")
);
