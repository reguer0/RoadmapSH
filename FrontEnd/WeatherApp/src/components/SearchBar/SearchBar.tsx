import { useState } from 'react';
import type { SearchBarProps } from '../../types/weathertypes';
import './SearchBar.css';

export function SearchBar({ onChange }: SearchBarProps) {
  const [inputValue, setInputValue] = useState<string>('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSearch = () => {
    if (inputValue.trim()) {
      onChange(inputValue);
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };
  
  return (
    <div className="search-bar">
      <input 
        type="text" 
        placeholder="Search for a city..."        
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  ); 
}