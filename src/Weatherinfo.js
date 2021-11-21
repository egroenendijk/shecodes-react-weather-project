import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function Weatherinfo(props) {
  return (
    <div className="Weahterinfo">
      <div className="total-forecast">
        <div className="container day-forecast">
          <div className="row">
            <div className="col-3 city">
              <h2>
                <span id="city">{props.data.city}</span>
              </h2>
              <p>
                <span className="currentDate">
                  <FormattedDate date={props.data.date} />
                </span>
              </p>
            </div>
            <div className="col-3 rain">
              <br />
              <br />
              <br />
              <p>
                Humidity: <span id="humidity">{props.data.humidity}</span>%
                <br />
                Wind: <span id="wind">{Math.round(props.data.wind)}</span> km/h
              </p>
            </div>
            <div className="col-3 weather-icon">
              <WeatherIcon code={props.data.icon} size={100} />
            </div>
            <div className="col-3 current-forecast">
              <h2>
                <div id="temperature-description">{props.data.description}</div>
              </h2>
              <h3>
                <WeatherTemperature celsius={props.data.temperature} />
              </h3>
            </div>
          </div>
          <br />
          <div className="weather-forecast" id="forecast"></div>
        </div>
      </div>
    </div>
  );
}
