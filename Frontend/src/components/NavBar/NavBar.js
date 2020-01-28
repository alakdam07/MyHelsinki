import React, { Component } from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <div className="NavBar">
        <header>
          <div className="nav-container">
            <nav className="nav-checkbox">
              <img
                src="https://www.myhelsinki.fi/static/97d28d50f16a3b2b470476a601aa37c2.svg"
                alt="logo"
                style={{ width: "60px", height: "60px" }}
              />
              <input id="tab-nav" type="checkbox" className="tab-nav" />
              <label htmlFor="tab-nav" className="tab-nav-label">
                Menu
              </label>
              <ul className="tab-content">
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/places">Places</NavLink>
                </li>
                <li>
                  <NavLink to="/events">Events</NavLink>
                </li>
                <li>
                  <NavLink to="/activities">Activities</NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </header>
      </div>
    );
  }
}

export default NavBar;
