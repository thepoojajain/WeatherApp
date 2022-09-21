const https = require("https");
require("dotenv").config();

const urlQueryParams = {
  Sydney: "lat=-33.8698439&lon=151.2082848",
  Melbourne: "lat=-37.8142176&lon=144.9631608",
  Brisbane: "lat=-27.4689682&lon=153.0234991",
  Canbarra: "lat=-35.2975906&lon=149.1012676",
  Perth: "lat=-31.9558964&lon=115.8605801",
  Adelaide: "lat=-34.9281805&lon=138.5999312",
  Hobart: "lat=-42.8825088&lon=147.3281233",
  Darwin: "lat=-12.46044&lon=130.8410469",
};

function transformDayWeatherRespones(dayWeatherData, city) {
  const weather_description = dayWeatherData.weather[0].description;
  const weather_icon = dayWeatherData.weather[0].icon;

  const dataToReturn = {
    dt: dayWeatherData.dt,
    sunrise: dayWeatherData.sunrise,
    sunset: dayWeatherData.sunset,
    pressure: dayWeatherData.pressure,
    humidity: dayWeatherData.humidity,
    wind_speed: dayWeatherData.wind_speed,
    uvi: dayWeatherData.uvi,
    clouds: dayWeatherData.clouds,
    dew_point: dayWeatherData.dew_point,
    city: city,
    weather_description: weather_description,
    weather_icon: weather_icon,
  };

  if (dayWeatherData.temp.min) {
    dataToReturn.temp_max = dayWeatherData.temp.max;
    dataToReturn.temp_min = dayWeatherData.temp.min;
  } else {
    dataToReturn.temp = dayWeatherData.temp;
  }

  if (dayWeatherData.feels_like.day) {
    dataToReturn.feels_like = dayWeatherData.feels_like.day;
  } else {
    dataToReturn.feels_like = dayWeatherData.feels_like;
  }

  if (dayWeatherData.rain && dayWeatherData.rain["1h"]) {
    dataToReturn.rain = dayWeatherData.rain["1h"];
  } else {
    dataToReturn.rain = dayWeatherData.rain;
  }
  return dataToReturn;
}

function transformAPIResponse(weatherData, city) {
  const weatherRecordsForCity = [
    transformDayWeatherRespones(weatherData.current, city),
  ].concat(
    weatherData.daily
      .filter((el, index) => index)
      .map((weatherItem) => transformDayWeatherRespones(weatherItem, city))
  );
  //   console.log("**** weatherRecordsForCity: ", weatherRecordsForCity);
  return weatherRecordsForCity;
}

function getData(city) {
  const url = `${process.env.OWM_API_BASE_URL}${process.env.OWM_API_KEY}&${urlQueryParams[city]}`;
  return new Promise((resolve, reject) => {
    https
      .get(url, (res) => {
        // console.log(`Got response for ${city}. Status Code: ${res.statusCode}`);
        if (res.statusCode === 200) {
          let data = "";
          res.on("data", (datum) => {
            data += datum;
          });
          res.on("end", () => {
            // console.log(`Transforming response for ${city}.`);
            const weatherRecordsForCity = transformAPIResponse(
              JSON.parse(data),
              city
            );
            resolve(weatherRecordsForCity);
          });
        } else {
          reject("Something went wrong!");
        }
      })
      .on("error", (error) => {
        // console.error("Got an Error fetching data with URL: ", url);
        reject(error.message);
      });
  });
}

exports.seedData = async () => {
  const citiesWeatherData = await Promise.all(
    Object.keys(urlQueryParams).map((city) => getData(city))
  );
  return citiesWeatherData.flat();
};
