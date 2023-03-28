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
} from './WeatherCardNow.styled';

const WeatherCardNow = ({ info }) => {
  const location = info.location;
  const current = info.current;

  return (
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
  );
};

export default WeatherCardNow;
