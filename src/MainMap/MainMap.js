import React, { useState } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
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
  const [selectedLat, setSelectedLat] = useState(null);
  const [selectedLng, setSelectedLng] = useState(null);
  const infoWindowPosition = { lat: selectedLat, lng: selectedLng };

  const divStyle = {
    padding: 5,
  };

  return (
    <div className="MainMap">
      <LoadScript googleMapsApiKey={API_KEY}>
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
          {observations.map((observation) => (
            <Marker
              key={observation.id}
              position={{ lat: observation.lat, lng: observation.lng }}
              averageCenter={true}
              onClick={() => {
                setSelectedDate(observation.date);
                setSelectedSpecies(observation.species);
                setSelectedTime(observation.time);
                setSelectedAmpm(observation.ampm);
                setSelectedLat(observation.lat);
                setSelectedLng(observation.lng);
                console.log(selectedSpecies);
                console.log(selectedLng);
              }}
            />
          ))}
          {/* {selectedSpecies && (
            <InfoWindow position={infoWindowPosition}>
              <div style={divStyle}>
                <p>{selectedSpecies}</p>
              </div>
            </InfoWindow>
          )} */}
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
