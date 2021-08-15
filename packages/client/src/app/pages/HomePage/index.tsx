import SearchBar from 'app/components/SearchBar';
import { ICity } from 'app/components/SearchBar/i-city';
import WeatherInfo from 'app/components/WeatherInfo';
import React, { useState } from 'react';

export default function HomePage() {
  const [city, setCity] = useState<ICity>();

  const didSubmit = (value: ICity) => {
    setCity(value);
  };

  return (
    <>
      {/* <CityList /> */}
      <SearchBar onSubmit={didSubmit} />
      <WeatherInfo latitude={city?.lat} longitude={city?.lng} />
    </>
  );
}
