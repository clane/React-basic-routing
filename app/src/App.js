import React, { Component } from "react";
import "./App.css";
import Component1 from "./Component1.js";
import Component2 from "./Component2.js";
import Component3 from "./Component3.js";
import Component4 from "./Component4.js";

import { BrowserRouter, Route, Switch, Link, Redirect } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">

        <div role="banner" aria-label="routing time">
          <h1>Basic Routing in React</h1>
          <div>
            <a href="https://github.com/clane/React-basic-routing">
              https://github.com/clane/React-basic-routing
            </a>
          </div>
        </div>

        <BrowserRouter>
          <div>

            <ul role="navigation" aria-label="primary navigation">
              <li><Link to="Component1">Component 1</Link></li>
              <li><Link to="Component2">Component 2</Link></li>
              <li><Link to="Component3">Component 3</Link></li>
              <li><Link to="Component4">Component 4</Link></li>
            </ul>
            <div role="main" aria-label="components go here">
              <Switch>
                <Route path="/Component1" component={Component1} />
                <Route path="/Component2" component={Component2} />
                <Route path="/Component3" component={Component3} />
                <Route path="/Component4" component={Component4} />
                <Redirect from="/" to="/Component1" />
              </Switch>
            </div>

          </div>
        </BrowserRouter>

      </div>
    );
  }
}

export default App;
