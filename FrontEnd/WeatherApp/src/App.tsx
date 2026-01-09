import './App.css'
import { SearchBar } from './components/SearchBar/SearchBar';
import{WeatherCard} from './components/WeatherCard/WeatherCard';

function App() { 

  return (
    <>
     <h1>Weather App</h1>
      <SearchBar />
      <WeatherCard />
    </>
  )
}

export default App
