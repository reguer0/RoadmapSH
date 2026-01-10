import {useState, useEffect } from 'react';
import type { WeatherCardData } from '../types/weathertypes';

export const useWeather = (city:string) => {
  const [weatherData, setWeatherData] = useState<WeatherCardData | null>(null); 
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
  return weatherData;
};