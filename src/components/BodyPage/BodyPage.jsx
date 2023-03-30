import { useState, useEffect } from 'react';
import axios from 'axios';
import Loader from '../Loader/Loader';
import { StyledMainSection, StyledTitle } from './BodyPage.styled';
import SearchForm from 'components/SearchForm/SearchForm';
import WeatherCardNow from 'components/WeatherCardNow/WeatherCardNow';
import ForecastDay from 'components/ForecastDay/ForecastDay';
import WeatherCardHour from 'components/WeatherCardHour/WeatherCardHour';
import WeatherNewYork from 'components/WeatherNewYork/WeatherNewYork';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

export const BodyPage = () => {
  const [status, setStatus] = useState(Status.IDLE);
  const [info, setInfo] = useState('');
  const [query, setQuery] = useState('');

  const handleSearchForm = query => {
    setQuery(query);
  };

  useEffect(() => {
    const controller = new AbortController();
    if (!query) {
      return;
    }
    setStatus(Status.PENDING);
    axios
      .get(
        `https://api.weatherapi.com/v1/forecast.json?key=950c57b6664c40c7867164945232503&q=${query}&days=3&aqi=no&alerts=no`,
        {
          signal: controller.signal,
        }
      )
      .then(res => {
        const responce = res.data;
        setStatus(Status.RESOLVED);
        setInfo(responce);
      })
      .catch(error => {
        setStatus(Status.REJECTED);
        return error.massage;
      });

    return () => {
      controller.abort();
    };
  }, [query]);

  if (status === Status.IDLE) {
    return (
      <StyledMainSection>
        <SearchForm onSubmit={handleSearchForm} />
        <WeatherNewYork />
      </StyledMainSection>
    );
  }

  if (status === Status.PENDING) {
    return (
      <StyledMainSection>
        <SearchForm onSubmit={handleSearchForm} />
        <Loader />
      </StyledMainSection>
    );
  }

  if (status === Status.RESOLVED) {
    return (
      <StyledMainSection>
        <SearchForm onSubmit={handleSearchForm} />
        <WeatherCardNow info={info} />
        <ForecastDay info={info}></ForecastDay>
        <WeatherCardHour info={info}></WeatherCardHour>
      </StyledMainSection>
    );
  }

  if (status === Status.REJECTED) {
    return (
      <StyledMainSection>
        <SearchForm onSubmit={handleSearchForm} />
        <StyledTitle>No location found matching parameter!</StyledTitle>
      </StyledMainSection>
    );
  }
};

export default BodyPage;
