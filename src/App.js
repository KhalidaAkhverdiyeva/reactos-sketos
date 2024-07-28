
import { RouterProvider } from "react-router-dom"
import { routers } from "./routers"
import './styles/index.css'
import React, { useEffect, useState } from 'react';
import { fetchJobs } from '../src/services/apiService';
import { useJobs } from './context/JobContext'





function App() {
  const { setJobs } = useJobs()


  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchJobs();

        setJobs(data)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    getData();
  }, [setJobs]);
  return (

    <div className="App">
      <RouterProvider router={routers} />
    </div>
  );
}

export default App;
