let apiID = "82e70c9d0331d48505795b7409a04db9";
let openWeatherMap = "http://api.openweathermap.org/data/2.5/weather";

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
    updateComponent(data, locationIndicator);
  };
  
};

  let updateComponent = (data, locationIndicator) => {
    locationIndicator!.innerHTML = data.name;
    document.getElementById("temperatureDisplay")!.innerHTML = `${convertToCelsius(
      data.main.temp
    )}°C`;
    document.getElementById("feelsLike")!.innerHTML = `Feels like ${convertToCelsius(data.main.feels_like)}°C`;
  
  };
let convertToCelsius = (kelvinTemp: number) => {
  return Math.floor(kelvinTemp - 273.15);
};

export default getLocalWeatherInfo;
