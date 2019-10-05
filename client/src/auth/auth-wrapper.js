import React, { Component } from "react";
import { AuthContext } from "./auth-context";

export const authWrapper = (WrappedComponent) => 
    class extends Component {
        render = () => 
            <AuthContext.Consumer>
                { context =>
                    <WrappedComponent { ...this.props } { ...context } />
                }
            </AuthContext.Consumer>
    }