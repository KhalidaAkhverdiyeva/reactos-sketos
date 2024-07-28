import React from 'react'
import { IoMenu } from "react-icons/io5";
import { IoChevronDownOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { FaExpand } from "react-icons/fa";
import { FaQrcode } from "react-icons/fa6";
import { FaRegBell } from "react-icons/fa6";


const Header = () => {
  return (
    <header className='flex ml-[250px] bg-[#2A3042] text-white justify-between py-[8px] pr-[15px] sticky top-0 left-0 z-10' >
      <div className='flex items-center px-[15px] py-[15px] gap-[15px]'>
      <div className='text-[22px]'><IoMenu /></div>
      <div className='flex items-center gap-2'><IoIosSearch /> <input className='bg-transparent font-semibold focus:outline-none' placeholder='Search..'></input></div>
      <div className='flex items-center gap-2'> <div className='text-[14px]'>Mega Menu </div> <IoChevronDownOutline /></div></div>
      <div className='flex items-center gap-[32px]'>
        <img className='w-[23px] h-[16px]' src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAQEBAQEBAQEBAQGBgUGBggHBwcHCAwJCQkJCQwTDA4MDA4MExEUEA8QFBEeFxUVFx4iHRsdIiolJSo0MjRERFz/2wBDAQQEBAQEBAQEBAQGBgUGBggHBwcHCAwJCQkJCQwTDA4MDA4MExEUEA8QFBEeFxUVFx4iHRsdIiolJSo0MjRERFz/wAARCAAqAEADASIAAhEBAxEB/8QAGwAAAgIDAQAAAAAAAAAAAAAAAAcDBgEEBQj/xAA1EAABAgIHBwIFAwUAAAAAAAABAgQAAwUGBxESFlYTFBVRk6HTMVciI5GS0hdBYiElRVKC/8QAGgEAAgMBAQAAAAAAAAAAAAAAAAYBBQcDBP/EADERAAAEAwMKBQUAAAAAAAAAAAABAgMEBRESIZETFBUWUVRWkpPSBjIzZoExQVNk0f/aAAwDAQACEQMRAD8AoRouTPo5m9mKnNJ0yS7nrcOydi8VLWAJbYpQSV88X7x0zV9nxZcnc6RwCcuVwr/KACRtNqRgw4L+0RtEhtQzadMG6hwwfoTOegOJLoiYkYGyMB2MwemOO0W39wNF7k62ofTF8Mxp4okbpftN6wXGX++CNHU4ojWRKOlFl8VFeK23oNotqsrcmbj3A7/JxFoz3kkLQ6vReFD+MWWqNDUPx+r8mlHDpk0cSX22fkjd5+xKwhTclIOH+lxjUbqQuXIfCdLmIbIohK3siQENGhxH4XkjB89Q/wBo6lW10QxrDVt/TlFOXFGzUUkpSpaxu7n4lpC20v5eySk+qY8UzWapfHktRWci5W15fTreLCUm4U0lxtG7lM5as5EiNytovJauqHXlazfWk76p/CDK1m+tJ31T+EGYbK9KPPtHlgzDZXpR59o8sZRRjZCYrG1VnXuTkhAZWs31pO+qfwjKas2cJIUmuk4KBvBBSCCP+IxmGyvSjz7R5YMw2V6UefaPLBRj9TFYKzo7j1k5IQI9FS6/MWqGrGpdJSXCpLhs8nYDOTPlzFAgJSQQjliTG2aqVzLhUn9P6T4Nty4Sw+PGJhlbPFt8OP8AlHpHglrOp2HbwwcEtZ1Ow7eGHHWmIP6y06/P9GZaswnEkr6jnYPNMuq9ooSifOqdSUykWwaJYuRKwiQlqSQlSAnDNv5qixVQoGu9DViomnBUN4HTdDsuVzQrZz1uMVygj0Rdf6CHpwS1nU7Dt4YOCWs6nYdvDHJ/xJEPsvM6PUjKINFpJXlUqbR2h/DsEw+y8ufyp1KFpUaFuu2VU+x0QIs0V90IjprgzRX3QiOmuJeCWs6nYdvDBwS1nU7Dt4YW6vbYrlQGazKPbvXihFmivuhEdNcGaK+6ER01xLwS1nU7Dt4YOCWs6nYdvDBV7bFcqAWZR7d68UK1lep3uIrrIgyvU73EV1kQqXqEIeukIQAkTZgAAuAuMa1w5RW5w3uyMVB/TI5goiPWOLvL8THYG/lep3uIrrIgyvU73EV1kQoLhyguHKDOW92RioToGYcRxfSY7A38r1O9xFdZEGV6ne4iusiFBcOUFw5QZy3uyMVA0DMOI4vpMdgb+V6ne4iusiDK9TvcRXWRCguHKNlkhC3rVC0ApM2WCCLwbzBnDe7IxUIVI5glJnrHF3FX0mOwf//Z" alt="" />
        <div className='text-[22px]'><FaQrcode /></div>
        <div className='text-[22px]'><FaExpand /></div>
        <div className="relative inline-block"><FaRegBell  className="text-[22px]  animate-wiggle"  /> <div className="absolute top-[-5px] right-[-4px] w-4 h-4 bg-red-500 text-white text-xs flex items-center justify-center rounded-full -mr-1 -mt-1">3</div></div>
        <div className='flex gap-3'>
          <div className='p-[3px] bg-[#5F6471] rounded-full'> <img className='w-[32px] h-[32px] rounded-full' src="https://skote-v-dark.react.themesbrand.com/static/media/avatar-1.3921191a8acf79d3e907.jpg" alt="" /></div>
         
          <div className='flex items-center gap-2'> <div>admin</div> <IoChevronDownOutline className='flex justify-center items-center' /> </div>
          
        </div>
        <div className='text-[25px] animate-rotate'><IoSettingsOutline /></div>
      </div>
    
    </header>
  )
}

export default Header