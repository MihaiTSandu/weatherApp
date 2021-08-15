import React, { useEffect, useState } from "react";
import api from "../utils/api.json";

const apiID = api.openWeatherAPIKey;
let openWeatherMap = "http://api.openweathermap.org/data/2.5/weather";

let convertToCelsius = (kelvinTemp: string) => {
  return Math.floor(parseFloat(kelvinTemp) - 273.15);
};

function WeatherInfo() {
  useEffect(() => {
    getLocalWeatherInfo();
  }, []);
  const [temperature, setTemperature] = useState("");
  const [location, setLocation] = useState(
    "Please provide acces to your location!"
  );
  const [feelsLike, setFeelsLike] = useState("");

  let getLocalWeatherInfo = () => {
    let locationIndicator = document.getElementById("locationIndicator");
    function getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
      } else {
        locationIndicator!.innerHTML =
          "Geolocation is not supported by this browser.";
      }
    }

    function showPosition(position: any): void {
      openWeatherMap += `?lat=${position.coords.latitude}&lon=${position.coords.longitude}&APPID=${apiID}`;
      callWeatherAPI();
    }
    getLocation();

    let data: any;

    let callWeatherAPI = async () => {
      let response = await fetch(openWeatherMap);
      data = await response.json();
      console.log(data);
      setTemperature(convertToCelsius(data.main.temp) + "°C");
      setFeelsLike(convertToCelsius(data.main.feels_like) + "°C");
      setLocation(data.name);
    };
  };

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
      <h1 id="locationIndicator">{location}</h1>
      <div id="weatherContainer">
        <h2>
          <b id="temperatureDisplay">{temperature}</b>
        </h2>
        <p id="feelsLike">{feelsLike}</p>
      </div>
      <button onClick={handleSave} className="btn btn-info">
        Save Location
      </button>
    </div>
  );
}

export default WeatherInfo;
