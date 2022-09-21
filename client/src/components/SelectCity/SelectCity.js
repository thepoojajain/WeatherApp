import React from 'react';
import './SelectCity.css';

export default function SelectCity({ city, setCity }) {
  const capitalCities = [
    'Sydney',
    'Melbourne',
    'Brisbane',
    'Canbarra',
    'Perth',
    'Adelaide',
    'Hobart',
    'Darwin',
  ];
  return (
    <select
      className="form-select form-select-lg mb-3"
      aria-label=".form-select-lg example"
      value={city}
      onChange={(e) => setCity(e.target.value)}
    >
      {capitalCities.map((city) => (
        <option key={city} value={city}>
          {city}
        </option>
      ))}
    </select>
  );
}
