import React, { useState, useEffect } from 'react'

const Jobs = props => {
  const [results, setResults] = useState([])

  const corsURL = 'https://efa-cors-anywhere.herokuapp.com/'
  const baseURL = 'https://jobs.github.com/positions'

  useEffect(() => {
    const url = `${baseURL}?lat=${props.latitude}&long=${props.longitude}`

    function fetchJobs() {
      if (props.latitude && props.longitude) {
        fetch(corsURL + url, {
          method: 'GET',
          headers: {
            Accept: 'application/json'
          }
        })
          .then(res => res.json())
          .then(data => {
            setResults(data)
            console.log(data)
          })
      }
    }
    fetchJobs()
  }, [props])

  return (
    <div>
      {results.map((job, index) => {
        return (
          <div key={index}>
            <h3>{job.company}</h3>
            <p>{[job.location]}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Jobs
