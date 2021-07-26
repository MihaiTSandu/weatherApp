let apiID = "82e70c9d0331d48505795b7409a04db9";

let getWeatherInfo = () => {
  let openWeatherMap = "http://api.openweathermap.org/data/2.5/weather";
  var x = document.getElementById("demo");
  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      x.innerHTML = "Geolocation is not supported by this browser.";
    }
  }

  function showPosition(position) {
    x.innerHTML =
      "Latitude: " +
      position.coords.latitude +
      "<br>Longitude: " +
      position.coords.longitude;
    openWeatherMap += `?lat=${position.coords.latitude}&lon=${position.coords.longitude}&APPID=${apiID}`;
    console.log(openWeatherMap);
  }

  console.log(openWeatherMap);
  getLocation();
};

export default getWeatherInfo;
