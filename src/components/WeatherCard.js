import React from "react";
import { Col, Container, Row } from "reactstrap";

import {
  converDate,
  getCurrentlyDate,
  getDayName,
  getHour,
  getHourAndMinutes,
  getKm,
  getTemp,
  reformTitle,
} from "../helpers/helpers";
import Loader from "./Loader";

const WeatherCard = ({ showData, loadingData, weatherInfo }) => {
  if (loadingData) {
      
    return <Loader />;
  }
  return (
    <Container>
      {showData ? (
        <>
          {" "}
          <Row className="mt-5">
            <Col>
              <div className="d-flex flex-column">
                <h1>{reformTitle(weatherInfo?.timezone)} </h1>
                <h2>{getCurrentlyDate(weatherInfo?.current?.dt)}</h2>
                <div className="d-flex align-items-center justify-content-center">
                  <img
                    src={`https://openweathermap.org/img/wn/${weatherInfo?.current?.weather[0]?.icon}@2x.png`}
                    alt="icon-weather"
                  />
                  <h2>{getTemp(weatherInfo?.current?.temp).toFixed(0)}°C</h2>
                </div>
              </div>
            </Col>
            <Col>
              <Row>
                <Col>
                  <div className="d-flex justify-content-between">
                    <div className="d-flex flex-column align-items-center">
                      <label>
                        {getTemp(weatherInfo?.daily[0]?.temp?.max).toFixed(0)}°C
                      </label>
                      <label>Max</label>
                    </div>
                    <div className="d-flex flex-column align-items-center">
                      <label>
                        {getKm(weatherInfo?.current?.wind_speed)?.toFixed(0)}
                        km/h
                      </label>
                      <label>Viento</label>
                    </div>
                    <div className="d-flex flex-column align-items-center">
                      <label>
                        {getHourAndMinutes(weatherInfo?.current?.sunrise)}
                      </label>
                      <label>Amanecer</label>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row className="mt-4">
                <Col>
                  <div className="d-flex justify-content-between">
                    <div className="d-flex flex-column align-items-center">
                      <label>
                        {getTemp(weatherInfo?.daily[0]?.temp?.min).toFixed(0)}°C
                      </label>
                      <label>Min</label>
                    </div>
                    <div className="d-flex flex-column align-items-center">
                      <label>{weatherInfo.current?.humidity}%</label>
                      <label>Humedad</label>
                    </div>
                    <div className="d-flex flex-column align-items-center">
                      <label>
                        {getHourAndMinutes(weatherInfo?.current?.sunset)}
                      </label>
                      <label>Atardecer</label>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col>
              <div className="d-flex pb-4 container-weather-hours">
                {weatherInfo?.hourly
                  ?.filter(
                    (item) =>
                      converDate(item.dt).getDate() === new Date().getDate()
                  )
                  ?.map((item, i) => (
                    <div className="d-flex" key={i}>
                      <div className="d-flex flex-column align-items-center">
                        <label mb="0.5em">{getHour(item?.dt)}</label>
                        <img
                          src={`https://openweathermap.org/img/wn/${item?.weather[0]?.icon}@2x.png`}
                          alt="icono clima"
                        />

                        <label>
                          {getTemp(item?.temp).toFixed(0)}°C
                        </label>
                      </div>
                    </div>
                  ))}
              </div>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col>
              <div>
                {weatherInfo?.daily?.slice(1, 6).map((item, i) => (
                  <div
                    className="d-flex justify-content-between align-items-center"
                    key={i}
                  >
                    <div className="d-flex flex-column align-items-center">
                      <label>{getDayName(converDate(item?.dt))}</label>
                      <label>{`${converDate(item?.dt).getDate()}/${
                        converDate(item?.dt).getMonth() + 1
                      }`}</label>
                    </div>
                    <div>
                      <img
                        src={`https://openweathermap.org/img/wn/${item?.weather[0]?.icon}@2x.png`}
                        alt="icono clima"
                      />
                    </div>
                    <div className="d-flex flex-column align-items-center">
                      <label>{getTemp(item.temp.min).toFixed(0)}° </label>
                      <label>Min</label>
                    </div>
                    <div className="d-flex flex-column align-items-center">
                      <label>{getTemp(item.temp.max).toFixed(0)}°</label>
                      <label>Max</label>
                    </div>
                    <div className="d-flex flex-column align-items-center">
                      <label>{item.humidity}%</label>
                      <label>Humedad</label>
                    </div>
                    <div className="d-flex flex-column align-items-center">
                      <label>{getKm(item.wind_speed).toFixed(0)}</label>
                      <label>Km/h</label>
                    </div>
                  </div>
                ))}
              </div>
            </Col>
          </Row>{" "}
        </>
      ) : (
        <h2>Seleccione una ciudad</h2>
      )}
    </Container>
  );
};

export default WeatherCard;
