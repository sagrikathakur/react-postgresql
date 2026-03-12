import React, { useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets'
import { Menu } from 'lucide-react'
import { useUser, SignIn } from '@clerk/clerk-react'
import Sidebar from '../components/Sidebar'

const Layout = () => {
  const navigate = useNavigate()
  const { user, isLoaded } = useUser()
  const [sidebarOpen, setSidebarOpen] = useState(true)

  if (!isLoaded) return null;

  if (!user) {
    return (
      <div className='flex items-center justify-center h-screen bg-slate-50'>
        <SignIn />
      </div>
    )
  }

  return (
    <div className='flex h-screen bg-slate-50 overflow-hidden'>
      {/* Reusable Sidebar Component */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Main Content */}
      <main className='flex-1 flex flex-col h-screen overflow-hidden'>
        <header className='h-20 bg-white border-b border-slate-200 flex items-center justify-between px-6 shrink-0 md:hidden'>
          <img src={assets.logo} alt="logo" className='w-28' onClick={() => navigate("/")} />
          <button onClick={() => setSidebarOpen(true)} className='p-2 text-slate-600 bg-slate-50 rounded-xl'><Menu size={24} /></button>
        </header>

        <div className='flex-1 overflow-y-auto p-6 md:p-10'>
          <div className='max-w-6xl mx-auto'>
            <Outlet />
          </div>
        </div>
      </main>
    </div>
  )
}

export default Layout
