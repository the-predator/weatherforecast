import React from "react";


function Mid({name, description, temp, iconURL}){
  
return(
    <div className="mid">
        <div className="cityName">
        <h3>{name}</h3>
        <img src={iconURL} alt="icon" />
        <h3>{description}</h3>
        </div>
        <h1 id="temp">{temp} °C</h1>
    </div>
)
}

export default Mid;
