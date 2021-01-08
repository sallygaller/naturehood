import React from "react";
import mapboxgl from "mapbox-gl";
import "./MainMap.css";
import API_TOKEN from "../config";

// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass = require("worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker").default;

mapboxgl.accessToken = API_TOKEN;

const containerStyle = {
  width: "400px",
  height: "400px",
  margin: "0 auto",
};

const center = {
  lat: 45.6008,
  lng: -122.7606,
};

class MainMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      map: null,
      lng: 12.550343,
      lat: 55.665957,
      zoom: 8,
      showingInfoWindow: false,
      activeMarker: {},
      selectedObservation: {},
      selectedObservationPosition: {},
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

  handleMarkerClick = (observation, marker, e) => {
    this.setState({
      selectedObservation: observation,
      selectedObservationPosition: {
        lat: observation.lat,
        lng: observation.lng,
      },
      activeMarker: marker,
      showingInfoWindow: true,
    });
  };

  handleCloseClick = (e) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
        selectedObservation: {},
      });
    }
  };

  // render() {
  //   const observations = this.props.observations;
  //   return (
  //     <div className="MainMap">
  //       <GoogleMap
  //         mapContainerStyle={containerStyle}
  //         center={center}
  //         zoom={12}
  //         onLoad={this.props.unLoad}
  //         onUnmount={this.props.onUnmount}
  //       >
  //         {observations.map((observation) => (
  //           <Marker
  //             key={observation.id}
  //             position={{ lat: observation.lat, lng: observation.lng }}
  //             averageCenter={true}
  //             onClick={(e) => this.handleMarkerClick(observation, e)}
  //           />
  //         ))}
  //         {this.state.showingInfoWindow && (
  //           <InfoWindow
  //             marker={this.state.activeMarker}
  //             visible={this.state.showingInfoWindow}
  //             onCloseClick={(e) => this.handleCloseClick(e)}
  //             position={this.state.selectedObservationPosition}
  //           >
  //             <div>
  //               <p>
  //                 {this.state.selectedObservation.species} seen{" "}
  //                 {this.state.selectedObservation.date} at{" "}
  //                 {this.state.selectedObservation.time}{" "}
  //                 {this.state.selectedObservation.ampm}
  //               </p>
  //             </div>
  //           </InfoWindow>
  //         )}
  //       </GoogleMap>
  //     </div>
  //   );
  // }
}

export default MainMap;
