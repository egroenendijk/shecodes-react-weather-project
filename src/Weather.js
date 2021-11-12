import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import FormattedDate from "./FormattedDate";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="weather-app">
          <form>
            <div className="row">
              <div className="col-8">
                <input
                  type="search"
                  id="search-input"
                  placeholder="Enter a city"
                  className="form-control"
                />
              </div>
              <div className="col-2">
                <input
                  type="submit"
                  value="Search"
                  className="search-button"
                ></input>
              </div>
              <div className="col-2">
                <input
                  type="submit"
                  value="Current"
                  className="current-button"
                ></input>
              </div>
            </div>
          </form>
          <br />
          <div className="total-forecast">
            <div className="container day-forecast">
              <div className="row">
                <div className="col-3 city">
                  <h2>
                    <span id="city">{props.defaultCity}</span>
                  </h2>
                  <p>
                    <span className="currentDate">
                      <FormattedDate date={weatherData.date} />
                    </span>
                  </p>
                </div>
                <div className="col-3 rain">
                  <br />
                  <br />
                  <br />
                  <p>
                    Humidity: <span id="humidity">{weatherData.humidity}</span>%
                    <br />
                    Wind: <span id="wind">
                      {Math.round(weatherData.wind)}
                    </span>{" "}
                    km/h
                  </p>
                </div>
                <div className="col-3 weather-icon">
                  <img
                    src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                    id="forecast-icon-0"
                    alt="weather-icon"
                  />
                </div>
                <div className="col-3 current-forecast">
                  <h2>
                    <div id="temperature-description">
                      {weatherData.description}
                    </div>
                  </h2>
                  <h3>
                    <span id="temperature">
                      {Math.round(weatherData.temperature)}
                    </span>
                    <span className="units">
                      <a href="/" id="celsius-link" className="active">
                        °C
                      </a>
                      |
                      <a href="/" id="fahrenheit-link">
                        °F
                      </a>
                    </span>
                  </h3>
                </div>
              </div>
              <br />
              <div className="weather-forecast" id="forecast"></div>
            </div>
          </div>
        </div>
        <p>
          This project was coded by{" "}
          <a
            href="https://www.linkedin.com/in/eva-groenendijk-22144180/"
            target="_blank"
          >
            Eva Groenendijk
          </a>{" "}
          and is
          <a
            href="https://github.com/egroenendijk/shecodes-react-weather-project"
            target="_blank"
          >
            {" "}
            open-sourced on GitHub{" "}
          </a>{" "}
        </p>
      </div>
    );
  } else {
    const apiKey = "ff48e8f1972c30f87339cf84950e7d10";
    let apiURL = `http://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiURL).then(handleResponse);

    return "Loading";
  }
}
