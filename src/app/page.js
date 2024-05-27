import Dashboard from '@/components/Dashboard'
import Header from '@/components/Header'
import SideMenu from '@/components/Sidebar'
import React from 'react'

const Home = () => {
  return (
    <>
    <Header/>
    <div className="flex">
      <SideMenu />
      <div className="mx-auto w-[75rem] mt-20">
        <Dashboard/>
      </div>
    </div>
    
    </>
  )
}

export default Home