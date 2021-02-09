import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'reactstrap'

const Nasa = props => {
  const [data, setData] = useState()

  useEffect(() => {
    function nasaFetch() {
      const baseURL = 'https://api.nasa.gov/planetary/earth/'
      const key = 'mgd2pnpv3V2ChJuZUdrjTKMtADdVsWH9oHzRCVhq'
      const url = `${baseURL}imagery?lon=${props.longitude}&lat=${props.latitude}&date=2020-12-01&api_key=${key}`
      console.log(url)
      fetch(url)
        .then(res => res.blob())
        .then(result => {
          setData(URL.createObjectURL(result))
        })
        .catch(err => console.log(err))
    }
    nasaFetch()
  }, [props.latitude, props.longitude])

  return (
    <Container>
      <Row>
        <Col md='4' className='mb-3'>
          <img src={data} alt='' />
        </Col>
      </Row>
    </Container>
  )
}

export default Nasa
