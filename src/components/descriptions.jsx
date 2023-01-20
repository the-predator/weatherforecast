import React from 'react'
import Card from './card'
function Descriptions({temp, min, max, feelsLike, pressure, humidity}){
  return (
    <div className='descriptions'>
    <Card icon="" value={temp} title='Temp'/>
    <Card icon="" value={min} title='Min'/>
    <Card icon="" value={max} title='Max'/>
    <Card icon="" value={feelsLike} title='Feels Like'/>
    <Card icon="" value={humidity} title='Humidity'/>
    <Card icon="" value={pressure} title='Pressure'/>
    
    </div>
  )
}

export default Descriptions;
