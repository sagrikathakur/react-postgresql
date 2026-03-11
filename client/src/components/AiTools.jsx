import React from 'react'
import { useNavigate } from 'react-router-dom'
import { AiToolsData } from '../assets/assets'
import { useUser, useClerk } from '@clerk/clerk-react'

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
    <div className='px-4 sm:px-20 xl:px-32 py-16 w-full justify-center'>
      <div className='text-center mb-16'>
        <h2 className='text-3xl sm:text-4xl font-semibold mb-4 text-gray-800 tracking-tight'>
          Explore Our <span className='text-primary'>AI Tools</span>
        </h2>
        <p className='text-gray-600 max-w-2xl mx-auto text-sm sm:text-base'>
          Discover a suite of powerful AI-driven tools designed to enhance your content creation process, from writing articles and generating titles to creating and editing breathtaking images.
        </p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {AiToolsData.map((tool, index) => (
          <div
            key={index}
            onClick={() => handleToolClick(tool.path)}
            className='group bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:-translate-y-1.5 transition-all duration-300 cursor-pointer'
          >
            <div
              className='w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300 relative overflow-hidden'
              style={{ background: `linear-gradient(135deg, ${tool.bg.from}, ${tool.bg.to})` }}
            >
              <tool.Icon className='w-7 h-7 text-white relative z-10' />
              {/* Subtle glassmorphism/gradient reflection effect */}
              <div className='absolute inset-0 bg-white opacity-10 group-hover:opacity-0 transition-opacity duration-300'></div>
            </div>

            <h3 className='text-xl sm:text-2xl font-semibold text-gray-800 mb-3 group-hover:text-primary transition-colors'>
              {tool.title}
            </h3>
            <p className='text-gray-500 text-sm leading-relaxed mb-6'>
              {tool.description}
            </p>

            <div className='flex items-center text-sm font-medium text-primary transition-all duration-300 opacity-80 group-hover:opacity-100'>
              Try it now
              <svg
                className='w-4 h-4 ml-2 group-hover:translate-x-1.5 transition-transform duration-300'
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AiTools