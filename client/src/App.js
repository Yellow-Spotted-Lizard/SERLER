//import React from 'react';
import React, { Component } from 'react';
import logo from './Serler-Lizard.png';
import './App.css';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import { AuthProviderImpl } from "./auth/auth-provider-impl";

import Browse from "./components/browse.component";
import Search from "./components/search.component";
import Submit from "./components/submit.component";
import QualityCheck from "./components/quality-check.component";
import Analyze from "./components/analyze.component";
import RepositorySettings from "./components/repository-settings.component";
import Admin from "./components/admin.component";
import About from "./components/about.component";
import Dashboard from "./components/dashboard.component";
import AltSearch from "./components/alt-search.component";

class App extends Component {
  render() {
    return (
      <AuthProviderImpl>
        <Router>
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <a className="navbar-brand" href="https://yellow-spotted-lizard-serler.herokuapp.com" target="_blank">
                <img src={logo} width="30" height="30" />
              </a>
              <Link to="/" className="navbar-brand">Home</Link>
              <div className="collpase navbar-collapse">
                <ul className="navbar-nav mr-auto">
                  <li className="navbar-item">
                    <Link to="/browse" className="nav-link">Browse</Link>
                  </li>
                  <li className="navbar-item">
                    <Link to="/search" className="nav-link">Search</Link>
                  </li>
                  <li className="navbar-item">
                    <Link to="/alt-search" className="nav-link">Alt Search</Link>
                  </li>
                  <li className="navbar-item">
                    <Link to="/submit" className="nav-link">Submit</Link>
                  </li>
                  <li className="navbar-item">
                    <Link to="/quality-check" className="nav-link">Quality check</Link>
                  </li>
                  <li className="navbar-item">
                    <Link to="/analyze" className="nav-link">Analyze</Link>
                  </li>
                  <li className="navbar-item">
                    <Link to="/repository-settings" className="nav-link">Repository Settings</Link>
                  </li>
                  <li className="navbar-item">
                    <Link to="/admin" className="nav-link">Admin</Link>
                  </li>
                  <li className="navbar-item">
                    <Link to="/about" className="nav-link">About</Link>
                  </li>
                </ul>
              </div>
            </nav>
            <br />
            <Route path="/" exact component={Dashboard} />
            <Route path="/browse" component={Browse} />
            <Route path="/search" component={Search} />
            <Route path="/alt-search" component={AltSearch} />
            <Route path="/submit" component={Submit} />
            <Route path="/quality-check" component={QualityCheck} />
            <Route path="/analyze" component={Analyze} />
            <Route path="/repository-settings" component={RepositorySettings} />
            <Route path="/admin" component={Admin} />
            <Route path="/about" component={About} />
          </div>
        </Router>
      </AuthProviderImpl>
    );
  }
}

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Yellow Spotted Lizard (Team 9) SERLER
        </p>
      </header>
    </div>
  );
}
*/

export default App;