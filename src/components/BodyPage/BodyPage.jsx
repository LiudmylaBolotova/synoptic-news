import { useState, useEffect } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { StyledMainSection } from './BodyPage.styled';
import SearchForm from 'components/SearchForm';
import WeatherCardNow from 'components/WeatherCardNow';
import ForecastDay from 'components/ForecastDay';
import WeatherCardHour from 'components/WeatherCardHour';

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
    
    setQuery(query)
  };

  useEffect(() => {
    const controller = new AbortController();
    if (!query) {
      return;
    }
setStatus(Status.PENDING);
    axios
      .get(
        `http://api.weatherapi.com/v1/forecast.json?key=950c57b6664c40c7867164945232503&q=${query}&days=3&aqi=no&alerts=no`,
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
        // return toast.error(`Please enter a valid location!`);
        return error.massage;
        
      });

    return () => {
      controller.abort();
    };
  }, [query]);

  if (status === Status.IDLE) {
    return (
      <>
        <div>
          <StyledMainSection>
            <SearchForm onSubmit={handleSearchForm} />
            <div>IDLE</div>
          </StyledMainSection>
        </div>
      </>
    );
  }

  if (status === Status.PENDING) {
    <>
      <StyledMainSection>
        <SearchForm onSubmit={handleSearchForm} />
        <div>PENDING</div>
      </StyledMainSection>
    </>
  }

  if (status === Status.RESOLVED ) {
    return (
      <>
        <div>
          <StyledMainSection>
            <SearchForm onSubmit={handleSearchForm} />
            <WeatherCardNow info={info} />
            <ForecastDay info={info}></ForecastDay>
            <WeatherCardHour info={info}></WeatherCardHour>
          </StyledMainSection>
        </div>
      </>
    );
  }

  if (status === Status.REJECTED || info.length === 0) {
    return (
      <>
        <StyledMainSection>
          <SearchForm onSubmit={handleSearchForm} />
          <div>No location found matching parameter!</div>
        </StyledMainSection>
      </>
    );
  }


};

export default BodyPage;
