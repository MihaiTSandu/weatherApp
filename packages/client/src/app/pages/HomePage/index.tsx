import React, { useState } from "react";
import SearchBar from "../../components/SearchBar";
import { ICity } from "../../components/SearchBar/i-city";
import WeatherInfo from "../../components/WeatherInfo";

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
