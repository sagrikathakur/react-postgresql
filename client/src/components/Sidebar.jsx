import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { assets, AiToolsData } from '../assets/assets'
import { Menu, X, House, LayoutDashboard, MessageSquare, ChevronRight, Eraser, Hash, Image, Scissors, SquarePen } from 'lucide-react'
import { UserButton, useUser } from '@clerk/clerk-react'

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const navigate = useNavigate()
  const location = useLocation()
  const { user } = useUser()

  const menuItems = [
    { title: 'Home', path: '/', Icon: House },
    { title: 'Dashboard', path: '/ai', Icon: LayoutDashboard },
    ...AiToolsData.map(tool => ({
      title: tool.title,
      path: tool.path,
      Icon: tool.Icon
    })),
    { title: 'Community', path: '/ai/community', Icon: MessageSquare }
  ]

  return (
    <>
      {/* Sidebar for Desktop */}
      <aside className={`${sidebarOpen ? 'w-72' : 'w-20'} hidden md:flex flex-col bg-white border-r border-slate-200 transition-all duration-300 ease-in-out relative z-30`}>
        <div className='p-6 flex items-center justify-between'>
          <img
            src={assets.logo}
            alt="logo"
            className={`cursor-pointer transition-all ${sidebarOpen ? 'w-32' : 'w-0 opacity-0'}`}
            onClick={() => navigate("/")}
          />
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className='p-2 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-600 transition-colors'
          >
            {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <nav className='flex-1 px-4 py-4 space-y-2 overflow-y-auto'>
          {menuItems.map((item, index) => (
            <div
              key={index}
              onClick={() => navigate(item.path)}
              className={`flex items-center gap-4 px-4 py-3.5 rounded-2xl cursor-pointer transition-all group ${location.pathname === item.path
                  ? 'bg-primary text-white shadow-lg shadow-primary/20'
                  : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
                }`}
            >
              <item.Icon size={22} className={`shrink-0 ${location.pathname === item.path ? 'text-white' : 'group-hover:text-primary'}`} />
              <span className={`font-medium whitespace-nowrap transition-all ${sidebarOpen ? 'opacity-100' : 'opacity-0 w-0'}`}>
                {item.title}
              </span>
              {location.pathname === item.path && sidebarOpen && (
                <ChevronRight size={16} className='ml-auto' />
              )}
            </div>
          ))}
        </nav>

        <div className='p-4 border-t border-slate-100'>
          <div className={`flex items-center gap-3 p-3 rounded-2xl bg-slate-50 ${sidebarOpen ? '' : 'justify-center'}`}>
            <UserButton afterSignOutUrl="/" />
            {sidebarOpen && (
              <div className='flex flex-col overflow-hidden'>
                <span className='text-sm font-bold text-slate-900 truncate'>{user?.fullName}</span>
                <span className='text-xs text-slate-500 truncate'>{user?.primaryEmailAddress?.emailAddress}</span>
              </div>
            )}
          </div>
        </div>
      </aside>

      {/* Mobile Sidebar Overlay */}
      <div
        className={`fixed inset-0 bg-slate-900/40 z-40 transition-opacity md:hidden ${sidebarOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setSidebarOpen(false)}
      />

      {/* Mobile Sidebar */}
      <aside className={`fixed inset-y-0 left-0 w-72 bg-white z-50 transition-transform duration-300 md:hidden ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className='p-6 flex items-center justify-between border-bottom border-slate-100'>
          <img src={assets.logo} alt="logo" className='w-32' onClick={() => navigate("/")} />
          <button onClick={() => setSidebarOpen(false)} className='p-2 text-slate-500'><X size={24} /></button>
        </div>
        <nav className='p-4 space-y-2'>
          {menuItems.map((item, index) => (
            <div
              key={index}
              onClick={() => { navigate(item.path); setSidebarOpen(false); }}
              className={`flex items-center gap-4 px-4 py-3.5 rounded-2xl cursor-pointer ${location.pathname === item.path ? 'bg-primary text-white' : 'text-slate-500'
                }`}
            >
              <item.Icon size={22} />
              <span className='font-medium'>{item.title}</span>
            </div>
          ))}
        </nav>
      </aside>
    </>
  )
}

export default Sidebar