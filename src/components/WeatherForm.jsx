import React, { useState } from 'react';

function WeatherForm({ fetchWeather }) {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeather(city);
    setCity("")
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Şehir adı"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button type="submit">Gönder</button>
    </form>
  );
}

export default WeatherForm;
