const mongoose = require("mongoose");

const weatherSchema = new mongoose.Schema({
  dt: {
    required: true,
    type: Number,
  },
  sunrise: {
    required: true,
    type: Number,
  },
  sunset: {
    required: true,
    type: Number,
  },
  pressure: {
    required: true,
    type: Number,
  },
  humidity: {
    required: true,
    type: Number,
  },
  wind_speed: {
    required: true,
    type: Number,
  },
  rain: {
    type: Number,
  },
  uvi: {
    required: true,
    type: Number,
  },
  clouds: {
    required: true,
    type: Number,
  },
  dew_point: {
    required: true,
    type: Number,
  },
  temp_max: {
    type: Number,
    required: function () {
      return !this.temp;
    },
  },
  temp_min: {
    type: Number,
    required: function () {
      return !this.temp;
    },
  },
  temp: {
    type: Number,
    required: function () {
      return !this.temp_min && !this.temp_max;
    },
  },
  feels_like: {
    type: Number,
    required: true,
  },
  weather_description: {
    required: true,
    type: String,
  },
  weather_icon: {
    required: true,
    type: String,
  },
  city: {
    required: true,
    type: String,
  },
});

module.exports = mongoose.model("Weather", weatherSchema);
