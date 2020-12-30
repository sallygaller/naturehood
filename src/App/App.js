import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import LandingPage from "../LandingPage";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <header>
        <Link to="/">
          <h1 className="App-h1">natureHood</h1>
        </Link>
      </header>
      <main>
        <Switch>
          <Route path="/" component={LandingPage} />
          {/* <Route path="/add-observation" component={AddObservation} />
          <Route path="/edit/:observationId" component={EditObservation} />
          <Route path="/dashboard" component={Dashboard} />
          <Route page="/home" component={Home} /> */}
        </Switch>
      </main>
    </div>
  );
}
