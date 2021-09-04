import SearchBar from 'app/components/SearchBar';
import { ICity } from 'app/components/SearchBar/i-city';
import WeatherInfo from 'app/components/WeatherInfo';
import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { media } from 'styles/media';

export default function HomePage() {
  const [city, setCity] = useState<ICity>();

  const didSubmit = (value: ICity) => {
    setCity(value);
  };
  return (
    <HomePageContainer>
      <SearchContainer>
        <Header>Weather App</Header>
        <SearchBar onSubmit={didSubmit} />
      </SearchContainer>
      {/* <CityList /> */}
      <ResultContainer>
        <WeatherInfo latitude={city?.lat} longitude={city?.lng} />
      </ResultContainer>
    </HomePageContainer>
  );
}

const ResultContainer = styled.div`
  align-content: center;
  align-items: center;
  display: flex;
  flex: 1;
  flex-direction: column;
  height: inherit;
  justify-content: center;
`;

const SearchContainer = styled(ResultContainer)`
  background-color: #007c91;
  border-radius: 0.1875rem;
  height: calc(100vh - 2.5rem);
  margin: 1.25rem;
`;

const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;

  ${media.medium`
    flex-direction: row;
  `}
`;

const Header = styled.div`
  color: #fff;
  font-family: 'Raleway', sans-serif;
  font-size: 4rem;
  font-weight: 500;
  margin: 0 2.5rem 8rem;
  text-align: center;
`;
