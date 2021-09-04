import SearchBar from 'app/components/SearchBar';
import { ICity } from 'app/components/SearchBar/i-city';
import WeatherInfo from 'app/components/WeatherInfo';
import React, { useState } from 'react';
import styled from 'styled-components/macro';

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
  background-color: #00acc1;
`;

const HomePageContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
`;
const Header = styled.div`
  color: #fff;
  font-family: 'Raleway', 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
    'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  font-size: 4rem;
  font-weight: 500;
  margin-bottom: 8rem;
`;
