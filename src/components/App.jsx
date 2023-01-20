import React from "react";
import Search from "./searchBar";
import Mid from "./mid";
import Descriptions from "./descriptions";
import Forecast from "./forecast";
import { getFormattedWeatherData } from "../weatherAPI";
import { getFormattedForecastData } from "../forecastAPI";
function App(){
  const [city, setCity] = React.useState("Chandigarh");
  const [weather, setWeather] = React.useState(null);
  const [forecast, setForecast] = React.useState(null);
  const [units, setUnits] = React.useState("metric");

  React.useEffect(() => {
    const fetchWeatherData = async () => {
      const data = await getFormattedWeatherData(city, units);
      const data2 = await getFormattedForecastData(city, units);
      setWeather(data);
      setForecast(data2);
    };
    fetchWeatherData();
  }, [units, city]);

  function handleChange(event){
      setCity(event.target.value);
  }
  if(weather && forecast){
    var {list} = forecast;
    list = list.slice(1,8);
    console.log(list);
    return(
      <div className="app">
            <Search handleChange={handleChange} city={city} name={weather.name}/>
        <Mid handleChange={handleChange} city={city} name={weather.name} temp={weather.temp} 
        description={weather.description} iconURL={weather.iconURL} />
        <Descriptions temp={weather.temp} min={weather.temp_min} max={weather.temp_max} 
        feelsLike={weather.feels_like} humidity={weather.humidity} pressure={weather.pressure} />
        <Forecast list={list}/>
      </div>
    )
  }
}
export default App;