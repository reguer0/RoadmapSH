export interface WeatherCardData {
  address: string; 
    datetime:string;
    temp: number;
    windspeed: number;
    precip: number;
    conditions: string;  
}

export interface SearchBarProps {
  onChange: (newCity: string) => void;
}