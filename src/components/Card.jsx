import React from 'react';
import { MdLocationOn } from "react-icons/md";

const Card = ({ jobs }) => {
  return (
    <div className='bg-[#222736] w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7'>
      {jobs?.map((job) => (
        <div key={job.id} className='bg-[#2A3042] p-[20px] rounded-md flex flex-col'>
          <div className='w-[50px] h-[50px] rounded-md mb-3'>
            <img className='rounded-md w-full h-full object-cover' src={job.logo} alt={job.jobTitle} />
          </div>
          <div className='flex gap-1 items-center mb-2'>
            <div className='font-semibold text-[18px]'>{job.jobTitle}</div>
            <div className='text-[#C3CDE4] text-[14px] font-semibold'>({job.experience})</div>
          </div>
          <div className='text-[#C3CDE4] text-[14px] mb-2'>{job.companyName}</div>
          <div className='flex text-[#C3CDE4] text-[14px] font-semibold items-center mt-2 mb-2 gap-2'>
            <div><MdLocationOn /></div>
            <div>{job.location}</div>
            <div>$250 - $800 / month</div>
          </div>
          <div className='flex gap-2 mb-2'>
            <button className='bg-[#34c38f2e] text-[#34c38f] font-semibold px-2 py-1 rounded-md text-[12px]'>{job.type}</button>
            <button className='bg-[#4D4744] text-[#f1b44c] font-semibold px-2 py-1 rounded-md text-[12px]'>Urgent</button>
            <button className='bg-[#50a5f12e] text-[#50a5f1] font-semibold px-2 py-1 rounded-md text-[12px]'>Private</button>
          </div>
          <div className='flex gap-2 my-2 '>
            <button className='w-[50%] bg-[#34c38f2e] text-[#34c38f] whitespace-nowrap py-2 rounded-md text-[14px]'>View Profile</button>
            <button className='w-[50%] bg-[#50a5f12e] text-[#50a5f1] whitespace-nowrap py-2 rounded-md text-[14px]'>Apply Now</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;