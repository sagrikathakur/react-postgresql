import React from 'react'
import { useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets'
import { Sparkles, ArrowRight, PlayCircle } from 'lucide-react'

const Hero = () => {
  const navigate = useNavigate()
  
  return (
    <div 
      className='px-6 sm:px-20 xl:px-32 relative flex flex-col items-center justify-center min-h-screen pt-20 overflow-hidden'
      style={{ 
        backgroundImage: `url(${assets.gradientBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Decorative Blur Elements */}
      <div className='absolute top-1/4 -left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl opacity-60 animate-pulse'></div>
      <div className='absolute bottom-1/4 -right-20 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl opacity-60 animate-pulse delay-1000'></div>

      <div className='text-center max-w-5xl z-10'>
        <div className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 border border-white/80 backdrop-blur-sm text-primary text-sm font-semibold mb-8 shadow-sm hover:bg-white transition-all cursor-default'>
          <Sparkles size={16} className='animate-bounce' />
          <span>New: AI Image Enhancer is live!</span>
        </div>

        <h1 className='text-4xl sm:text-6xl md:text-7xl xl:text-8xl font-black text-slate-900 leading-[1.1] tracking-tight'>
          Create amazing content<br />
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-primary via-indigo-500 to-primary animate-gradient-x'>with AI tools</span>
        </h1>

        <p className='mt-8 max-w-2xl mx-auto text-lg sm:text-xl text-slate-600 leading-relaxed font-medium'>
          Transform your content creation with our suite of premium AI tools. Write articles, generate images, and enhance your workflow in seconds.
        </p>

        <div className='flex flex-col sm:flex-row items-center justify-center gap-6 mt-12'>
          <button
            onClick={() => navigate('/ai')}
            className='group flex items-center gap-3 px-10 py-5 rounded-2xl bg-primary text-white text-lg font-bold hover:bg-indigo-700 hover:shadow-2xl hover:shadow-primary/40 hover:-translate-y-1 transition-all active:scale-95'
          >
            Start creating now
            <ArrowRight size={20} className='group-hover:translate-x-1 transition-transform' />
          </button>
          
          <button className='group flex items-center gap-3 bg-white/80 backdrop-blur-md px-10 py-5 rounded-2xl border border-slate-200 text-slate-800 text-lg font-bold hover:bg-white hover:border-primary/30 hover:shadow-xl hover:-translate-y-1 transition-all active:scale-95'>
            <PlayCircle size={24} className='text-primary group-hover:scale-110 transition-transform' />
            Watch demo
          </button>
        </div>

        <div className='flex flex-col items-center gap-4 mt-16 px-6 py-4 rounded-3xl bg-white/30 backdrop-blur-sm border border-white/50 w-fit mx-auto shadow-sm'>
          <div className='flex items-center gap-4 text-slate-800 font-semibold'>
            <img src={assets.user_group} alt="users" className='h-10 hover:scale-110 transition-transform cursor-pointer' />
            <span className='text-slate-900'>Trusted by <span className='text-primary font-black'>10,000+</span> creators worldwide.</span>
          </div>
        </div>
      </div>

      {/* Floating Icons Background (Optional/Abstract) */}
      <div className='absolute bottom-0 w-full h-32 bg-gradient-to-t from-white to-transparent pointer-events-none'></div>
    </div>
  )
}

export default Hero
