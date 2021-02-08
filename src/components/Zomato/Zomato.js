import React, { useState, useEffect } from 'react';
import {
  CardColumns} from 'reactstrap';
import ResResults from "./Restaurants";

const Zomato = (props) => {
    
  const [restaurants, setRestaurants] = useState();
  
  function fetchZomato(){
    const key = "b3f53774cbedf32841880ac2c7fd6a6f";
    const baseurl = "https://developers.zomato.com/api/v2.1/geocode?"
    const url=`${baseurl}lat=${props.latitude}&lon=${props.longitude}`;
    console.log(url);
      fetch(url, {
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
      console.log(restaurants.nearby_restaurants[0].restaurant.name);
    })
  }

  useEffect(() => {
    fetchZomato()
  }, [props.latitude, props.longitude]);






    return (
   <>
  
   <ResResults />
   </>
  
      
      );
    }
 
export default Zomato;
