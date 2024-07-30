import axios from 'axios';

const API_URL = 'http://localhost:3000/jobs';



//FETCH JOBS 

export const fetchJobs = async (query = '') => {
    try {
        const response = await axios.get(`${API_URL}?q=${query}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);

    }
};


//POST A NEW JOB 

export const addJob = async (newJob) => {
    try {
        const response = await axios.post(API_URL, newJob)

        return response

    } catch (error) {
        console.log('error while posting', error)

    }
}


// DELETE A JOB

export const deleteJob = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error deleting job:', error);
    }
}
