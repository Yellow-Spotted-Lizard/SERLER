import React, { Component } from 'react';
//import ApolloClient from "apollo-boost";
//import { ApolloProvider } from "react-apollo";
import { Route, Redirect, Switch } from "react-router-dom";
//import { ToggleLink } from "../toggle-link";
//import { GraphQlUrl } from "../data/urls";
import { AuthPrompt } from "../auth/auth-prompt";
import { authWrapper } from "../auth/auth-wrapper";
import UserList from "./user-list.component";

export default authWrapper(class extends Component {

  constructor(props) {
    super(props);
    /*
    this.client = new ApolloClient({
      uri: GraphQlUrl,
      request: gqloperation => gqloperation.setContext({
        headers: {
          Authorization: `Bearer<${this.props.webToken}>`
        },
      })
      */
  }

  render() {
    return (
      <div>
        <div>
          <Switch>
            {
              !this.props.isAuthenticated &&
              <Route component={AuthPrompt} />
            }
          </Switch>
          {this.props.isAuthenticated &&
            <Route component={UserList} />
          }
        </div>
        <div>
          {this.props.isAuthenticated &&
            <button onClick={this.props.signout}
              className=
              "btn btn-block btn-secondary m-2 fixed-bottom col-3">
              Log Out
            </button>
          }
        </div>
      </div>
    );
  }
}
)
