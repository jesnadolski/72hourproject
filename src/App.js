import React, { useState, useEffect } from 'react'
import './App.css'
import Jobs from './components/Jobs/Jobs'
import Nasa from './components/Nasa/Nasa'
import Weather from './components/Weather/Weather'
import Zomato from './components/Zomato/Zomato'
import { Container, Row, Col, Jumbotron } from 'reactstrap'

function App() {
  const [coordinates, setCoordinates] = useState(undefined)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      console.log('Latitude is:', position.coords.latitude)
      console.log('Longitude is:', position.coords.longitude)
      console.log(position)
      setCoordinates(position.coords)
      setLoading(false)
    })
  }, [])
  if (loading && !coordinates) {
    return <div>loading</div>
  }


  return (
    <div className='parent'>
      <h1>Welcome to long={coordinates.longitude}, lat={coordinates.latitude}</h1>
      <div className="child">
        <Nasa latitude={coordinates.latitude} longitude={coordinates.longitude}/>
      </div>
        <div className="child">
          <Weather latitude={coordinates.latitude} longitude={coordinates.longitude} />
        </div>
        <div className="child">
          <h1>Restaurants Nearby</h1>
            <Zomato latitude={coordinates.latitude} longitude={coordinates.longitude}/>
        </div>
        <div className="child">
          <h1>Get a job!</h1>
          <Jobs latitude={coordinates.latitude} longitude={coordinates.longitude}/>
        </div>
    </div>
  )
}

export default App;
