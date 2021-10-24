import React from "react";
import { Link, Route, NavLink, Switch, Redirect } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";

export default function RouterApp() {
    return (
        <div>
            <NavLink to="/about">About</NavLink>
            <br />
            <NavLink to="/home">Home</NavLink>
            <Switch>
                <Route path="/about" component={About} />
                <Route path="/home" component={Home} />
                <Redirect to="/about" />
            </Switch>
        </div>
    );
}
