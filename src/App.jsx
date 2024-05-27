import React, { useState } from 'react';
import WeatherForm from './components/WeatherForm';
import WeatherDisplay from './components/WeatherDisplay';
import './App.css';

function App() {
  const [weather, setWeather] = useState(null);

  const fetchWeather = async (city) => {
    try {
      const apiKey = 'eaa80205644f084c10d48006e15aee1a';
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }
      const data = await response.json();
      setWeather(data);
    } catch (error) {
      console.error('Hava durumu verisi alınırken hata oluştu:', error.message);
      setWeather(null);
    }
  };
  

  return (
    <div className="App">
      <h1>Hava Durumu Uygulaması</h1>
      <WeatherForm fetchWeather={fetchWeather} />
      {weather && <WeatherDisplay weather={weather} />}
    </div>
  );
}

export default App;
