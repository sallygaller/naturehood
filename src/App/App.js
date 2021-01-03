import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import LandingPage from "../LandingPage/LandingPage";
import Nav from "../Nav/Nav";
import AddObservation from "../AddObservation/AddObservation";
import EditObservation from "../EditObservation/EditObservation";
import ObservationList from "../ObservationList/ObservationList";
import MyNaturehood from "../MyNaturehood/MyNaturehood";
import LoginPage from "../LoginPage/LoginPage";
import "./App.css";

export default function App(props) {
  const observations = props.observations;
  return (
    <div className="App">
      <header className="App-header App-row">
        <Link to="/">
          <h1 className="App-h1">natureHood</h1>
        </Link>
        <Nav />
      </header>
      <main className="App-main App-content">
        <Switch>
          <Route exact path={"/"} component={LandingPage} />
          <Route
            path={"/mynaturehood"}
            render={() => <MyNaturehood observations={observations} />}
          />
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
          <Route path={"/login"} render={() => <LoginPage />} />
        </Switch>
      </main>
    </div>
  );
}
