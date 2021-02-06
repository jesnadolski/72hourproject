import React, { useState, useEffect } from 'react';
import './App.css';
import Jobs from "./components/Jobs/Jobs";
import Nasa from "./components/Nasa/Nasa";
import Weather from "./components/Weather/Weather";
import Zomato from "./components/Zomato/Zomato";

function App() {

const [location, setLocation] = useState('');

const getLocation = () => {
  navigator.geolocation.getCurrentPosition(function(position) {
    console.log("Latitude is:", position.coords.latitude);
    console.log("Longitude is:", position.coords.longitude);
    console.log(position);
  });
}

useEffect(() => {
  getLocation();
}, []);

  return (
          <div>
            <Nasa />
            <Weather />
            <Zomato />
            <Jobs />
    </div>
  );
}

export default App;
