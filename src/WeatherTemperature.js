import React, { useState } from "react";
import "./Weather.css";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <span id="temperature">{Math.round(props.celsius)}</span>
        <span className="units">
          <a href="/" id="celsius-link" className="active">
            °C
          </a>
          |
          <a href="/" onClick={convertToFahrenheit} id="fahrenheit-link">
            °F
          </a>
        </span>
      </div>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <div className="WeatherTemperature">
        <span id="temperature">{Math.round(fahrenheit)}</span>
        <span className="units">
          <a
            href="/"
            onClick={convertToCelsius}
            id="celsius-link"
            className="active"
          >
            °C
          </a>
          |
          <a href="/" id="fahrenheit-link">
            °F
          </a>
        </span>
      </div>
    );
  }
}
