import React, { useState, useEffect } from 'react';
import './App.css';
import Jobs from "./components/Jobs/Jobs";
import Nasa from "./components/Nasa/Nasa";
import Weather from "./components/Weather/Weather";
import Zomato from "./components/Zomato/Zomato";

function App() {

// const [location, setLocation] = useState(undefined);
const [coordinates, setCoordinates] = useState(undefined);
const [latitude, setLatitude] = useState(undefined);
const [longitude, setLongitude] = useState(undefined);
const [loading, setLoading] = useState(true);

// const getLocation = () => {
  // navigator.geolocation.getCurrentPosition(function(position) {
  //   console.log("Latitude is:", position.coords.latitude);
  //   console.log("Longitude is:", position.coords.longitude);
  //   console.log(position);
  //   setLatitude(position.coords.latitude);
  //   setLongitude(position.coords.longitude);
//   });
// }

useEffect(() => {
  navigator.geolocation.getCurrentPosition(function(position) {
    console.log("Latitude is:", position.coords.latitude);
    console.log("Longitude is:", position.coords.longitude);
    console.log(position);
    setLatitude(position.coords.latitude);
    setLongitude(position.coords.longitude);
    setCoordinates(position.coords);
    setLoading(false);
});
}, []);

if(loading && !coordinates) {
  return (
  <div>loading data...</div>
  )
}

  return (
          <div>
            <Nasa />
            <Weather />
            <Zomato latlatitude={coordinates.latitude} longitude={coordinates.longitude}/>
            <Jobs />
    </div>
  );
}

export default App;