import type { WeatherCardData } from '../../types/weathertypes';
import './WeatherCard.css';

export function WeatherCard(weatherData: WeatherCardData) {
  return (
    <div className="weather-card">
      <h2>{weatherData?.address}</h2>
      <p>Time: <span className="value">{weatherData?.datetime}</span></p>
      <div className="temperature">{weatherData?.temp}°C</div>
      <p>Wind: <span className="value">{weatherData?.windspeed} km/h</span></p>
      <p>Rain: <span className="value">{weatherData?.precip}%</span></p>
      <div className="condition">{weatherData?.conditions}</div>
    </div>
  );
}