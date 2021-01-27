import React from "react";
import Mammal from "./images/mammal.jpeg";
import Insect from "./images/insect.jpeg";
import Bird from "./images/bird.jpeg";
import Reptile from "./images/reptile.jpeg";
import Fish from "./images/fish.jpeg";
import Amphibian from "./images/amphibian.jpeg";
import "./SpeciesAnalysis.css";

function countSpecies(speciesType, observations) {
  let type = speciesType.type;
  let results = 0;
  for (let i = 0; i < observations.length; i++) {
    if (observations[i].type === type) {
      results = results + 1;
    }
  }
  return results;
}

function className(speciesType) {
  if (speciesType.type === "Mammal") {
    return Mammal;
  }
  if (speciesType.type === "Bird") {
    return Bird;
  }
  if (speciesType.type === "Arthropod") {
    return Insect;
  }
  if (speciesType.type === "Reptile") {
    return Reptile;
  }
  if (speciesType.type === "Fish") {
    return Fish;
  }
  if (speciesType.type === "Amphibian") {
    return Amphibian;
  } else return null;
}

export default function SpeciesAnalysis(props) {
  const observations = props.observations;
  const speciesType = props.speciesType;
  return (
    <div className="SpeciesAnalysis">
      {countSpecies(speciesType, observations)}{" "}
      <img
        className="SpeciesAnalysis-img"
        alt={speciesType.type}
        src={className(speciesType)}
      />
      seen
    </div>
  );
}
