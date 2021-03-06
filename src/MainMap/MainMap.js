import React from "react";
import mapboxgl from "mapbox-gl";
import { dateFormat, timeFormat } from "../Utils/Utils";
import "./MainMap.css";
import { API_TOKEN } from "../config";

// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass = require("worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker").default;

mapboxgl.accessToken = API_TOKEN;

class MainMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      map: null,
      zoom: 12.5,
    };
  }

  componentDidMount() {
    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: "mapbox://styles/mapbox/outdoors-v11",
      center: [this.props.centralLng, this.props.centralLat],
      zoom: this.state.zoom,
    });

    const observations = this.props.observations;
    observations.forEach((observation) => {
      const popup = new mapboxgl.Popup({ offset: 0 }).setText(
        `${observation.species} seen ${dateFormat(observation)}
        at ${timeFormat(observation)} - "${observation.description}"`
      );
      new mapboxgl.Marker({ draggable: false })
        .setLngLat([observation.lng, observation.lat])
        .setPopup(popup)
        .addTo(this.map);
    });
  }

  componentDidUpdate() {
    const observations = this.props.observations;
    observations.forEach((observation) => {
      const popup = new mapboxgl.Popup({ offset: 0 }).setText(
        `${observation.species} seen ${dateFormat(observation)}
        at ${timeFormat(observation)} - "${observation.description}"`
      );
      new mapboxgl.Marker({ draggable: false })
        .setLngLat([observation.lng, observation.lat])
        .setPopup(popup)
        .addTo(this.map);
    });
  }

  componentWillUnmount() {
    this.map.remove();
  }

  render() {
    return (
      <div className="MainMap">
        <div ref={(el) => (this.mapContainer = el)} className="mapContainer" />
      </div>
    );
  }
}

export default MainMap;
