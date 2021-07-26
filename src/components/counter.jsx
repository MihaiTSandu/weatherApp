import React, { Component } from "react";

// fetch("https://api.ipgeolocation.io/getip")
//   .then((response) => response.json())
//   .then((data) => console.log(data));

class Counter extends Component {
  state = {
    count: 0,
  };

  render() {
    return (
      <div id="main" className="col-xs-1" align="center">
        <h1 id="locationIndicator">Please provide access to your location!</h1>
      </div>
    );
  }
}

export default Counter;
