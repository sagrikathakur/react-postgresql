import React, { useState } from 'react'
import { dummyPublishedCreationData } from '../assets/assets'
import { Search, Sparkles, Download, Heart } from 'lucide-react'

const Community = () => {

  const [searchQuery, setSearchQuery] = useState('')

  // Filter ONLY image types
  const imagesOnly = dummyPublishedCreationData.filter(item => 
    item.type === 'image' && 
    item.prompt.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className='min-h-full bg-[#FBFCFE] p-6 lg:p-10 text-slate-700'>
      
      {/* Header Section */}
      <div className='max-w-6xl mx-auto mb-16 h-full'>
        <div className='flex flex-col md:flex-row md:items-end justify-between gap-8'>
          <div className='max-w-3xl'>
            <div className='flex items-center gap-2 mb-3'>
              <div className='p-1.5 bg-indigo-50 rounded-full'>
                 <Sparkles className='w-4 h-4 text-indigo-500' />
              </div>
              <span className='text-[11px] font-black text-indigo-600 uppercase tracking-[0.2em]'>AI Image Gallery</span>
            </div>
            <h2 className='text-5xl font-black text-gray-900 tracking-tighter leading-tight'>Community Masterpieces</h2>
            <p className='text-gray-500 mt-5 text-lg font-medium leading-relaxed'>Browse the most stunning AI-generated art created by our talented community. Every pixel is a result of creative prompting.</p>
          </div>
          
          <div className='relative w-full md:w-96'>
            <Search className='absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400' />
            <input 
              type="text"
              placeholder="Search art by prompt..."
              className='w-full pl-12 pr-4 py-4 bg-white border border-gray-100 rounded-3xl shadow-md outline-none focus:border-indigo-400 focus:shadow-indigo-50 transition-all text-sm font-medium'
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Modern Image Grid */}
      <div className='max-w-7xl mx-auto'>
        {imagesOnly.length > 0 ? (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-20'>
            {imagesOnly.map((item) => (
              <div key={item.id} className='group relative aspect-square bg-slate-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-500'>
                 <img 
                    src={item.content} 
                    alt={item.prompt} 
                    className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-700'
                  />
                  
                  {/* Hover Overlay */}
                  <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-between'>
                    <div className='flex justify-end gap-2'>
                        <button className='p-2.5 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white/20 transition-colors'>
                            <Heart size={18} fill={item.likes.length > 0 ? "white" : "none"} />
                        </button>
                    </div>
                    
                    <div>
                        <p className='text-white text-sm font-bold line-clamp-2 leading-snug mb-3'>{item.prompt}</p>
                        <div className='flex items-center justify-between mt-auto'>
                            <span className='text-[10px] font-black text-indigo-400 uppercase tracking-widest bg-indigo-500/10 px-2 py-1 rounded-md backdrop-blur-sm'>Prompt Used</span>
                            <button className='p-2 bg-indigo-500 rounded-full text-white hover:bg-indigo-400 transition-colors shadow-lg'>
                                <Download size={16} />
                            </button>
                        </div>
                    </div>
                  </div>
              </div>
            ))}
          </div>
        ) : (
          <div className='py-32 flex flex-col items-center justify-center text-center opacity-40'>
            <ImageIcon className='w-16 h-16 text-gray-300 mb-6' />
            <p className='text-2xl font-bold text-gray-500 tracking-tight'>No masterpieces match your search</p>
            <p className='text-sm mt-1 max-w-xs'>Try different keywords or browse our full art collection.</p>
          </div>
        )}
      </div>

    </div>
  )
}

export default Community