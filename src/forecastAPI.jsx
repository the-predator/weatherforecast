const API_KEY = "250c2191a73d34573b8c4a88f88bf4e1";

const makeIconURL = (iconId) =>
  `https://openweathermap.org/img/wn/${iconId}@2x.png`;

const getFormattedForecastData = async (city, units = "metric") => {
  const URL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=${units}`;

  const data = await fetch(URL)
    .then((res) => res.json())
    .then((data) => data);
  
 const {list} = data;

  return {
       list,
  };
};

export { getFormattedForecastData };