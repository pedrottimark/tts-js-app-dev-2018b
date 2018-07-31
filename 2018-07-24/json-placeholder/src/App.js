import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import SearchInput from "./SearchInput";
import Posts from "./Posts";

class App extends Component {
  state = {
    idToDisplay: 3,
  };

  onSearch = id => {
    this.setState({ idToDisplay: id });
  };

  render() {
    const {idToDisplay} = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {/* Uncontrolled */}
        <SearchInput
          onSearch={this.onSearch}
          placeholder="myPlaceholder"
          defaultValue={idToDisplay}
        />
        {!!idToDisplay && <Posts id={idToDisplay} />}
      </div>
    );
  }
}

export default App;
