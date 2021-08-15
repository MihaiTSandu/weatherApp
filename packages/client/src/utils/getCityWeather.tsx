let convertToCelsius = (kelvinTemp: number) => {
  return Math.floor(kelvinTemp - 273.15);
};

let getCityWeatherInfo = (cityName: string) => {
  let locationIndicator = document.getElementById("locationIndicator");
  let openWeatherMap = "http://api.openweathermap.org/data/2.5/weather";

  openWeatherMap += `?q=${cityName}&APPID=${process.env.OPEN_WEATHER_API_KEY}`;

  let data: any;

  let callWeatherAPI = async () => {
    let response = await fetch(openWeatherMap);
    data = await response.json();
    console.log(data);
  };

  callWeatherAPI();
};
export default getCityWeatherInfo;
