import React, { useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets'
import { Menu, X } from 'lucide-react'


import Sidebar from '../components/Sidebar'

const Layout = () => {
  const navigate = useNavigate()
  const [showSidebar, setShowSidebar] = useState(false)

  return (
    <div className='flex min-h-screen bg-[#FBFCFE]'>
      {/* Sidebar - Desktop and Mobile Overlay */}
      <div 
        className={`fixed inset-0 z-40 transition-opacity bg-black/20 md:hidden ${showSidebar ? 'opacity-100 visible' : 'opacity-0 invisible'}`} 
        onClick={() => setShowSidebar(false)}
      ></div>
      
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-100 transition-transform md:relative md:translate-x-0 ${showSidebar ? 'translate-x-0' : '-translate-x-full'}`}>
        <Sidebar closeSidebar={() => setShowSidebar(false)} />
      </div>

      <div className='flex-1 flex flex-col h-screen overflow-hidden'>
        {/* Top Navbar */}
        <nav className='flex items-center justify-between px-6 py-4 bg-white border-b border-gray-100 shrink-0'>
          <div className='flex items-center gap-4'>
            <button onClick={() => setShowSidebar(!showSidebar)} className='p-2 -ml-2 text-gray-500 rounded-lg md:hidden hover:bg-gray-100'>
              {showSidebar ? <X size={20} /> : <Menu size={20} />}
            </button>
            <img 
              src={assets.logo} 
              alt="Quick AI Logo" 
              className='h-8 cursor-pointer' 
              onClick={() => navigate('/')} 
            />
          </div>
          
          <div className='flex items-center gap-3'>
            <div className='hidden p-2 text-sm font-medium text-gray-600 md:block'>
              Premium Plan
            </div>
            <div className='w-10 h-10 overflow-hidden border-2 border-white rounded-full shadow-sm'>
              <img src={assets.profile_img_1} alt="User" className='object-cover w-full h-full' />
            </div>
          </div>
        </nav>

        {/* Dynamic Content Area */}
        <main className='flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8'>
          <div className='max-w-6xl mx-auto'>
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  )
}

export default Layout