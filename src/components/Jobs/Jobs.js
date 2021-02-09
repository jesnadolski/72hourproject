import React, { useState, useEffect } from 'react';

const Jobs = (props) => {
  // const [location, setLocation] = useState();
  // const [title, setTitle] = useState();
  // const [jobid, setJobId] = useState();

  const [results, setResults] = useState([]);
  const corsURL = 'https://efa-cors-anywhere.herokuapp.com/';
  const baseURL = 'https://jobs.github.com/positions';
  const url = `${baseURL}?lat=${props.latitude}&long=${props.longitude}`;

  function fetchJobs() {
    fetch(corsURL + url, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setResults(data);
        console.log(data);
      });
  }

  useEffect(() => {
    fetchJobs();
  }, [props]);

  return <></>;
};

export default Jobs;
