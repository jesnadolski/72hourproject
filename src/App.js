import React, { useState, useEffect } from 'react';
import './App.css';
import Jobs from "./components/Jobs/Jobs";
import Nasa from "./components/Nasa/Nasa";
import Weather from "./components/Weather/Weather";
import Zomato from "./components/Zomato/Zomato";




function App() {


// const [coordinates, setCoordinates] = useState();
// const [loading, setLoading] = useState(true);
// const [sessionCoordinates, setSessionCoordinates] = useState();


// useEffect(() => {
//   navigator.geolocation.getCurrentPosition(function(position) {
//     console.log("Latitude is:", position.coords.latitude);
//     console.log("Longitude is:", position.coords.longitude);
//     console.log(position);
//     // setCoordinates(position.coords);
//     setLoading(false);
//   });
// }, []);
// if(loading && !coordinates) {
//   return <div>loading</div>
// }





  return (
          <div>
            
            <Zomato />
            
    </div>
  );
}

export default App;