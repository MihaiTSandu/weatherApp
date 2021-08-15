import React, { useRef } from "react";
import getCityWeatherInfo from "../../../utils/getCityWeather";

function SearchBar() {
  const cityInput = useRef(null);

  const searchLocation = () => {
    // getCityWeatherInfo(
    // `${(document.getElementById("search") as HTMLInputElement).value}`
    // );
    console.log(cityInput.current.value);
    getCityWeatherInfo(cityInput.current.value);
    return false;
  };

  return (
    <div id="upperDiv">
      <nav id="upperNav" className="navbar navbar-light bg-light">
        <button className="btn btn-info">Locations</button>
        <form autoComplete="off" className="form-inline mr-auto ml-auto">
          <div className="autocompleteDiv">
            <input
              id="search"
              className="form-control mr-sm-2 controls"
              type="text"
              ref={cityInput}
              placeholder="Search"
              aria-label="Search"
            />
            <div id="map"></div>
          </div>
          <button
            type="button"
            onClick={searchLocation}
            className="btn btn-info my-2 my-sm-0"
          >
            Search
          </button>
        </form>
      </nav>
    </div>
  );
}

export default SearchBar;
