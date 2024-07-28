import React from 'react'
import Header from './header'
import Footer from './footer'
import { Outlet } from 'react-router-dom'

import Dashboard  from './dashboard';



const Layout = () => {
  return (
    <div className="flex min-h-screen">

      <Dashboard/>
      <div className=" flex-1 flex flex-col">
        <Header />
        <main className="flex-1 bg-[#222736] p-[25px] ml-[250px]">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default Layout