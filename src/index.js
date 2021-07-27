import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import Background from "./components/background";
import getWeatherInfo from "./api/getWeatherInfo";
import readJSON from "./api/jsonFile";

ReactDOM.render(<Background />, document.getElementById("root"));
getWeatherInfo();
readJSON();
