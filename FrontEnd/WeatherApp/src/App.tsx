import {useState } from 'react';
import './App.css'
import { SearchBar } from './components/SearchBar/SearchBar';
import{WeatherCard} from './components/WeatherCard/WeatherCard';
import { ErrorCard } from './components/ErrorCard/ErrorCard';
import { useWeather } from './hooks/useWeather';

function App() {  
  const [city, setCity] = useState<string>('Getxo');
  const weatherData = useWeather(city);
  const onChange = (newCity: string) => {
    setCity(newCity);
   };


return (
    <div className="app">
      <header className="app-header">
        <h1>Weather App</h1>
        <div className="search-container">
          <SearchBar onChange={onChange} />
        </div>
      </header>
      
      <main>
        <div className="weather-container">
          {weatherData.length > 0 
            ? ( weatherData.map((day, index) => (
                <WeatherCard key={index} {...day} />
              ))
              ) 
            : (  <ErrorCard message="No weather data available" /> )}
        </div>
      </main>
    </div>
  )
}

export default App
