import React from 'react'
import { MdLocationOn } from "react-icons/md";

const Card = () => {
  return (
    <div className='bg-[#222736] '>
      <div className='p-[20px] bg-[#2A3042]  rounded-sm gap-2 flex flex-col flex-wrap'>
      <div className='w-[50px] h-[50px] rounded-md'><img className='rounded-md w-full h-full' src="https://skote-v-dark.react.themesbrand.com/static/media/adobe.18e56447696e4920ce55f2008547dba4.svg" alt="" /></div>
      
      <div className='flex gap-1 items-center'>
        <div className='font-semibold text-[18px]'>Magento Developer</div>
        <div className='text-[#C3CDE4] text-[14px] font-semibold'>(0-2 Yrs Exp.)</div>
      </div>
      <div className='text-[#C3CDE4] text-[14px]'>Skote Technology Pvt.Ltd</div>
      <div className='flex text-[#C3CDE4] text-[14px] font-semibold items-center '>
        <div><MdLocationOn /></div>
        <div> California</div>
        <div>$250 - $800 / month</div>
      </div>
      <div className='flex gap-2 mb-2'>
        <button className='bg-[#34c38f2e] text-[#34c38f] font-semibold  px-1 whitespace-nowrap rounded-md text-[12px]'>Full Time</button>
        <button className='bg-[#4D4744] text-[#f1b44c] font-semibold  px-1 whitespace-nowrap rounded-md text-[12px]'>Urgent</button>
        <button className='bg-[#50a5f12e] text-[#50a5f1] font-semibold  px-1 whitespace-nowrap rounded-md text-[12px]'>Private</button>
      </div>
      <div className='flex gap-2'>
      <button className='w-[50%] bg-[#34c38f2e] text-[#34c38f] whitespace-nowrap py-[8px] px-[12px] rounded-md text-[14px]'>View Profile</button>
      <button className='w-[50%] bg-[#50a5f12e] text-[#50a5f1] whitespace-nowrap py-[8px] px-[12px] rounded-md text-[14px]'>Apply Now</button>
      </div>



    </div>
    </div>
    
  )
}

export default Card