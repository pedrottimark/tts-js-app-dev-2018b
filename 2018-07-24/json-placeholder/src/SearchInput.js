import React, { Component } from "react";

class SearchInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: props.defaultValue || "",
    };
    this.onSearchInput = this.onSearchInput.bind(this);
  }

  onSearchInput(event) {
    this.setState({
      searchText: event.target.value,
    });
  }

  onButtonClick = () => {
    this.props.onSearch(this.state.searchText);
  };

  render() {
    return (
      <div>
          {/* Controlled */}
        <input
          type="text"
          name=""
          id=""
          value={this.state.searchText}
          onChange={this.onSearchInput}
          placeholder={this.props.placeholder}
        />
        <button onClick={this.onButtonClick}>Search</button>
      </div>
    );
  }
}

export default SearchInput;
