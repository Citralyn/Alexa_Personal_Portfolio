'use client';
import axios from 'axios';

export default function Home() {
  function callApiAxios() {
    axios.get('http://localhost:3001/api/axios')
    .then(response => {
        // Access the response data
        const responseData = response.data;
        // Process the response data here
        console.log(responseData)
    })
    .catch(error => {
        // Handle any errors
    });

  }
  function callApiFetch() {
    fetch('http://localhost:3001/api/fetch')
    .then(response => {
      if (response.ok) {
        return response.json(); // Parse the response data as JSON
      } else {
        throw new Error('API request failed');
      }
    })
    .then(data => {
      // Process the response data here
      console.log(data); // Example: Logging the data to the console
    })
    .catch(error => {
      // Handle any errors here
      console.error(error); // Example: Logging the error to the console
    });
    }
  return(
    <>
    <button onClick={callApiFetch}>Call API using Fetch</button>
    <button onClick={callApiAxios}>Call API using Axios</button>
    </>
)}