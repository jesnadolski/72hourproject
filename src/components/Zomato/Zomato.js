import React, { useState, useEffect } from 'react';
import {
  ListGroup} from 'reactstrap';
import ResResults from "./Restaurants";

const Zomato = (props) => {
  const [nearby, setNearby] = useState([]);


  console.log(nearby);
  function fetchZomato(){
   
    const key = "b3f53774cbedf32841880ac2c7fd6a6f";
    const baseurl = "https://developers.zomato.com/api/v2.1/geocode?"
    let url=`${baseurl}'lat='${props.latitude}'&lon='${props.longitude}`;
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
         
      setNearby(data.nearby_restaurants);

    })
  }

  useEffect(() => {
    fetchZomato()
  }, [props.latitude, props.longitude]);



    return (
      <div>
      
    <ResResults nearby={nearby}/>
   
      </div>
      );
    }

 
export default Zomato;


