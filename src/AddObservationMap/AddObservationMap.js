import React from "react";
import mapboxgl from "mapbox-gl";
import "./AddObservationMap.css";
import { API_TOKEN } from "../config";

// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
// mapboxgl.workerClass = require("worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker").default;

mapboxgl.accessToken = API_TOKEN;

class AddObservationMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      map: null,
      zoom: 12.5,
      lng: "",
      lat: "",
    };
  }

  componentDidMount() {
    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: "mapbox://styles/mapbox/outdoors-v11",
      center: [this.props.centralLng, this.props.centralLat],
      zoom: this.state.zoom,
    });

    const marker = new mapboxgl.Marker({ draggable: true })
      .setLngLat([this.props.centralLng, this.props.centralLat])
      .addTo(this.map);

    const onDragEnd = () => {
      const coordinates = marker.getLngLat();
      this.props.setLng(coordinates.lng);
      this.props.setLat(coordinates.lat);
    };

    marker.on("dragend", onDragEnd);

    this.map.on("move", () => {
      this.setState({
        zoom: this.map.getZoom().toFixed(2),
      });
    });
  }

  componentWillUnmount() {
    this.map.remove();
  }

  render() {
    return (
      <div>
        <div ref={(el) => (this.mapContainer = el)} className="mapContainer" />
      </div>
    );
  }
}

export default AddObservationMap;
