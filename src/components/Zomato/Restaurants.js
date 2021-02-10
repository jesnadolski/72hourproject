import React, { useState } from 'react';
import {
    ListGroup, ListGroupItem, ListGroupItemText, ListGroupItemHeading, Button
  } from 'reactstrap';

const ResResults = (props) => {
    console.log(props.nearby)


    return ( 

        <div>
          
             {props.nearby.map((place) => {
             return (
                
<div>
 <ul>
<li key={place.restaurant.name.toString()}>
    {place.restaurant.name}
  </li>
  <li key={place.restaurant.cuisines.toString()}>
    {place.restaurant.cuisines}
  </li>
  <li key={place.restaurant.location.address.toString()}>
    {place.restaurant.location.address}
  </li>
  <li key={place.restaurant.user_rating.rating_text.toString()}>
    {place.restaurant.user_rating.rating_text}
  </li>
  
</ul>
</div>


  

             )
            })}
</div>
    
     );
}
 
export default ResResults;

