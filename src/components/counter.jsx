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
      <div>
        <h1 id="demo">Please provide access to your location!</h1>
      </div>
    );
  }
}

export default Counter;
