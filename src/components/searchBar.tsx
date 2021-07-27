import React, { Component } from "react";

class SearchBar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-light">
          <form className="form-inline mr-auto ml-auto">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-info my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
        </nav>
      </div>
    );
  }
}

export default SearchBar;
