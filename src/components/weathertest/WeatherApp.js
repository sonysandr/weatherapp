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
      <p style={{color:'Green',fontSize: '32px',fontFamily:'montserrat'}}>location={weather.name}</p>
      <p style={{fontSize:'45px'}}>windspeed={weather.wind.speed}</p>
      <p>feelslike={weather.main.feels_like}</p>
      <p>humidity={weather.main.humidity}</p>
      <p style={{color:'red',fontFamily:'opensans'}}>maxtemperature={weather.main.temp_max/ 10}</p>
      <p style={{color:'red',fontFamily: 'opensans'}}>mintemperature={weather.main.temp_min/ 10}</p>
      <p style={{color:'yellow',fontSize:'45px',fontFamily: 'opensans'}}>temperature={weather.main.temp / 10}</p>
      <p style={{color:'violet',fontFamily:'lato'}}>weather={weather.weather[0].description}</p>
        
      </Container>
      
      
   

    </>
  );
}
