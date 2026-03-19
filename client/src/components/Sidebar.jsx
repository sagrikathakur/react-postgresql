import { NavLink } from 'react-router-dom'
import {
  LayoutDashboard,
  PenTool,
  FileText,
  FileSearch,
  ImagePlus,
  Eraser,
  Layers,
  Users,
  ChevronLeft
} from 'lucide-react'

const Sidebar = ({ closeSidebar }) => {
  const menuItems = [
    { name: 'Dashboard', path: '/ai', icon: <LayoutDashboard size={20} /> },
    { name: 'Blog Titles', path: '/ai/blog-titles', icon: <PenTool size={20} /> },
    { name: 'Write Article', path: '/ai/write-article', icon: <FileText size={20} /> },
    { name: 'Review Resume', path: '/ai/review-resume', icon: <FileSearch size={20} /> },
    { name: 'Generate Images', path: '/ai/generate-images', icon: <ImagePlus size={20} /> },
    { name: 'Remove Object', path: '/ai/remove-object', icon: <Eraser size={20} /> },
    { name: 'Remove Background', path: '/ai/remove-background', icon: <Layers size={20} /> },
    { name: 'Community', path: '/ai/community', icon: <Users size={20} /> },
  ]

  return (
    <div className='flex flex-col h-full bg-white border-r border-gray-100 shadow-sm'>
      {/* Mobile Close Button */}
      <div className='flex items-center justify-between p-4 md:hidden'>
        <span className='px-2 text-sm font-semibold text-gray-400 uppercase tracking-widest'>Menu</span>
        <button
          onClick={closeSidebar}
          className='p-2 text-gray-500 rounded-lg hover:bg-gray-100 transition-colors'
        >
          <ChevronLeft size={20} />
        </button>
      </div>

      <div className='flex-1 py-6 px-4 space-y-2 overflow-y-auto'>
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === '/ai'}
            onClick={() => {
              if (window.innerWidth < 768) closeSidebar()
            }}
            className={({ isActive }) => `
              flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group
              ${isActive
                ? 'bg-[#5044E5] text-white shadow-lg shadow-indigo-100 scale-[1.02]'
                : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'}
            `}
          >
            <span className={({ isActive }) => `
              transition-colors duration-200
              ${isActive ? 'text-white' : 'text-gray-400 group-hover:text-indigo-500'}
            `}>
              {item.icon}
            </span>
            <span className='font-medium'>{item.name}</span>
          </NavLink>
        ))}
      </div>

      {/* Sidebar Footer */}

    </div>
  )
}

export default Sidebar