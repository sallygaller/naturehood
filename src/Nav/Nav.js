import React from "react";
import { NavLink } from "react-router-dom";
import TokenService from "../services/token-service";
import IdleService from "../services/idle-service";
import "./Nav.css";

class Nav extends React.Component {
  handleLogoutClick = () => {
    TokenService.clearAuthToken();
    /* when logging out, clear the callbacks to the refresh api and idle auto logout */
    TokenService.clearCallbackBeforeExpiry();
    IdleService.unRegisterIdleResets();
    this.renderLoginLink();
  };

  renderLogoutLink() {
    return (
      <div>
        <NavLink onClick={this.handleLogoutClick} to="/">
          Logout
        </NavLink>
      </div>
    );
  }

  renderLoginLink() {
    return (
      <div>
        <NavLink to="/login">Log in</NavLink>
      </div>
    );
  }

  render() {
    return (
      <nav className="Nav">
        <NavLink
          to="/mynaturehood"
          activeStyle={{
            fontWeight: "bold",
          }}
        >
          My natureHood
        </NavLink>{" "}
        <NavLink
          to="/observations"
          activeStyle={{
            fontWeight: "bold",
          }}
        >
          My Observations
        </NavLink>{" "}
        <NavLink
          to="/add-observation"
          activeStyle={{
            fontWeight: "bold",
          }}
        >
          Add Observation
        </NavLink>{" "}
        {TokenService.hasAuthToken()
          ? this.renderLogoutLink()
          : this.renderLoginLink()}
      </nav>
    );
  }
}

export default Nav;
