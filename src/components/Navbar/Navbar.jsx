import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import Logo from "../../assets/LA-logo.png";
import "./Navbar.scss";

export class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navCollapsed: true
    };
  }

  _onToggleNav = () => {
    this.setState({ navCollapsed: !this.state.navCollapsed });
  };

  render() {
    return (
      <nav className="navbar navbar-expand-sm sticky-top navbar-dark bg-dark mb-3">
        <Link to="/" className="navbar-brand">
          <img src={Logo} className="logo" alt="Lucas Arvelo Logo" />
          Lucas Arvelo
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={this._onToggleNav}
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className={
            (this.state.navCollapsed ? "collapse" : "") + " navbar-collapse"
          }
          id="navbar"
        >
          <ul className="navbar-nav text-monospace font-weight-bold ">
            <li className="nav-item">
              <NavLink exact to="/" className="nav-item nav-link m-3">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className="nav-item nav-link m-3">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" className="nav-item nav-link m-3">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
