import React, { Component } from "react";

class SearchBar extends Component {
  render() {
    return (
      <div id="upperDiv">
        <nav id="upperNav"className="navbar navbar-light bg-light">
          <button className="btn btn-info">Locations</button>
          <form className="form-inline mr-auto ml-auto">
            <div className="autocompleteDiv">
              <input
                id="search"
                className="form-control mr-sm-2 controls"
                type="text"
                placeholder="Search"
                aria-label="Search"
              />
            <div id="map"></div>
            </div>
            <button className="btn btn-info my-2 my-sm-0" type="submit">List
              Search
            </button>
          </form>
        </nav>
      </div>
    );
  }
}

export default SearchBar;
