import { useState, useEffect } from 'react';
import axios from 'axios';
import {
  StyledCard,
  SectionDate,
  WeatherNow,
  SectionLastUpdate,
  StyledTitleLocation,
  StyledTitleCountry,
  StyledFcCalendar,
  StyledItem,
  StyledLocalTime,
} from './WeatherNewYork.styled';

const WeatherNewYork = () => {
  const [weather, setWeather] = useState('');

  useEffect(() => {
    const controller = new AbortController();

    axios
      .get(
        `https://api.weatherapi.com/v1/current.json?key=950c57b6664c40c7867164945232503&q=New York`,
        {
          signal: controller.signal,
        }
      )
      .then(res => {
        const responce = res.data;

        setWeather(responce);
      })
      .catch(error => {
        return error.massage;
      });

    return () => {
      controller.abort();
    };
  }, []);

  const location = weather.location;

  const current = weather.current;

  return (
    <>
      {weather && (
        <StyledCard>
          <div>
            <SectionDate>
              <StyledFcCalendar />
              <StyledLocalTime>{location.localtime}</StyledLocalTime>
            </SectionDate>

            <StyledTitleLocation>Now in {location.name}</StyledTitleLocation>
            <StyledTitleCountry>{location.country}</StyledTitleCountry>

            <WeatherNow>
              <img src={current.condition.icon} alt={'icon'} />
              <p>{current.condition.text}</p>
            </WeatherNow>

            <SectionLastUpdate>
              <StyledFcCalendar />
              <p>Last updated {current.last_updated}</p>
            </SectionLastUpdate>
          </div>

          <ul>
            <StyledItem>Air temperature: {current.temp_c} C</StyledItem>
            <StyledItem>Feels like: {current.feelslike_c} C</StyledItem>

            <StyledItem>Wind: {current.wind_kph}kph</StyledItem>
            <StyledItem>Wind gust : {current.gust_kph} kph</StyledItem>
            <StyledItem>Humidity: {current.humidity}%</StyledItem>
            <StyledItem>Precip: {current.precip_mm} mm</StyledItem>
            <StyledItem>Pressure: {current.pressure_mb} mb</StyledItem>
          </ul>
        </StyledCard>
      )}
    </>
  );
};

export default WeatherNewYork;
