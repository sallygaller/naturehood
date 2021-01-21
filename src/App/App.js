import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import LandingPage from "../LandingPage/LandingPage";
import Nav from "../Nav/Nav";
import PrivateRoute from "../Utils/PrivateRoute";
import PublicOnlyRoute from "../Utils/PublicOnlyRoute";
import Context from "../Context/Context";
import AddObservation from "../AddObservation/AddObservation";
import LoginPage from "../LoginPage/LoginPage";
import EditObservation from "../EditObservation/EditObservation";
import ObservationList from "../ObservationList/ObservationList";
import MyNaturehood from "../MyNaturehood/MyNaturehood";
import TokenService from "../services/token-service";
import AuthApiService from "../services/auth-api-service";
import IdleService from "../services/idle-service";
import PropTypes from "prop-types";
import "./App.css";

class App extends React.Component {
  state = {
    observations: [],
    error: null,
  };

  componentDidMount() {
    /*
      set the function (callback) to call when a user goes idle
      we'll set this to logout a user when they're idle
    */
    IdleService.setIdleCallback(this.logoutFromIdle);

    /* if a user is logged in */
    if (TokenService.hasAuthToken()) {
      /*
        tell the idle service to register event listeners
        the event listeners are fired when a user does something, e.g. move their mouse
        if the user doesn't trigger one of these event listeners,
          the idleCallback (logout) will be invoked
      */
      IdleService.regiserIdleTimerResets();

      /*
        Tell the token service to read the JWT, looking at the exp value
        and queue a timeout just before the token expires
      */
      TokenService.queueCallbackBeforeExpiry(() => {
        /* the timoue will call this callback just before the token expires */
        AuthApiService.postRefreshToken();
      });
    }
  }

  componentWillUnmount() {
    /*
      when the app unmounts,
      stop the event listeners that auto logout (clear the token from storage)
    */
    IdleService.unRegisterIdleResets();
    /*
      and remove the refresh endpoint request
    */
    TokenService.clearCallbackBeforeExpiry();
  }

  logoutFromIdle = () => {
    /* remove the token from localStorage */
    TokenService.clearAuthToken();
    /* remove any queued calls to the refresh endpoint */
    TokenService.clearCallbackBeforeExpiry();
    /* remove the timeouts that auto logout when idle */
    IdleService.unRegisterIdleResets();
    /*
      react won't know the token has been removed from local storage,
      so we need to tell React to rerender
    */
    this.forceUpdate();
  };

  handleAddObservation = (observation) => {
    this.setState({
      observations: [...this.state.observations, observation],
    });
  };

  handleUpdateObservation = (updatedObservation) => {
    this.setState({
      observations: this.state.observations.map((o) =>
        o.id !== updatedObservation.id ? o : updatedObservation
      ),
    });
  };

  handleDeleteObservation = (observationId) => {
    const newObservations = this.state.observations.filter(
      (observation) => observation.id !== observationId
    );
    this.setState({
      observations: newObservations,
    });
  };

  render() {
    const value = {
      observations: this.state.observations,
      addObservation: this.handleAddObservation,
      deleteObservation: this.handleDeleteObservation,
      updateObservation: this.handleUpdateObservation,
      error: this.state.error,
    };
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
              <PrivateRoute path={"/mynaturehood"} component={MyNaturehood} />
              <PrivateRoute
                path={"/add-observation"}
                component={AddObservation}
              />
              <PrivateRoute
                path={"/observations/edit/:observationId"}
                component={EditObservation}
              />
              <PrivateRoute
                path={"/observations"}
                component={ObservationList}
              />
              <PublicOnlyRoute path={"/login"} component={LoginPage} />
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
