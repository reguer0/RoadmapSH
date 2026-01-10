export interface WeatherCardData {
  address: string; 
    time:string;
    temp: number;
    windspeed: number;
    precip: number;
    conditions: string;  
}

export interface SearchBarProps {
  onChange: (newCity: string) => void;
}