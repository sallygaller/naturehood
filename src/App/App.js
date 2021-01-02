import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import LandingPage from "../LandingPage/LandingPage";
import LandingPageNav from "../LandingPageNav/LandingPageNav";
import AddObservation from "../AddObservation/AddObservation";
import EditObservation from "../EditObservation/EditObservation";
import ObservationList from "../ObservationList/ObservationList";
import Home from "../Home/Home";
import "./App.css";

export default function App(props) {
  const observations = props.observations;
  return (
    <div className="App">
      <header>
        <Link to="/">
          <h1 className="App-h1">natureHood</h1>
        </Link>
        <LandingPageNav />
      </header>
      <main>
        <Switch>
          <Route exact path={"/"} component={LandingPage} />
          <Route path={"/home"} component={Home} />
          <Route path={"/add-observation"} component={AddObservation} />
          <Route
            path={"/edit/observation/:observationId"}
            render={(props) => (
              <EditObservation {...props} observations={observations} />
            )}
          />
          <Route
            path={"/observations"}
            render={() => <ObservationList observations={observations} />}
          />
        </Switch>
      </main>
    </div>
  );
}
