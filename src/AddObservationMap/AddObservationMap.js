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
      lng: 12.550343,
      lat: 55.665957,
      zoom: 8,
    };
  }

  componentDidMount() {
    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom,
    });

    const marker = new mapboxgl.Marker({ draggable: true })
      .setLngLat([this.state.lng, this.state.lat])
      .addTo(this.map);
    marker.on("dragend", onDragEnd);
    function onDragEnd() {
      const lngLat = marker.getLngLat();
      const lat = lngLat.lat;
      const lng = lngLat.lng;
      console.log(lat);
      console.log(lng);
      // this.props.onMarkerDrop(lat, lng);
    }

    this.map.on("move", () => {
      this.setState({
        lng: this.map.getCenter().lng.toFixed(4),
        lat: this.map.getCenter().lat.toFixed(4),
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
        <div className="sidebarStyle">
          <div>
            Longitude: {this.state.lng} | Latitude: {this.state.lat} | Zoom:{" "}
            {this.state.zoom}
          </div>
        </div>
        <div ref={(el) => (this.mapContainer = el)} className="mapContainer" />
      </div>
    );
  }
}

export default AddObservationMap;
