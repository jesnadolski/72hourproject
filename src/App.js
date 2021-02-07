import React, { useState, useEffect } from 'react';
import './App.css';
import Jobs from "./components/Jobs/Jobs";
import Nasa from "./components/Nasa/Nasa";
import Weather from "./components/Weather/Weather";
import Zomato from "./components/Zomato/Zomato";

function App() {

// const [location, setLocation] = useState(undefined);
const [coordinates, setCoordinates] = useState(undefined);
const [loading, setLoading] = useState(true);


useEffect(() => {
  navigator.geolocation.getCurrentPosition(function(position) {
    console.log("Latitude is:", position.coords.latitude);
    console.log("Longitude is:", position.coords.longitude);
    console.log(position);
    setCoordinates(position.coords);
    setLoading(false);
  });
}, []);
if(loading && !coordinates) {
  return <div>loading</div>
}

  return (
          <div>
            <Nasa />
            <Weather latitude={coordinates.latitude} longitude={coordinates.longitude} />
            <Zomato />
            <Jobs />
    </div>
  );
}

export default App;
