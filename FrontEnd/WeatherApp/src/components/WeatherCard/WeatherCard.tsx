import type { WeatherCardData } from '../../types/weathertypes';
export function WeatherCard(weatherData: WeatherCardData) {
  return (
    <div>
      <h2>{weatherData?.address}</h2>
      <p>Time: {weatherData?.time}</p>
      <p>Temperature: {weatherData?.temp}</p>
      <p>Wind: {weatherData?.windspeed} km/h</p>
      <p>Rain: {weatherData?.precip}%</p>
      <p>Condition: {weatherData?.conditions}</p>
    </div>
  );
}