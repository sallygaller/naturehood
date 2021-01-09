import React from "react";
import mapboxgl from "mapbox-gl";
import "./AddObservationMap.css";
import API_TOKEN from "../config";

// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass = require("worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker").default;

mapboxgl.accessToken = API_TOKEN;

class AddObservationMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      map: null,
      zoom: 12,
      lngLat: 0,
    };
  }

  componentDidMount() {
    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [this.props.lng, this.props.lat],
      zoom: this.state.zoom,
    });

    const marker = new mapboxgl.Marker({ draggable: true })
      .setLngLat([this.props.lng, this.props.lat])
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
