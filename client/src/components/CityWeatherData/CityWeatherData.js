import React, { useEffect, useState } from 'react';
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.min';

import './CityWeatherData.css';
import * as backgroundImages from '../../data/images.data.json';
import CityWeatherAttribute from '../CityWeatherAttribute/CityWeatherAttribute';

export default function CityWeatherData({
  city,
  dt,
  temp,
  feels_like,
  sunrise,
  sunset,
  clouds,
  dew_point,
  wind_speed,
  rain,
  pressure,
  uvi,
  weather_description,
  weather_icon,
}) {
  const weatherAttributes = [
    {
      attribute: 'Wind',
      attributeDescription: 'Wind speed right now',
      attributeValue: wind_speed,
      attributeUnit: 'km/h',
      iconSource: 'https://cdn-icons-png.flaticon.com/512/3026/3026309.png',
    },
    {
      attribute: 'Rain Chance',
      attributeDescription: 'Chances of rain',
      attributeValue: rain,
      attributeUnit: '%',
      iconSource: 'https://cdn-icons-png.flaticon.com/512/4150/4150904.png',
    },
    {
      attribute: 'Pressure',
      attributeDescription: 'Pressure right now',
      attributeValue: pressure,
      attributeUnit: ' hpa',
      iconSource: 'https://cdn-icons-png.flaticon.com/512/4151/4151028.png',
    },
    {
      attribute: 'UV Index',
      attributeDescription: 'Current UV Index',
      attributeValue: uvi,
      attributeUnit: '',
      iconSource: 'https://cdn-icons-png.flaticon.com/512/4006/4006041.png',
    },
  ];

  const [favourite, setFavourite] = useState(false);
  const tooltip = bootstrap.Tooltip.getInstance('#favouriteButton');
  const updateTooltipContent = (newContent) => {
    tooltip.setContent({ '.tooltip-inner': newContent });
  };

  useEffect(() => {
    const favouriteCity = localStorage.getItem('favouriteCity');
    setFavourite(favouriteCity === city);

    // Update tooltip text based on whether the current city is a favourite city or not.
    if (tooltip) {
      updateTooltipContent(
        localStorage.getItem('favouriteCity') === city
          ? 'Unfavourite city'
          : 'Favourite city'
      );
    }
  }, [city]);

  const handleFavouriteClick = () => {
    if (favourite) {
      localStorage.removeItem('favouriteCity');
      updateTooltipContent('Favourite city');
    } else {
      localStorage.setItem('favouriteCity', city);
      updateTooltipContent('Unfavourite city');
    }
    setFavourite(!favourite);
  };

  return (
    <>
      <div className="card mb-3">
        <img src={backgroundImages[city]} className="card-img" alt={city} />
        <div className="card-img-overlay">
          <div className="d-flex flex-column justify-content-between h-100">
            <div className="d-flex align-items-center justify-content-between">
              <h2 className="city-name">
                <i className="bi bi-geo-alt"></i> {city}
              </h2>
              <h5 className="current-time">
                Today{' '}
                {new Date(dt * 1000).toLocaleString('en-US', {
                  hour: 'numeric',
                  minute: 'numeric',
                  hour12: true,
                })}
                <button
                  className="btn mx-2 p-0"
                  type="button"
                  aria-label="favourite"
                  onClick={handleFavouriteClick}
                >
                  <i
                    id="favouriteButton"
                    data-testid="favouriteButton"
                    className={favourite ? 'bi bi-star-fill' : 'bi bi-star'}
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    data-bs-title={
                      favourite ? 'Unfavourite city' : 'Favourite city'
                    }
                  ></i>
                </button>
              </h5>
            </div>
            <div className="d-flex flex-column align-items-center justify-content-center">
              <h1 className="current-temperature">
                <img
                  src={`https://openweathermap.org/img/wn/${weather_icon}@2x.png`}
                  alt={weather_description}
                />
                {temp.toFixed()}
                <span>&deg;C</span>
              </h1>
              <h2 className="weather-description">
                {weather_description} | feels like {feels_like.toFixed()}
                <span>&deg;C</span>
              </h2>
            </div>
            <div className="weather-conditions">
              <h5
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                data-bs-title="Sunrise time"
              >
                <i className="bi bi-sunrise"></i>{' '}
                {new Date(sunrise * 1000).toLocaleString('en-US', {
                  hour: 'numeric',
                  minute: 'numeric',
                  hour12: true,
                })}
              </h5>
              <h5
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                data-bs-title="Sunset time"
              >
                <i className="bi bi-sunset"></i>{' '}
                {new Date(sunset * 1000).toLocaleString('en-US', {
                  hour: 'numeric',
                  minute: 'numeric',
                  hour12: true,
                })}
              </h5>
              <h5
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                data-bs-title="Cloudiness"
              >
                <i className="bi bi-clouds"></i> {clouds}%
              </h5>
              <h5
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                data-bs-title="Dew point"
              >
                <i className="bi bi-droplet"></i> {dew_point}
                <span>&deg;C</span>
              </h5>
            </div>
          </div>
        </div>
      </div>

      <div data-testid="cityWeatherAttributes" className="row">
        {weatherAttributes.map((weatherAttribute) => (
          <CityWeatherAttribute
            key={weatherAttribute.attribute}
            {...weatherAttribute}
          />
        ))}
      </div>
    </>
  );
}
