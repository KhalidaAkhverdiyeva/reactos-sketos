import React,{useState,useEffect} from 'react'
import Table from '../components/Table'
import { GrRefresh } from "react-icons/gr";
import { HiOutlineDotsVertical } from "react-icons/hi";
import Modal from '../components/ModalAdd'
import { fetchJobs, deleteJob } from '../services/apiService';
import { useJobs } from '../context/JobContext';
import debounce from 'lodash.debounce';


const TablePage = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const { jobs, setJobs } = useJobs();
    const [filteredJobs, setFilteredJobs] = useState(jobs);
    


    const debouncedSearch = debounce ((query) =>{
        setSearchQuery(query)

    },300)

    useEffect(() => {
   
        setFilteredJobs(
          jobs.filter(job =>
            job.jobTitle.toLowerCase().includes(searchQuery.toLowerCase())
          )
        );
      }, [searchQuery, jobs]);


      const handleSearchChange = (event) => {
        debouncedSearch(event.target.value);
      };

    const openModal = () => setModalOpen(true);
    const handleCloseModal = () => {
        setModalOpen(false);
        fetchJobsData();
    }

    const fetchJobsData = async () => {
        try {
            const response = await fetchJobs(); 
            setJobs(response);
        } catch (error) {
            console.error('Error fetching jobs:', error);
        }
    };

    useEffect(() => {
        fetchJobsData(); 
    }, []);


    const handleDelete = async (id) => {
        await deleteJob(id);
        setJobs(jobs.filter(job => job.id !== id));
      };

  return (
    <div className=' text-white'>
    <div className='flex justify-between pb-6'>
        <div className='text-[16px] font-bold '>JOB LISTS</div>
        <div className='flex gap-2'>
            <span className='text-[14px]'>Jobs</span>
            <div className='text-[#C3CBDF] text-[14px]'>/ Jobs Lists</div>
        </div>
       
    </div>
    <div className='bg-[#2A3042]'>
        <div className='bg-[#2A3042] p-[20px] border-b-[#353D55] border-b-[1px]'>
        <div className='flex items-center justify-between'> 
        <div className='font-bold'>Jobs Lists</div>
        <div className='flex items-center gap-[5px]'>
            <button onClick={openModal} className='bg-[#556ee6] py-[8px] px-[12px] rounded-md text-[13px] '>Add New Job</button>
            <div className='bg-[#32394E] py-[12px] px-[12px] rounded-md'><GrRefresh className='text-[12px]' /></div>
            <div className='bg-[#34C38F] py-[10px] px-[12px] rounded-md text-[14px]'><HiOutlineDotsVertical /></div>
        </div>
    </div>
    <div>
   
   
       
    </div>

        </div>
        <div className='bg-transparent p-[20px] flex justify-between'>
            <div className=' border-[#353D55] border-[1px]  px-[15px] py-[5px] w-[176px]  rounded-md'> 
                <select className='bg-transparent w-[150px] focus:outline-none text-[14px]'>
                        <option className='bg-[#2A3042] ' value="Show 10">Show 10</option>
                        <option className='bg-[#2A3042]' value="Show 20">Show 20</option>
                        <option className='bg-[#2A3042]' value="Show 30">Show 30</option>
                        <option className='bg-[#2A3042]' value="Show 40">Show 40</option>
                </select>
            </div>
            <input onChange={handleSearchChange} type="text" placeholder='Search for.. ' className='bg-transparent focus:outline-none border-[1px] border-[#353D55] rounded-md px-[15px] w-[377px]' />
            <div className=' border-[#353D55] border-[1px]  px-[15px] py-[5px] w-[176px]  rounded-md'> 
                <select className='bg-transparent w-[150px] focus:outline-none text-[14px]'>
                        <option className='bg-[#2A3042]' disabled selected >Status</option>
                        <option className='bg-[#2A3042]' >All</option>
                        <option className='bg-[#2A3042]' >Active</option>
                        <option className='bg-[#2A3042]' >New</option>
                        <option className='bg-[#2A3042]' >Close</option>
                </select>
            </div>
            <div className=' border-[#353D55] border-[1px]  px-[15px] py-[5px] w-[176px]  rounded-md'> 
                <select className='bg-transparent w-[150px] focus:outline-none text-[14px]'>
                        <option className='bg-[#2A3042]'   disabled selected >Select Type</option>
                        <option className='bg-[#2A3042]' >All</option>
                        <option className='bg-[#2A3042]' >Full Time</option>
                        <option className='bg-[#2A3042]' >Part Time</option>
                        <option className='bg-[#2A3042]' >Freelance</option>
                </select>
            </div>
            <input type="text" className='bg-transparent border-[1px] border-[#353D55] px-[10px] rounded-md' placeholder='Select Time' />

        </div>
       
   
    </div>
    {/* jobs={jobs} */}
    <Table  jobs={filteredJobs} onDelete={handleDelete}/>
    <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  )
}

export default TablePage