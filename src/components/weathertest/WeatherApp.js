import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

import Container from '@mui/material/Container';


// base url for api
const baseUrl =
  "https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=696606efa0d387803b2f600dd5ebaca1";

export default function WeatherApp() {
  // useState to handle data
  const [weather, setWeather] = useState(null);

  // useEffect -axio-dot-then
//   useEffect(() => {
//     axios.get(baseUrl).then((response) => {
//       setWeather(response.data);
//     });
//   }, []);

// axios await 
useEffect(() => {
    const getData = async function (){
       const response = await axios.get(baseUrl)
        return (
            setWeather(response.data)
        )
       
   }
getData()

}, []);

  



  if (!weather) return null;

  return (
    <>
      

      
      <Container fixed>
      <p>Base={weather.base}</p>
      <p>location={weather.name}</p>
      <p>windspeed={weather.wind.speed}</p>
      <p>feelslike={weather.main.feels_like}</p>
      <p>humidity={weather.main.humidity}</p>
      <p> maxtemperature={weather.main.temp_max}</p>
      <p>mintemperature={weather.main.temp_min}</p>
      <p>temperature={weather.main.temp / 10}</p>
      <p>weather={weather.weather[0].description}</p>
        
      </Container>
      
      
   

    </>
  );
}
