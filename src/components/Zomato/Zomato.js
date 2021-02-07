import React, { useState, useEffect } from 'react';
import {
  CardColumns} from 'reactstrap';
import ResResults from "./Restaurants";

const Zomato = (props) => {

  const [restaurants, setRestaurants] = useState();
  
  function fetchZomato(){
    const key = "b3f53774cbedf32841880ac2c7fd6a6f";
    const baseurl = "https://developers.zomato.com/api/v2.1/geocode?"
    const url=`${baseurl}'lat='${props.latitude}'&lon='${props.longitude}`;
    console.log(url);
      fetch('https://developers.zomato.com/api/v2.1/geocode?lat=39.96712960000001&lon=-86.10447359999999', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'user-key': "b3f53774cbedf32841880ac2c7fd6a6f"
      }
    })
    .then(response => response.json())
    .then((data) => {
      setRestaurants(data);
      console.log(data);
    })
  }

  useEffect(() => {
    fetchZomato()
  }, []);


// function displayRestaurants(){
//   return restaurants.location.length >0 ? restaurants.map((restaurant) => <ResResults zomatorestaurant={restaurant} />) : null;
// }

    return (
      <div>
   {restaurants.location.title}
      </div>
      );
}
 
export default Zomato;
