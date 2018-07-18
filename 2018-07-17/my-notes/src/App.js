import React, { Component } from "react";

import "bootstrap/dist/css/bootstrap.css";

import Note from './components/Note'

const evilMode = true;
const margin =  "1rem 15px 0";

class App extends Component {
  render() {
    return (
      <div className="container">
        <div
          style={{
            margin,
            border: "solid #f7f7f9",
          }}
        >
          <div className="row" >
          <Note title="Note1"/>
          <Note title="Note2"/>
          <Note title="Note3"/>
          <Note title="Note4"/>
          </div>
        </div>
        <div>
          <button className={`btn ${evilMode ? "btn-danger" : "btn-success"}`}
            style={{
            margin,
            }}>
            Add
          </button>
        </div>
      </div>
    );
  }
}

export default App;
