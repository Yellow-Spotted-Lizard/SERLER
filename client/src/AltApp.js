import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { AuthProviderImpl } from "./auth/auth-provider-impl";
import Search from "./components/search.component";
import AltSearch from "./components/alt-search.component";
import Admin from "./components/admin.component";
import About from "./components/about.component";

import logo from './Serler-Lizard.png';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

class AltApp extends Component {
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
                                        <Link to="/search" className="nav-link">Search</Link>
                                    </li>
                                    <li className="navbar-item">
                                        <Link to="/debug-search" className="nav-link">Debug search</Link>
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
                        <Route path="/" exact component={AltSearch} />
                        <Route path="/search" component={AltSearch} />
                        <Route path="/debug-search" component={Search} />
                        <Route path="/admin" component={Admin} />
                        <Route path="/about" component={About} />
                    </div>
                </Router>
            </AuthProviderImpl>
        );
    }
}

export default AltApp;
