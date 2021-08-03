import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import Background from "./components/background";
import getLocalWeatherInfo from "./utils/getLocalWeatherInfo";
import Autocomplete from "./utils/autocomplete";
const mongoose = require("mongoose");

ReactDOM.render(<Background />, document.getElementById("root"));
getLocalWeatherInfo();
Autocomplete();

mongoose.connect(
  "mongodb+srv://Mihai:toor0512@weatherapp.mn4el.mongodb.net/WeatherApp?retryWrites=true&w=majority"
);
mongoose.connection.once("open", () => {
  console.log("connected to the database.");
});
