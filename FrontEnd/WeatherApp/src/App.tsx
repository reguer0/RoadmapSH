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
    <>
     <h1>Weather App</h1>
      <SearchBar onChange={onChange} />      
     {
      weatherData      
        ? ( <WeatherCard {...weatherData} /> ) 
        : ( <ErrorCard message="No weather data available" />)
    }

    </>
  )
}

export default App
