import React, { useState } from "react";
import { Container } from "reactstrap";
import { getApiUrl } from "../config/configUrl";
import CitySelector from "./CitySelector";
import WeatherCard from "./WeatherCard";

const WeatherPanel = () => {
  const [weatherInfo, setWeatherInfo] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  const getWeatherLocation = async (lat, lng) => {
    setLoading(true);
    await fetch(getApiUrl(lat, lng))
      .then((response) => {
        if (!response.ok) throw response;
        return response.json();
      })
      .then((weatherData) => {
        setWeatherInfo(weatherData);
        setLoading(false);
        setShowInfo(true);
      })
      .catch((err) => {
        setLoading(false);
        setShowInfo(false);
        alert(err);
      });
  };

  return (
    <Container>
      <CitySelector getWeatherLocation={getWeatherLocation} />
      <WeatherCard
        loadingData={loading}
        showData={showInfo}
        weatherInfo={weatherInfo}
        getWeatherLocation={getWeatherLocation}
      />
    </Container>
  );
};

export default WeatherPanel;
