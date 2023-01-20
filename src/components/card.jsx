import React from 'react'

function card({title, value}) {
  return (
    <div className='card'>
      <h5 className="title"><span id='icon'></span>{title}</h5>
      <h2 id='value'>{value} {(title==='Temp'
      ||title==='Min'||title==='Max'
      ||title==='Feels Like') && 
      <span> °C</span>}</h2>
    </div>
  )
}

export default card
