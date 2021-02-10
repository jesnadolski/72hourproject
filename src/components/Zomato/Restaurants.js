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
  {/* <li key={place.restaurant.location.menu_url.toString()}><a href={place.restaurant.location.menu_url} target="blank"></a></li> */}
</ul>

{/* 
<ListGroup>
<ListGroupItem key={place.restaurant.name}>{place.restaurant.name.toString()}</ListGroupItem>
<ListGroupItem key={place.restaurant.cuisines}>{place.restaurant.cuisines.toString()}</ListGroupItem>
<ListGroupItem key={place.restaurant.user_rating.rating_text} key={place.restaurant.user_rating.rating_text}>{place.restaurant.user_rating.rating_text.toString()}, {place.restaurant.user_rating.aggregate_rating.toString()}</ListGroupItem>
<ListGroupItem key={place.restaurant.currency} key={place.restaurant.average_cost_for_two}>{place.restaurant.currency.toString()}{place.restaurant.average_cost_for_two.toString()}</ListGroupItem>
<ListGroupItem><Button href={place.restaurant.menu_url}></Button></ListGroupItem>
</ListGroup>

<ul>
<li><Button href={place.restaurant.menu_url}></Button></li>
</ul> */}





</div>


  

             )
            })}
</div>
    
     );
}
 
export default ResResults;