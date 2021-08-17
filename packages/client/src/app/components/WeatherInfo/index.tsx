import React, { useCallback, useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import styled from 'styled-components/macro';
import getCityWeather from 'utils/get-city-weather';

export interface IWeatherInfoProps {
  latitude?: string;
  longitude?: string;
}

export default function WeatherInfo({
  latitude,
  longitude,
}: IWeatherInfoProps) {
  const [temperature, setTemperature] = useState<number>();
  const [feelsLike, setFeelsLike] = useState<number>();
  const [location, setLocation] = useState<string>();

  const getLocalWeatherInfo = useCallback(async () => {
    const data = await getCityWeather(latitude, longitude);

    setTemperature(data.main.temp);
    setFeelsLike(data.main.feels_like);
    setLocation(data.name);
  }, [latitude, longitude]);

  useEffect(() => {
    getLocalWeatherInfo();
  }, [getLocalWeatherInfo]);

  const handleSave = (): void => {
    // TODO: implement
  };

  return (
    <WeatherInfoContainer>
      <h1>{location || <Skeleton width={300} />}</h1>
      <div>
        <h2>
          <b>
            {temperature ? (
              `${temperature.toFixed()}°C`
            ) : (
              <Skeleton width={50} />
            )}
          </b>
        </h2>
        <p>
          Feels like{' '}
          {feelsLike ? `${feelsLike.toFixed()}°C` : <Skeleton width={30} />}
        </p>
      </div>
      <button type="button" onClick={handleSave}>
        Save Location
      </button>
    </WeatherInfoContainer>
  );
}

const WeatherInfoContainer = styled.div`
  margin: 1.25rem;
  text-align: center;
`;
