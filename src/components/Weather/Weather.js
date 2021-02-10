import React, { useEffect, useState } from "react";

let key = "fe544efe7738b3fecc6fdd574e208fe6";

function Weather(props) {
  const [weather, setWeather] = useState();
  const [toggle, setToggle] = useState(true);

  function fetchWeather() {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?lat=${props.latitude}&lon=${props.longitude}&appid=${key}`
    )
      .then((response) => response.json())
      .then((data) => setWeather(data.main.temp));
  }
  
  function toggleButton(){
      if (toggle === true){
          setToggle(false)
        } else {
            setToggle(true)
        }}
        
        
        useEffect(() => {
            fetchWeather();
        }, []);


      return (
          <div>
         <h1>Your Weather</h1>
         <h1>{props.feels_like}</h1>
     
          
          {toggle === true ? Math.floor(weather * 1.8 - 459.67) +"°F" : Math.floor(weather - 273.12)+"°C" }
          <br></br>
          <br />
          {toggle === true ? <button onClick ={toggleButton}>Change to Centigrade</button>:
          <button onClick ={toggleButton}>Change to Fahrenheit</button>}
    
        </div>
      );
};
    export default Weather;
    