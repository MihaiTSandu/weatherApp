import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import Background from "./components/background";
import getLocalWeatherInfo from "./utils/getLocalWeatherInfo";
import Autocomplete from "./utils/autocomplete";

ReactDOM.render(<Background />, document.getElementById("root"));
getLocalWeatherInfo();
Autocomplete();
