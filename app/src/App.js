import React, { Component } from "react";
import "./App.css";
import Component1 from "./Component1.js";
import Component2 from "./Component2.js";

import { BrowserRouter, Route, Redirect, Switch, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Basic Routing in React</h1>

        <BrowserRouter>
          <div>

            <ul role="navigation">
              <li><Link to="Component1">Component 1</Link></li>
              <li><Link to="Component2">Component 2</Link></li>
            </ul>

            <Switch>
              <Route path="/Component1" component={Component1} />
              <Route path="/Component2" component={Component2} />
            </Switch>
          </div>
        </BrowserRouter>

      </div>
    );
  }
}

export default App;
