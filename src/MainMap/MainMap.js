import React, { useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import API_KEY from "../config.js";
import "./MainMap.css";

const containerStyle = {
  width: "400px",
  height: "400px",
  margin: "0 auto",
};

const center = {
  lat: 45.6008,
  lng: -122.7606,
};

export default function MainMap(props) {
  const observations = props.observations;
  const [selectedSpecies, setSelectedSpecies] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedAmpm, setSelectedAmpm] = useState(null);

  function createKey(location) {
    return location.lat + location.lng;
  }

  return (
    <div className="MainMap">
      <LoadScript googleMapsApiKey={API_KEY}>
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
          {observations.map((observation) => (
            <Marker
              key={createKey({ lat: observation.lat, lng: observation.lng })}
              position={{ lat: observation.lat, lng: observation.lng }}
              averageCenter={true}
              onClick={() => {
                setSelectedDate(observation.date);
                setSelectedSpecies(observation.species);
                setSelectedTime(observation.time);
                setSelectedAmpm(observation.ampm);
              }}
            />
          ))}
        </GoogleMap>
      </LoadScript>
      <div>
        <p className={!selectedSpecies ? "MainMap-hidden" : null}>
          {selectedSpecies}, seen {selectedTime}
          {selectedAmpm} on {selectedDate}
        </p>
      </div>
    </div>
  );
}
