import React, { Component, Fragment } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Fragment>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
        <div id="box1">Box 1</div>
        <div id="box2">Box 2</div>
      </Fragment>
    );
  }
}

export default App;
