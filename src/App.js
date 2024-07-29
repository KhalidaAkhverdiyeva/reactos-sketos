import React, { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import { routers } from './routers';
import './styles/index.css';
import { fetchJobs } from '../src/services/apiService';
import { useJobs } from './context/JobContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const { setJobs } = useJobs();

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchJobs();
        console.log('Fetched data:', data);
        setJobs(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    getData();
  }, [setJobs]);

  return (
    <div className="App">
      <RouterProvider router={routers} />
      <ToastContainer />
    </div>
  );
}

export default App;