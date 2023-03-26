const WeatherCardHour = ({ info }) => {
    const forecast = info.forecast.forecastday;
 

    
     return (
       <>
         <h2>Detailed hourly weather forecast</h2>
         {forecast ? (
           forecast.map(({ date, hour }) => (
             <ul key={date}>
               <li>
                 {hour.map(({ time, temp_c }) => (
                   <div key={time}>
                     <p>Forecast for {time}</p>
                     <p>Temperature: {temp_c} C</p>
                     {/* <p>{time.chance_of_rain}</p>
                         <p>{time.condition.icon }</p> */}
                   </div>
                 ))}
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
}

export default WeatherCardHour;