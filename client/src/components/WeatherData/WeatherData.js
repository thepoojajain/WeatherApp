import React, { useEffect, useState } from 'react';
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.min';

import './WeatherData.css';
import CityWeatherData from '../CityWeatherData/CityWeatherData';
import CityWeatherForecast from '../CityWeatherForecast/CityWeatherForecast';
import SelectCity from '../SelectCity/SelectCity';

export default function WeatherData() {
  const [city, setCity] = useState(
    localStorage.getItem('favouriteCity') || 'Sydney'
  );
  const [weatherData, setWeatherData] = useState();
  const [tooltipsInitialized, setTooltipsInitialized] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const url = `${process.env.REACT_APP_API_URL}?city=${city}`;
      const response = await fetch(url);
      const apiResponse = await response.json();
      console.log(apiResponse);
      const [weatherToday, ...weatherNextSevenDays] = apiResponse;
      setWeatherData({
        weatherToday,
        weatherNextSevenDays,
      });

      if (!tooltipsInitialized) {
        setTooltipsInitialized(true);
        const tooltipTriggerList = document.querySelectorAll(
          '[data-bs-toggle="tooltip"]'
        );
        [...tooltipTriggerList].map(
          (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
        );
      }
    };

    fetchData();

    /* eslint-disable react-hooks/exhaustive-deps */
  }, [city]);

  return (
    <div className="container-fluid">
      {weatherData && (
        <div className="row">
          <div className="col-lg-8">
            <SelectCity city={city} setCity={setCity} />
            <CityWeatherData city={city} {...weatherData.weatherToday} />
          </div>
          <div className="col-lg-4">
            <CityWeatherForecast
              dailyWeatherData={weatherData.weatherNextSevenDays}
            />
          </div>
        </div>
      )}
    </div>
  );
}
