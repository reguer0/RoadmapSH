import type { WeatherCardData } from '../../types/weathertypes';
export function WeatherCard(weatherData: WeatherCardData) {
  return (
    <div>
      <h2>{weatherData?.address}</h2>
      <p>Temperature:{weatherData?.currentConditions?.temp}</p>
      <p>Wind: {weatherData?.currentConditions?.windspeed} km/h</p>
      <p>Rain: {weatherData?.currentConditions?.precip}%</p>
      <p>Condition: {weatherData?.currentConditions?.conditions}</p>
    </div>
  );
}