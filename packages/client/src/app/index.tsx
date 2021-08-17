import React from "react";
import styled from "styled-components/macro";
import HomePage from ".//pages/HomePage";

function App() {
  return (
    <Container>
      <HomePage />
    </Container>
  );
}

const Container = styled.div`
  height: 100%;
  width: 100%;
`;

export default App;
