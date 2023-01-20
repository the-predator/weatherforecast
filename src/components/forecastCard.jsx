import React from 'react'

function ForecastCard({temp, icon, day}) {
  return (
    <div className='forecastCard'>
        <h4>{day}</h4>
        <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt="" className="icon" />
        <h4>{temp} <span> °C</span></h4>
    </div>
  )
}

export default ForecastCard;
