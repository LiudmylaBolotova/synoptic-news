import {
  StyledCard,
  StyledSection,
  StyledFcAlarmClock,
  StyledTitle,
  StyledPartList,
  SectionDate,
  StyledItemWeather,
  StyledList,
  StyledItem,
} from './WeatherCardHour.styled';

const WeatherCardHour = ({ info }) => {
  const forecast = info.forecast.forecastday;

  return (
    <StyledCard>
      <StyledTitle>Hourly weather forecast for the next 3 days</StyledTitle>
      <StyledSection>
        {forecast ? (
          forecast.map(({ date, hour }) => (
            <StyledPartList key={date}>
              <div>
                {hour.map(
                  ({
                    time,
                    temp_c,
                    chance_of_rain,
                    cloud,
                    condition,
                    feelslike_c,
                  }) => (
                    <div key={time}>
                      <SectionDate>
                        <StyledFcAlarmClock />
                        <h4>Forecast for {time}</h4>
                      </SectionDate>

                      <StyledItemWeather>
                        <img src={condition.icon} alt={'icon'} />
                        <p>{condition.text}</p>
                      </StyledItemWeather>

                      <StyledList>
                        <StyledItem>Cloud: {cloud}</StyledItem>
                        <StyledItem>Temperature: {temp_c} C</StyledItem>
                        <StyledItem>Feelslike: {feelslike_c} C</StyledItem>
                        <StyledItem>
                          Chance of rain: {chance_of_rain}
                        </StyledItem>
                      </StyledList>
                    </div>
                  )
                )}
              </div>
            </StyledPartList>
          ))
        ) : (
          <ul>
            <li>
              <p>ERROR FORECAST</p>
            </li>
          </ul>
        )}
      </StyledSection>
    </StyledCard>
  );
};

export default WeatherCardHour;
