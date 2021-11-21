import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import Weatherinfo from "./Weatherinfo";
import WeatherForecast from "./WeatherForecast.js";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search(city);
  }

  function search() {
    const apiKey = "ff48e8f1972c30f87339cf84950e7d10";
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiURL).then(handleResponse);
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="weather-app">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-9">
                <input
                  type="search"
                  id="search-input"
                  placeholder="Enter a city"
                  className="form-control"
                  onChange={handleCityChange}
                />
              </div>
              <div className="col-3">
                <input
                  type="submit"
                  value="Search"
                  className="search-button"
                ></input>
              </div>
            </div>
          </form>
          <br />
          <Weatherinfo data={weatherData} />
          <WeatherForecast coordinates={weatherData.coordinates} />
        </div>
        <p>
          This project was coded by{" "}
          <a href="https://www.linkedin.com/in/eva-groenendijk-22144180/">
            Eva Groenendijk
          </a>{" "}
          and is{" "}
          <a href="https://github.com/egroenendijk/shecodes-react-weather-project">
            open-sourced
          </a>{" "}
          on GitHub
        </p>
      </div>
    );
  } else {
    search();
    return "Loading";
  }
}
