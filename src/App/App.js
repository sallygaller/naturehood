import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import LandingPage from "../LandingPage/LandingPage";
import LandingPageNav from "../LandingPageNav/LandingPageNav";
import AddObservation from "../AddObservation/AddObservation";
import EditObservation from "../EditObservation/EditObservation";
import Observations from "../Observations/Observations";
import Home from "../Home/Home";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <header>
        <Link to="/">
          <h1 className="App-h1">natureHood</h1>
        </Link>
      </header>
      <LandingPageNav />
      <main>
        <Switch>
          <Route exact path={"/"} component={LandingPage} />
          <Route path={"/home"} component={Home} />
          <Route path={"/add-observation"} component={AddObservation} />
          <Route path={"/edit/:observationId"} component={EditObservation} />
          <Route path={"/observations"} component={Observations} />
        </Switch>
      </main>
    </div>
  );
}
