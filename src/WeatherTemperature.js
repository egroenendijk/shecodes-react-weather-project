import React from "react";
import "./Weather.css";

export default function WeatherTemperature(props) {
  return (
    <div className="WeatherTemperature">
      <span id="temperature">{Math.round(props.celsius)}</span>
      <span className="units">°C</span>
    </div>
  );
}
