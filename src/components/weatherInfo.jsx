import React, { Component } from "react";

class WeatherInfo extends Component {
  render() {
    return (
      <div id="main" className="col-xs-1" align="center">
        <h1 id="locationIndicator">Please provide access to your location!</h1>
      </div>
    );
  }
}

export default WeatherInfo;
