import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import LandingPage from "../LandingPage/LandingPage";
import Nav from "../Nav/Nav";
import Context from "../Context/Context";
import AddObservation from "../AddObservation/AddObservation";
import LoginPage from "../LoginPage/LoginPage";
import EditObservation from "../EditObservation/EditObservation";
import ObservationList from "../ObservationList/ObservationList";
import MyNaturehood from "../MyNaturehood/MyNaturehood";
import { API_ENDPOINT } from "../config";
import PropTypes from "prop-types";
import "./App.css";

class App extends React.Component {
  state = {
    observations: [],
    error: null,
  };

  handleUpdateObservation = (updatedObservation) => {
    this.setState({
      observations: this.state.observations.map((o) =>
        o.id !== updatedObservation.id ? o : updatedObservation
      ),
    });
  };

  handleAddObservation = (observation) => {
    this.setState({
      observations: [...this.state.observations, observation],
    });
  };

  componentDidMount() {
    fetch(API_ENDPOINT)
      .then((res) => {
        if (!res.ok) {
          throw new Error(console.log(res.status));
        }
        return res.json();
      })
      .then((observations) => {
        this.setState({ observations });
      })
      .catch((error) => {
        console.error({ error });
      });
  }

  render() {
    const value = {
      observations: this.state.observations,
      addObservation: this.handleAddObservation,
      deleteObservation: this.handleDeleteObservation,
      updateObservation: this.handleUpdateObservation,
      error: this.state.error,
      // setError: this.setError,
      // clearError: this.clearError,
    };
    const { observations } = this.state;
    return (
      <div className="App">
        <Context.Provider value={value}>
          <header className="App-header App-row">
            <Link to="/">
              <h1 className="App-h1">natureHood</h1>
            </Link>
            <Nav />
          </header>
          <main>
            <Switch>
              <Route exact path={"/"} component={LandingPage} />
              <Route
                path={"/mynaturehood"}
                render={(props) => (
                  <MyNaturehood
                    {...props}
                    observations={this.state.observations}
                  />
                )}
              />
              <Route path={"/add-observation"} component={AddObservation} />
              <Route
                path={"/observations/edit/:observationId"}
                render={(props) => (
                  <EditObservation {...props} observations={observations} />
                )}
              />
              <Route
                path={"/observations"}
                render={() => (
                  <ObservationList observations={this.state.observations} />
                )}
              />
              <Route path={"/login"} render={() => <LoginPage />} />
            </Switch>
          </main>
          <footer>
            <p>Created by Sally Galler</p>
          </footer>
        </Context.Provider>
      </div>
    );
  }
}

App.propTypes = {
  observations: PropTypes.array,
};

export default App;
