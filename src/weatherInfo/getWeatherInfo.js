let apiID = "82e70c9d0331d48505795b7409a04db9";

let getWeatherInfo = () => {
  let openWeatherMap = "http://api.openweathermap.org/data/2.5/weather";
  var locationIndicator = document.getElementById("locationIndicator");
  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      locationIndicator.innerHTML =
        "Geolocation is not supported by this browser.";
    }
  }

  function showPosition(position) {
    locationIndicator.innerHTML =
      "Latitude: " +
      position.coords.latitude +
      "<br>Longitude: " +
      position.coords.longitude;
    openWeatherMap += `?lat=${position.coords.latitude}&lon=${position.coords.longitude}&APPID=${apiID}`;
    callWeatherAPI();
  }
  getLocation();

  let data;

  let callWeatherAPI = async () => {
    let response = await fetch(openWeatherMap);
    data = await response.json();
    console.log(data);
    updateComponent();
  };

  let updateComponent = () => {
    locationIndicator.innerHTML = data.name;
    let weatherContainer = document.createElement("div");
    document.getElementById("main").appendChild(weatherContainer);
    let temperatureDisplay = document.createElement("h2");
    temperatureDisplay.innerHTML = `${convertToCelsius(
      data.main.temp
    )}°C <br> <p>Feels like ${convertToCelsius(data.main.feels_like)}°C</p>`;
    weatherContainer.appendChild(temperatureDisplay);
    let weatherGeekInfoTemp = document.createElement("h3");
    weatherGeekInfoTemp.innerHTML = `Maximal Temperature: ${convertToCelsius(
      data.main.temp_max
    )}°C Minimal Temperature: ${convertToCelsius(data.main.temp_min)}`;
    weatherContainer.appendChild(weatherGeekInfoTemp);
    let weatherGeekInfoOther = document.createElement("h4");
    weatherGeekInfoOther.innerHTML = `Humidity: ${data.main.humidity}% Pressure: ${data.main.pressure}mb`;
    weatherContainer.appendChild(weatherGeekInfoOther);
  };

  let convertToCelsius = (kelvinTemp) => {
    return Math.floor(kelvinTemp - 273.15);
  };
};

export default getWeatherInfo;
