import {useState, useEffect } from 'react';
import './App.css'
import { SearchBar } from './components/SearchBar/SearchBar';
import{WeatherCard} from './components/WeatherCard/WeatherCard';
import type { WeatherCardData } from './types/weathertypes';
import { ErrorCard } from './components/ErrorCard/ErrorCard';

function App() { 
  const [weatherData, setWeatherData] = useState<WeatherCardData | null>(null); 
  const [city, setCity] = useState<string>('Getxo');
  const onChange = (newCity: string) => {
    setCity(newCity);
   };
     const getApiData = async (city: string) => {
        const API_KEY = 'WJCE2UHMWTHJLS9WX4PNSNX9K'
       
          const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=${API_KEY}&contentType=json`);  
          const data = await response.json();
          console.log(data);

          const weatherCardData: WeatherCardData = {
            address: data.address,
            currentConditions: {
              temp: data.currentConditions.temp,
              windspeed: data.currentConditions.windspeed,
              precip: data.currentConditions.precip,
              conditions: data.currentConditions.conditions
            }
          };    
          setWeatherData(weatherCardData);   
       
      }; 
  useEffect(() => {   
    getApiData(city);
  }, [city]);

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
