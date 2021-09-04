import React, { useCallback, useEffect, useState } from 'react';
import ReactAnimatedWeather from 'react-animated-weather';
import Skeleton from 'react-loading-skeleton';
import styled from 'styled-components/macro';
import getCityWeather from 'utils/get-city-weather';

export interface IWeatherInfoProps {
  latitude?: string;
  longitude?: string;
}

const weatherIconDesign = {
  icon: 'PARTLY_CLOUDY_DAY',
  color: '#007c91',
  size: 192,
  animate: true,
};

export default function WeatherInfo({
  latitude,
  longitude,
}: IWeatherInfoProps) {
  const [temperature, setTemperature] = useState<number>();
  // const [feelsLike, setFeelsLike] = useState<number>();
  const [location, setLocation] = useState<string>();

  const getLocalWeatherInfo = useCallback(async () => {
    const data = await getCityWeather(latitude, longitude);
    if (!data) {
      // TODO: implement
    } else {
      console.log(data);

      switch (data.weather[0].icon) {
        case '01d':
          weatherIconDesign.icon = 'CLEAR_DAY';
          break;
        case '01n':
          weatherIconDesign.icon = 'CLEAR_NIGHT';
          break;
        case '02d':
          weatherIconDesign.icon = 'PARTLY_CLOUDY_DAY';
          break;
        case '02n':
          weatherIconDesign.icon = 'PARTLY_CLOUDY_NIGHT';
          break;
        case '03d':
          weatherIconDesign.icon = 'CLOUDY';
          break;
        case '03n':
          weatherIconDesign.icon = 'CLOUDY';
          break;
        case '04d':
          weatherIconDesign.icon = 'CLOUDY';
          break;
        case '04n':
          weatherIconDesign.icon = 'CLOUDY';
          break;
        case '09d':
          weatherIconDesign.icon = 'RAIN';
          break;
        case '09n':
          weatherIconDesign.icon = 'RAIN';
          break;
        case '10d':
          weatherIconDesign.icon = 'RAIN';
          break;
        case '10n':
          weatherIconDesign.icon = 'RAIN';
          break;
        case '13d':
          weatherIconDesign.icon = 'SNOW';
          break;
        case '13n':
          weatherIconDesign.icon = 'SNOW';
          break;
        case '50d':
          weatherIconDesign.icon = 'FOG';
          break;
        case '50n':
          weatherIconDesign.icon = 'FOG';
          break;
        default:
          weatherIconDesign.icon = 'WIND';
          break;
      }
      setTemperature(data.main.temp);
      // setFeelsLike(data.main.feels_like);
      setLocation(data.name);
    }
  }, [latitude, longitude]);

  useEffect(() => {
    getLocalWeatherInfo();
  }, [getLocalWeatherInfo]);

  const handleSave = (): void => {
    // TODO: implement
  };

  return (
    <WeatherInfoContainer>
      <LocationHeader>{location || <Skeleton width={300} />}</LocationHeader>
      <ReactAnimatedWeather
        icon={weatherIconDesign.icon}
        color={weatherIconDesign.color}
        size={weatherIconDesign.size}
        animate={weatherIconDesign.animate}
      />
      <div>
        <TemperatureHeader>
          {temperature ? `${temperature.toFixed()}°C` : <Skeleton width={50} />}
        </TemperatureHeader>
        {/* <p>
          Feels like{' '}
          {feelsLike ? `${feelsLike.toFixed()}°C` : <Skeleton width={30} />}
        </p> */}
      </div>
      {/* <button type="button" onClick={handleSave}>
        Save Location
      </button> */}
    </WeatherInfoContainer>
  );
}

const WeatherInfoContainer = styled.div`
  margin: 1.25rem;
  text-align: center;
`;

const LocationHeader = styled.h1`
  color: #007c91;
  font-family: 'Raleway', sans-serif;
  font-size: 4rem;
  font-weight: 500;
`;

const TemperatureHeader = styled.h1`
  color: #007c91;
  font-family: 'Raleway', sans-serif;
  font-size: 4rem;
  font-weight: 500;
`;
