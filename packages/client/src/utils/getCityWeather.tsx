const convertToCelsius = (kelvinTemp: number) =>
  Math.floor(kelvinTemp - 273.15);

const getCityWeatherInfo = (cityName: string) => {
  const locationIndicator = document.getElementById('locationIndicator');
  let openWeatherMap = 'http://api.openweathermap.org/data/2.5/weather';

  openWeatherMap += `?q=${cityName}&APPID=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}`;

  let data: any;

  const callWeatherAPI = async () => {
    const response = await fetch(openWeatherMap);
    data = await response.json();
    console.log(data);
  };

  callWeatherAPI();
};
export default getCityWeatherInfo;
