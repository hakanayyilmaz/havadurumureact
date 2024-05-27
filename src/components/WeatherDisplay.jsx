import React from 'react';

function WeatherDisplay({ weather }) {
  return (
    <div>
      <h2>{weather.name} için Hava Durumu</h2>
      <p>Sıcaklık: {weather.main.temp} °C</p>
      <p>Durum: {weather.weather[0].description}</p>
    </div>
  );
}

export default WeatherDisplay;
