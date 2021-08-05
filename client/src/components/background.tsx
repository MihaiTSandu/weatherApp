import React, { Component } from "react";
import WeatherInfo from "./weatherInfo";
import SearchBar from "./searchBar";
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";
import CityList from "./cityList";

// Setup apollo client

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
});


class Background extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
      <div id="Background-Image">
        {/* <CityList/> */}
        <SearchBar />
        <WeatherInfo />
      </div>
      </ApolloProvider>
    );
  }
}

export default Background;
