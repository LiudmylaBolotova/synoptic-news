const ForecastDay = ({ info }) => {
    
    const forecast = info.forecast.forecastday;
    return (
      <>
        <h2>Forecast for the next 3 days</h2>
        {forecast.length > 0 ? (
          forecast.map(({ date, astro, day }) => (
            <ul key={date}>
              <li>
                <p>{date}</p>
                <p>
                  Sunrise: {astro.sunrise} - Sunset: {astro.sunset}
                </p>
                <p>
                  Moonrise: {astro.moonrise} - Moonset: {astro.moonset}
                </p>
                <p>
                  Temperature range: min {day.mintemp_c} C - max {day.maxtemp_c}{' '}
                  C
                </p>
                <p>{day.condition.icon}</p>
                <p>{day.condition.text}</p>
                <p>Daily chance of rain: {day.daily_chance_of_rain}</p>
              </li>
            </ul>
          ))
        ) : (
          <ul>
            <li>
              <p>ERROR FORECAST</p>
            </li>
          </ul>
        )}
      </>
    );
};

export default ForecastDay;