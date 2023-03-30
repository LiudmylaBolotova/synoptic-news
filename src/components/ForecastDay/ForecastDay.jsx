import {
  StyledCard,
  StyledTitle,
  SectionDate,
  StyledFcCalendar,
  StyledSection,
  StyledList,
  StyledPartList,
  StyledItemWeather,
  StyledItem,
  StyledLocalTime,
} from './ForecastDay.styled';

const ForecastDay = ({ info }) => {
  const forecast = info.forecast.forecastday;
  return (
    <StyledCard>
      <StyledTitle>Forecast for the next 3 days</StyledTitle>
      <StyledSection>
        {forecast.length > 0 &&
          forecast.map(({ date, astro, day }) => (
            <StyledPartList key={date}>
              <div>
                <SectionDate>
                  <StyledFcCalendar />
                  <StyledLocalTime>{date}</StyledLocalTime>
                </SectionDate>

                <StyledItemWeather>
                  <img src={day.condition.icon} alt={'icon'} />
                  <p>{day.condition.text}</p>
                </StyledItemWeather>
              </div>
              <StyledList>
                <StyledItem>
                  Sunrise: {astro.sunrise} - Sunset: {astro.sunset}
                </StyledItem>
                <StyledItem>
                  Moonrise: {astro.moonrise} - Moonset: {astro.moonset}
                </StyledItem>
                <StyledItem>
                  Temperature range: min {day.mintemp_c} C - max {day.maxtemp_c}
                  C
                </StyledItem>

                <StyledItem>
                  Daily chance of rain: {day.daily_chance_of_rain}
                </StyledItem>
              </StyledList>
            </StyledPartList>
          ))}
      </StyledSection>
    </StyledCard>
  );
};

export default ForecastDay;
