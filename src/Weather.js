import React from "react";
import "./Weather.css";

export default function Weather() {
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
                  <span id="city">Utrecht</span>
                </h2>
                <p>
                  <span className="currentDate">13 November</span>
                  <br />
                  <span className="currentTime">17:00</span>
                </p>
              </div>
              <div className="col-3 rain">
                <br />
                <br />
                <br />
                <p>
                  Precipitation: <span id="percipitation">11</span>%
                  <br />
                  Wind: <span id="wind">18</span> km/h
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
                  <div id="temperature-description">Cloudy</div>
                </h2>
                <h3>
                  <span id="temperature">13</span>
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
    </div>
  );
}
