import CityList from 'app/components/CityList';
import SearchBar from 'app/components/SearchBar';
import WeatherInfo from 'app/components/WeatherInfo';

export default function HomePage() {
  return (
    <>
      <CityList />
      <SearchBar />
      <WeatherInfo />
    </>
  );
}
