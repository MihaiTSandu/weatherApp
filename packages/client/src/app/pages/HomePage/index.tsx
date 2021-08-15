import CityList from 'app/components/CityList';
import SearchBar from 'app/components/SearchBar';
import WeatherInfo from 'app/components/WeatherInfo';
import React from 'react';

export default function HomePage() {
  return (
    <>
      <CityList />
      <SearchBar />
      <WeatherInfo />
    </>
  );
}
