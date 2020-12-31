import React from "react";
import "./Map.css";
import Image from "./map.png";

export default function Map() {
  return (
    <div className="Map">
      <img src={Image} alt="temp" />
    </div>
  );
}
