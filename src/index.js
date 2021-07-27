import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import Background from "./components/background";
import getWeatherInfo from "./api/getWeatherInfo";

ReactDOM.render(<Background />, document.getElementById("root"));
getWeatherInfo();
