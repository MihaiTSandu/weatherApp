let apiID = "82e70c9d0331d48505795b7409a04db9";

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


let getCityWeatherInfo = (cityName) => {
  let locationIndicator = document.getElementById("locationIndicator");
  let openWeatherMap = "http://api.openweathermap.org/data/2.5/weather";

  openWeatherMap += `?q=${cityName}&APPID=${apiID}`;

  let data: any;

  let callWeatherAPI = async () => {
    let response = await fetch(openWeatherMap);
    data = await response.json();
    console.log(data);
    updateComponent(data, locationIndicator);
  };

  callWeatherAPI();
}
export default getCityWeatherInfo;