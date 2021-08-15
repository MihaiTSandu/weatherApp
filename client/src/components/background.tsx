import React from "react";
import CityList from "./cityList";
import SearchBar from "./searchBar";
import WeatherInfo from "./weatherInfo";

function Background() {
  return (
    <div id="Background-Image">
      <CityList />
      <SearchBar />
      <WeatherInfo />
    </div>
  );
}

export default Background;
