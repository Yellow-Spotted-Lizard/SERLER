import React, { Component } from 'react';
import logo from '../Serler-Lizard.svg';

export default class About extends Component {

    render() {
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
}
