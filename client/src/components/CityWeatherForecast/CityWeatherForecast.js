import React from 'react';
import './CityWeatherForecast.css';
import CityWeatherForecastItem from '../CityWeatherForecastItem/CityWeatherForecastItem';

export default function CityWeatherForecast({ dailyWeatherData }) {
  return (
    <div>
      <h3 className="text-center text-uppercase mt-3 mb-3 heading">
        7 Days Forecast
      </h3>
      <div className="row">
        {dailyWeatherData.map((item) => (
          <CityWeatherForecastItem key={item.dt} {...item} />
        ))}
      </div>
    </div>
  );
}
