import React from "react";

function WeatherInfo() {
  const handleSave = (): void => {
    if (
      document.getElementById("locationIndicator")?.innerHTML !==
      "Please provide access to your location!"
    ) {
      let location = document.getElementById("locationIndicator")?.innerHTML;
      console.log(location);
    } else {
      console.log(
        "First you need to provide a location, then you can save it."
      );
    }
  };
  return (
    <div id="main" className="col-xs-1 text-center">
      <h1 id="locationIndicator">Please provide access to your location!</h1>
      <div id="weatherContainer">
        <h2>
          <b id="temperatureDisplay"></b>
        </h2>
        <p id="feelsLike"></p>
      </div>
      <button onClick={handleSave} className="btn btn-info">
        Save Location
      </button>
    </div>
  );
}

export default WeatherInfo;
