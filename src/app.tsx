import React from "react";
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import logo from "./logo.svg";
import "./app.css";

import DevelopPage from "./pages/develop";

const App = (): JSX.Element => {
    return (
        <Router>
            <Route path="/nocode-develop" exact component={ReactApp} />
            <Route path="/nocode-develop/develop" exact component={DevelopPage} />
            <Route>
                <Redirect to="/nocode-develop" />
            </Route>
        </Router>
    );
};

const ReactApp = (): JSX.Element => {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <Link to="/nocode-develop/develop" className="App-link">
                    Go to evelopment page
                </Link>
            </header>
        </div>
    );
};

export default App;
