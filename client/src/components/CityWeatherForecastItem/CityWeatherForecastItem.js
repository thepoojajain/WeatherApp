import React, { useEffect, useState } from 'react';
import './CityWeatherForecastItem.css';

export default function CityWeatherForecastItem({
  dt,
  temp_min,
  temp_max,
  weather_icon,
  weather_description,
}) {
  const [dayAndDate, setDayAndDate] = useState({ day: '', date: '' });
  useEffect(() => {
    const [day, month, date] = new Date(dt * 1000).toDateString().split(' ');
    setDayAndDate({
      day,
      date: `${month} ${date}`,
    });
  }, [dt]);
  return (
    <div className="col-sm-6 col-lg-12">
      <div className="card mb-4 px-3 d-flex flex-row align-items-center justify-content-between">
        <div>
          <h6 className="text-uppercase fw-bolder">{dayAndDate.day}</h6>
          <h6 className="fw-light">{dayAndDate.date}</h6>
        </div>
        <div>
          <h5
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            data-bs-title="Maximum temperature"
          >
            {temp_max.toFixed()} <span>&deg;C</span>
          </h5>
          <h5
            data-bs-toggle="tooltip"
            data-bs-placement="bottom"
            data-bs-title="Minimum temperature"
          >
            {temp_min.toFixed()} <span>&deg;C</span>
          </h5>
        </div>
        <img
          data-bs-toggle="tooltip"
          data-bs-placement="left"
          data-bs-title={weather_description}
          src={`https://openweathermap.org/img/wn/${weather_icon}@2x.png`}
          alt={weather_description}
        />
      </div>
    </div>
  );
}
