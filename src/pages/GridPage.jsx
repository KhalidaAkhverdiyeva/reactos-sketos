import React from 'react'
import { IoMdSearch } from "react-icons/io";
import { FiFilter } from "react-icons/fi";
import Card from '../components/Card'
import { useJobs } from '../context/JobContext';

const GridPage = () => {
  const { jobs } = useJobs();
  return (
    <div className='text-white '>

       <div className='flex justify-between pb-6'>
          <div className='text-[16px] font-bold '>JOB Grid</div>
          <div className='flex gap-2'>
              <span className='text-[14px]'>Jobs</span>
              <div className='text-[#C3CBDF] text-[14px]'>/ Jobs Grid</div>
          </div>
       
        </div>
        <div className='bg-[#2A3042] p-[20px] pb-[35px] flex justify-between'>
        <input type="text" placeholder='Search your job' className='bg-transparent focus:outline-none border-[1px] border-[#353D55] rounded-md px-[15px] py-[5px] ' />
          <input type="text" placeholder='San Francisco,LA' className='bg-transparent focus:outline-none border-[1px] border-[#353D55] rounded-md px-[15px] py-[5px]  ' />
          <input type="text" placeholder='Job Categories' className='bg-transparent focus:outline-none border-[1px] border-[#353D55] rounded-md px-[15px] py-[5px]  ' />
          <input type="text" placeholder='Select time' className='bg-transparent focus:outline-none border-[1px] border-[#353D55] rounded-md px-[15px] py-[5px]  ' />
          <div className='flex items-center gap-2 bg-[#556ee6] text-white p-2 rounded-md'>
            <div><IoMdSearch /></div>
            <div>Find Jobs</div>
          </div>
          <div className='flex items-center gap-2 bg-[#74788d] text-white p-2 rounded-md'>
            <div><FiFilter /></div>
            <div>Advance</div>
          </div>
        </div>
        <div className='py-[20px] flex gap-5 flex-wrap'>
          <Card jobs= { jobs }/>
         
        </div>

    </div>
  )
}

export default GridPage