import { OpenWeatherResponse } from 'utils/open-weather-response';

const OPEN_WEATHER_MAP_URL = 'https://api.openweathermap.org/data/2.5/weather';

const getCityWeather = async (
  latitude?: string,
  longitude?: string,
): Promise<OpenWeatherResponse> => {
  let position: any = {
    coords: {
      latitude,
      longitude,
    },
  };

  if (latitude == null || longitude == null) {
    position = await getCoordinates();
  }

  const params = {
    lat: position?.coords?.latitude,
    lon: position?.coords?.longitude,
    appid: process.env.REACT_APP_OPEN_WEATHER_API_KEY,
    units: 'metric',
  };

  try {
    const data: OpenWeatherResponse = await (
      await fetch(
        `${OPEN_WEATHER_MAP_URL}?${new URLSearchParams(params as any)}`,
      )
    ).json();

    if (data.cod !== 200) {
      throw new Error('Invalid Response');
    }

    return new Promise(resolve => resolve(data));
  } catch {
    return new Promise(resolve => resolve(null));
  }
};

const getCoordinates = async (): Promise<GeolocationPosition> =>
  new Promise(resolve => {
    navigator.geolocation.getCurrentPosition(
      position => resolve(position),
      () => resolve(null),
    );
  });

export default getCityWeather;
