import React from 'react'
import { assets, plansData } from '../assets/assets'
import { useUser, useClerk } from '@clerk/clerk-react'

const Plan = () => {
  const { user } = useUser()
  const { openSignIn } = useClerk()

  const handlePlanClick = (plan) => {
    if (!user) {
      openSignIn()
      return
    }
    console.log(`User ${user.id} selected ${plan.id} plan`)
    
    if (plan.id === 'Free') {
        alert('You are already on the free plan!')
    } else {
        alert('Payment integration coming soon! You selected: ' + plan.id)
    }
  }

  return (
    <div className='max-w-5xl mx-auto px-6 py-24' id="plans">
      <div className='text-center mb-20'>
        <h2 className='text-slate-900 text-4xl sm:text-5xl font-bold mb-6 tracking-tight'>
          Simple, <span className="text-primary">transparent</span> pricing
        </h2>
        <p className='text-slate-500 max-w-lg mx-auto text-lg leading-relaxed'>
          Unlock the full power of AI. Choose the plan that works best for your creative journey.
        </p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto'>
        {plansData.map((item, index) => (
          <div 
            key={index} 
            className={`flex flex-col bg-white rounded-[2.5rem] p-10 transition-all duration-500 relative border ${
              item.id === 'Premium' 
                ? 'border-primary/20 shadow-[0_20px_50px_rgba(80,68,229,0.1)] ring-1 ring-primary/5' 
                : 'border-slate-100 shadow-sm hover:shadow-xl hover:border-slate-200'
            }`}
          >
            {item.id === 'Premium' && (
              <div className='absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-[0.1em] shadow-lg shadow-primary/30'>
                Most Popular
              </div>
            )}
            
            <div className='mb-8'>
              <h3 className='text-2xl font-bold text-slate-900 mb-2'>{item.id}</h3>
              <p className='text-slate-500 text-sm h-10'>{item.desc}</p>
            </div>
            
            <div className='flex items-baseline mb-10'>
              <span className='text-4xl font-bold text-slate-900'>${item.price}</span>
              <span className='text-slate-400 font-medium ml-2'>/ month</span>
            </div>

            <div className='w-full h-px bg-slate-100 mb-8' />

            <ul className='flex-grow space-y-5 mb-12'>
              <li className='flex items-center text-slate-600 text-[15px]'>
                <div className='w-5 h-5 rounded-full bg-green-50 flex items-center justify-center mr-4'>
                  <svg className='w-3 h-3 text-green-500' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='3' d='M5 13l4 4L19 7' />
                  </svg>
                </div>
                <strong>{item.credits}</strong>&nbsp;AI Credits
              </li>
              <li className='flex items-center text-slate-600 text-[15px]'>
                <div className='w-5 h-5 rounded-full bg-green-50 flex items-center justify-center mr-4'>
                  <svg className='w-3 h-3 text-green-500' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='3' d='M5 13l4 4L19 7' />
                  </svg>
                </div>
                Priority AI Processing
              </li>
              <li className='flex items-center text-slate-600 text-[15px]'>
                <div className='w-5 h-5 rounded-full bg-green-50 flex items-center justify-center mr-4'>
                  <svg className='w-3 h-3 text-green-500' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='3' d='M5 13l4 4L19 7' />
                  </svg>
                </div>
                Access to all AI models
              </li>
            </ul>

            <button 
              onClick={() => handlePlanClick(item)}
              className={`group mx-auto min-w-[220px] py-4 px-10 rounded-2xl font-bold text-[16px] transition-all duration-300 transform active:scale-[0.97] ${
                item.id === 'Premium' 
                  ? 'bg-slate-900 text-white hover:bg-black shadow-xl shadow-slate-200' 
                  : 'bg-slate-50 text-slate-900 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <div className="flex items-center justify-center gap-2">
                {user && item.id === 'Free' ? 'Current Plan' : (item.id === 'Free' ? 'Get Started for Free' : 'Upgrade to Premium')}
                <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin='round' strokeWidth='2.5' d='M13 7l5 5m0 0l-5 5m5-5H6' />
                </svg>
              </div>
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Plan

