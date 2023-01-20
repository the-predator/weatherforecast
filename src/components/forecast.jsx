import React from 'react';
import ForecastCard from './forecastCard';

function forecast({list}) {
    const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const dayInWeek = new Date().getDay();
    const forecastDays = weekDays.slice(dayInWeek, weekDays.length).concat(weekDays.slice(0,dayInWeek));
  return (
      <div className="forecast">
            {
            list.map((el, ind)=>{
            return(
              <ForecastCard key={el.dt} temp={el.main.temp} icon={el.weather[0].icon} day={forecastDays[ind]}/>
            )
           })}
          </div>
  )
}

export default forecast
