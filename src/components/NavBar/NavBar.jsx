import React from "react";
import { NavLink, Redirect, Route, Switch } from "react-router-dom";

export const NavBar = () => {
  return (
    <>
      <nav className="navbar box-shadow" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <NavLink to="/" className="navbar-item" href="">
            <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28"/>
          </NavLink>

          <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"/>
            <span aria-hidden="true"/>
            <span aria-hidden="true"/>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <NavLink to="/link1" className="navbar-item">Home</NavLink>
            <NavLink to="/link2" className="navbar-item">Documentation</NavLink>

            <div className="navbar-item has-dropdown is-hoverable">
              <NavLink to="/link3" className="navbar-link">More</NavLink>

              <div className="navbar-dropdown">
                <NavLink to="/" activeClassName="active" className="navbar-item">
                  About
                </NavLink>
                <hr className="navbar-divider"/>
                <NavLink to="/" activeClassName="active" className="navbar-item">
                  Report an issue
                </NavLink>
              </div>
            </div>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a className="button is-primary"><strong>Sign up</strong></a>
                <a className="button is-light">Log in</a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <Switch>
        <Route exact path="/rm-app" render={() => {
          return <Redirect />
        }}
        />
        <Route path="/link1"/>
        <Route path="/link2"/>
        <Route path="/link3"/>
        <Route path="/link4"/>
      </Switch>
    </>
  );
};
