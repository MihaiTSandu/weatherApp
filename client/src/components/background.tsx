import React from "react";
import CityList from "./cityList";
import SearchBar from "./searchBar";
import WeatherInfo from "./weatherInfo";

// Setup apollo client

// const client = new ApolloClient({
//   uri: "http://localhost:4000/graphql",
// });

function Background() {
  return (
    // <ApolloProvider client={}>
    <div id="Background-Image">
      <CityList />
      <SearchBar />
      <WeatherInfo />
    </div>
    // </ApolloProvider>
  );
}

export default Background;
