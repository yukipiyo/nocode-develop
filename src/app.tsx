import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from "./logo.svg";
import "./app.css";

import DevelopPage from "./pages/develop";

const App = (): JSX.Element => {
    return (
        <Router>
            <Route path="/" exact component={ReactApp} />
            <Route path="/develop" exact component={DevelopPage} />
        </Router>
    );
};

const ReactApp = (): JSX.Element => {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <Link to="./develop" className="App-link">
                    Go to evelopment page
                </Link>
            </header>
        </div>
    );
};

export default App;
