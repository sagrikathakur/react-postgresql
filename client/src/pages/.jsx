import React from 'react'
import { Sparkles } from 'lucide-react'

const WriteArticle = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-[60vh] text-center'>
      <div className='w-20 h-20 rounded-3xl bg-primary/10 flex items-center justify-center text-primary mb-6 animate-pulse'>
        <Sparkles size={40} />
      </div>
      <h1 className='text-4xl font-black text-slate-900 mb-4'>WriteArticle</h1>
      <p className='text-slate-500 max-w-md mx-auto text-lg'>
        We are building something amazing here. This tool will be available very soon!
      </p>
      
      <div className='mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-2xl text-xs font-bold text-slate-400'>
        <div className='p-4 rounded-2xl bg-slate-50 border border-slate-100 uppercase tracking-widest'>AI Powered</div>
        <div className='p-4 rounded-2xl bg-slate-50 border border-slate-100 uppercase tracking-widest'>Fast</div>
        <div className='p-4 rounded-2xl bg-slate-50 border border-slate-100 uppercase tracking-widest'>Efficient</div>
        <div className='p-4 rounded-2xl bg-slate-50 border border-slate-100 uppercase tracking-widest'>Cloud Based</div>
      </div>
    </div>
  )
}

export default WriteArticle
