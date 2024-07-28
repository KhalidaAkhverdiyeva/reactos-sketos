import React, {useState}from 'react'
import { addJob } from '../services/apiService'

const   JobForm = ({onClose}) => {

  const [formData, setFormData] = useState({
    jobTitle: '',
    companyName: '',
    location: '',
    experience: '',
    type: '',
    postedDate: '',
    lastDate: '',
    status: '',
   
});

const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData(prevData => ({
    ...prevData,
    [name]: value
  }));
};

// const handleFileChange = (e) => {
//   setFormData(prevData => ({
//     ...prevData,
//     file: e.target.files[0]
//   }));
// };

const handleSubmit = async (e) => {
  e.preventDefault();


  try {
    const response = await addJob(formData); 
    console.log('Job added:', response.data);

    if(onClose){
      onClose()
    }
   
 
  } catch (error) {
    console.error('Error adding job:', error);

  }

};


  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="mb-4">
        <label htmlFor="jobTitle" className="block text-white text-sm mb-1">Job Title</label>
        <input
          type="text"
          name="jobTitle"
          value={formData.jobTitle}
          onChange={handleChange}
          className="w-full p-1 border border-gray-600 rounded bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-blue-500 box-border"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="companyName" className="block text-white text-sm mb-1">Company Name</label>
        <input
          type="text"
          name="companyName"
          value={formData.companyName}
          onChange={handleChange}
          className="w-full p-1 border border-gray-600 rounded bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-blue-500 box-border"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="location" className="block text-white text-sm mb-1">Location</label>
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          className="w-full p-1 border border-gray-600 rounded bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-blue-500 box-border"
        />
      </div>
      {/* <div className="mb-4">
        <label htmlFor="file-upload" className="block text-white text-sm mb-1">Image</label>
        <input
          type="file"
          id="file-upload"
          onChange={handleFileChange}
          className="w-full p-2 border border-gray-600 rounded bg-[#2A3042] text-white cursor-pointer flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-500 box-border"
        />
      </div> */}
      <div className="mb-4">
        <label htmlFor="experience" className="block text-white text-sm mb-1">Experience</label>
        <input
          type="text"
          name="experience"
          value={formData.experience}
          onChange={handleChange}
          className="w-full p-1 border border-gray-600 rounded bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-blue-500 box-border"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="type" className="block text-white text-sm mb-1">Type</label>
        <select
          name="type"
          value={formData.type}
          onChange={handleChange}
          className="w-full p-1 border border-gray-600 rounded bg-[#2A3042] text-white focus:outline-none focus:ring-2 focus:ring-blue-500 box-border"
        >
          <option value="all">All</option>
          <option value="part-time">Part Time</option>
          <option value="full-time">Full Time</option>
          <option value="freelance">Freelance</option>
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="lastDate" className="block text-white text-sm mb-1">Last Date</label>
        <input
          type="date"
          name="lastDate"
          value={formData.lastDate}
          onChange={handleChange}
          className="w-full p-1 border border-gray-600 rounded bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-blue-500 box-border"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="status" className="block text-white text-sm mb-1">Status</label>
        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="w-full p-1 border border-gray-600 rounded bg-[#2A3042] text-white focus:outline-none focus:ring-2 focus:ring-blue-500 box-border"
        >
          <option value="close">Close</option>
          <option value="new">New</option>
        </select>
      </div>
      <div className="flex justify-end gap-2">
        <button
          type="submit"
          className="bg-[#34c38f] text-white py-2 px-4 rounded-md"
        >
          Save
        </button>
      </div>
    </form>
  )
}

export default JobForm

