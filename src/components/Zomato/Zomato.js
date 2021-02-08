import React, { useState, useEffect } from 'react';
import {
  CardColumns} from 'reactstrap';
import ResResults from "./Restaurants";


const Zomato = () => {
    
  const [restaurants, setRestaurants] = useState({});
  const [loading, setLoading] = useState(true);
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();  
 
function getGeo(){

    navigator.geolocation.getCurrentPosition(function(position) {
      console.log(position);
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
      setLoading(false);
    });
  if(loading && !latitude && !longitude) {
    return <div>loading</div>
  }
}


  function fetchZomato(){
    getGeo();
    const key = "b3f53774cbedf32841880ac2c7fd6a6f";
    const baseurl = "https://developers.zomato.com/api/v2.1/geocode?"
    const url=`${baseurl}lat=${latitude}&lon=${longitude}`;
    console.log(url);
    
      fetch(url, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'user-key': "b3f53774cbedf32841880ac2c7fd6a6f",
        'Content-Type': 'application/json',
      }      
    })
    .then(response => response.json())
    .then((data) => {
      setRestaurants(data.nearby_restaurants);
      console.log(data);
    
    })
  }

 

  useEffect(() => {
   getGeo();
   fetchZomato();
    }, []);
  if(loading && !latitude && !longitude && !restaurants) {
    return <div>loading</div>
  }




    return (
   <div>
    
    {restaurants}
   {/* <ResResults restaurants={restaurants} /> */}
    
   </div>
  
      
      );
    }
 
export default Zomato;