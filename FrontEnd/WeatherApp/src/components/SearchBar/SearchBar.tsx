import {useState } from 'react';
import type { SearchBarProps } from '../../types/weathertypes';

export function SearchBar({ onChange }: SearchBarProps) {
  const [inputValue, setInputValue] = useState<string>('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSearch = () => {
    onChange(inputValue);
  };
  
  return (
    <div>
      <input type="text"  placeholder="Search for a city..." onChange={handleInputChange} />
      <button type='submit' onClick={handleSearch}>Search</button>
    </div>
  ); 
}