import React from 'react'
import { useNavigate } from 'react-router-dom'
import { AiToolsData } from '../assets/assets'
import { useUser, useClerk } from '@clerk/clerk-react'
import { ArrowRight } from 'lucide-react'

const AiTools = () => {
  const navigate = useNavigate()
  const { user } = useUser()
  const { openSignIn } = useClerk()

  const handleToolClick = (path) => {
    if (user) {
      navigate(path)
    } else {
      openSignIn()
    }
  }

  return (
    <div className='px-6 sm:px-20 xl:px-32 py-24 w-full' id="tools">
      <div className='text-center mb-16'>
        <h2 className='text-3xl sm:text-5xl font-bold mb-4 text-slate-900 tracking-tight'>
          Powerful <span className='text-primary'>AI Suite</span> for Creators
        </h2>
        <p className='text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed'>
          Discover a suite of powerful AI-driven tools designed to enhance your content creation process, from writing articles to generating breathtaking images.
        </p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {AiToolsData.map((tool, index) => (
          <div
            key={index}
            onClick={() => handleToolClick(tool.path)}
            className='group bg-white rounded-[2.5rem] p-10 border border-slate-100 shadow-sm hover:shadow-[0_20px_60px_rgba(0,0,0,0.05)] hover:-translate-y-2 transition-all duration-500 cursor-pointer relative overflow-hidden'
          >
            <div
              className='w-16 h-16 rounded-[1.25rem] flex items-center justify-center mb-8 shadow-inner group-hover:scale-110 transition-transform duration-500 relative overflow-hidden'
              style={{ background: `linear-gradient(135deg, ${tool.bg.from}, ${tool.bg.to})` }}
            >
              <tool.Icon className='w-7 h-7 text-white relative z-10' />
              <div className='absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
            </div>

            <h3 className='text-2xl font-bold text-slate-800 mb-3 group-hover:text-primary transition-colors'>
              {tool.title}
            </h3>
            <p className='text-slate-500 text-[15px] leading-relaxed mb-8'>
              {tool.description}
            </p>

            <div className='flex items-center text-sm font-bold text-slate-900 group-hover:text-primary transition-colors'>
              Try it now
              <ArrowRight size={18} className='ml-2 group-hover:translate-x-2 transition-transform duration-300' />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AiTools
