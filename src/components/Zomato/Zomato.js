import React, { useState, useEffect } from 'react';

const Zomato = (props) => {

  const [restaurants, setRestaurants] = useState([]);
  
  function fetchZomato(){
    const key = "b3f53774cbedf32841880ac2c7fd6a6f";
    const baseurl = "https://developers.zomato.com/api/v2.1/geocode?"
    const url=`${baseurl}'lat='${props.lat}'&lon='${props.lon}`;

  
    fetch('https://developers.zomato.com/api/v2.1/geocode?lat=39.96712960000001&lon=-86.10447359999999', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'user-key': "b3f53774cbedf32841880ac2c7fd6a6f",
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then((json) => {
      setRestaurants(json.results);
      console.log(json.results);
    })
  }


  useEffect(() => {
    fetchZomato()
  }, []);


function displayRestaurants(){
  return restaurants.length >0 ? restaurants.map((restaurant) => <Zomato zomatorestaurant={restaurant} />) : null;
}


    return (
        <>
        </>
      );
}
 
export default Zomato;
