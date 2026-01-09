export interface WeatherCardData {
  address: string;
  currentConditions: {
    temp: number;
    windspeed: number;
    precip: number;
    conditions: string;
  };
}