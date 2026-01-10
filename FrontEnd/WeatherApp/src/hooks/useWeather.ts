import {useState, useEffect } from 'react';
import type { WeatherCardData } from '../types/weathertypes';

export const useWeather = (city:string) => {
  const [weatherData, setWeatherData] = useState<WeatherCardData[]>([]);
         const getApiData = async (city: string) => {
        const API_KEY = 'WJCE2UHMWTHJLS9WX4PNSNX9K'
       
          const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=${API_KEY}&contentType=json`);  
          const data = await response.json();
          console.log(data);
            const daysData: WeatherCardData[] = [];
            data.days.forEach((e: any) => {
            daysData.push({
                address: data.address,                  
                    time: e.datetime,
                    temp: e.temp,
                    windspeed: e.windspeed,
                    precip: e.precip,
                    conditions: e.conditions
                    
          }  )
    
});
          setWeatherData(daysData);   
       
      }; 
  useEffect(() => {   
    getApiData(city);
  }, [city]);
  return weatherData;
};