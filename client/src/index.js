import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import ReactDOM from "react-dom";
import Background from "./components/background";
import Autocomplete from "./utils/autocomplete";
import getLocalWeatherInfo from "./utils/getLocalWeatherInfo";

const client = new ApolloClient({
  // TODO: change the following to your apollo client host
  uri: "https://48p1r2roz4.sse.codesandbox.io",
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Background />
  </ApolloProvider>,
  document.getElementById("root")
);
getLocalWeatherInfo();
Autocomplete();
