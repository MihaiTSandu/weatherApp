import React, { useEffect, useState } from 'react';

let openWeatherMap = 'http://api.openweathermap.org/data/2.5/weather';

const convertToCelsius = (kelvinTemp: string) =>
  Math.floor(parseFloat(kelvinTemp) - 273.15);

export default function WeatherInfo() {
  useEffect(() => {
    getLocalWeatherInfo();
  }, []);
  const [temperature, setTemperature] = useState('');
  const [location, setLocation] = useState(
    'Please provide acces to your location!',
  );
  const [feelsLike, setFeelsLike] = useState('');

  let getLocalWeatherInfo = () => {
    function getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
      } else {
        setLocation('Geolocation is not supported by this browser.');
      }
    }

    function showPosition(position: any): void {
      console.log(process.env.REACT_APP_OPEN_WEATHER_API_KEY);
      openWeatherMap += `?lat=${position.coords.latitude}&lon=${position.coords.longitude}&APPID=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}`;
      callWeatherAPI();
    }
    getLocation();

    let data: any;

    let callWeatherAPI = async () => {
      const response = await fetch(openWeatherMap);
      data = await response.json();
      console.log(data);
      setTemperature(`${convertToCelsius(data.main.temp)}°C`);
      setFeelsLike(`${convertToCelsius(data.main.feels_like)}°C`);
      setLocation(data.name);
    };
  };

  const handleSave = (): void => {
    if (
      document.getElementById('locationIndicator')?.innerHTML !==
      'Please provide access to your location!'
    ) {
      const locationElement =
        document.getElementById('locationIndicator')?.innerHTML;
      console.log(locationElement);
    } else {
      console.log(
        'First you need to provide a location, then you can save it.',
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
      <button type="button" onClick={handleSave} className="btn btn-info">
        Save Location
      </button>
    </div>
  );
}
