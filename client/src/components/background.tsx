import React, { Component } from "react";
import WeatherInfo from "./weatherInfo";
import SearchBar from "./searchBar";

class Background extends Component {
  render() {
    return (
      <div id="Background-Image">
        <SearchBar />
        <WeatherInfo />
      </div>
    );
  }
}

export default Background;
