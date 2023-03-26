const WeatherCardNow = ({info}) => {

    const location = info.location;
    const current = info.current;
    return (
      <div>
        <h2>{location.country}</h2>
        <p>{location.localtime}</p>

        <ul>
          <li>
            <h3>Now in {location.name}</h3>
          </li>
          <li>{current.condition.icon}</li>
          <li>
            <p>{current.condition.text}</p>
          </li>
          <li>Last updated {current.last_updated}</li>
          <li>Air temperature: {current.temp_c} C</li>
          <li>Feels like: {current.feelslike_c} C</li>

          <li>Wind: {current.wind_kph}kph</li>
          <li>Wind gust : {current.gust_kph} kph</li>
          <li>Humidity: {current.humidity}%</li>
          <li>Precip: {current.precip_mm} mm</li>
          <li>Pressure: {current.pressure_mb} mb</li>
        </ul>
      </div>
    );
};



export default WeatherCardNow;