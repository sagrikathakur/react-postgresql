import React, { useEffect, useState } from 'react'
import { dummyCreationData } from '../assets/assets'
import { Sparkles, FileText, Image, ChevronRight, PenTool } from 'lucide-react'
import CreationItem from '../components/CreationItem'

const Dashboard = () => {

  const [creations, setCreations] = useState([])
  const [stats, setStats] = useState({
    total: 0,
    blogTitles: 0,
    articles: 0,
    images: 0
  })

  const getDashboardData = async () => {
    setCreations(dummyCreationData)
    
    const total = dummyCreationData.length
    const blogTitles = dummyCreationData.filter(c => c.type === 'blog-title').length
    const articles = dummyCreationData.filter(c => c.type === 'article').length
    const images = dummyCreationData.filter(c => c.type === 'image').length
    
    setStats({ total, blogTitles, articles, images })
  }

  useEffect(() => {
    getDashboardData()
  }, [])

  return (
    <div className='min-h-full bg-[#FBFCFE] p-6 lg:p-10'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10'>
        {/* Total Creations Card */}
        <div className='bg-white p-6 rounded-2xl border border-gray-100 flex items-center justify-between shadow-sm hover:shadow-md transition-shadow'>
          <div>
            <p className='text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1'>Total Creations</p>
            <h2 className='text-2xl font-bold text-gray-800'>{stats.total}</h2>
          </div>
          <div className='w-12 h-12 rounded-xl flex items-center justify-center text-white bg-gradient-to-br from-[#3588F2] to-[#0BB0D7]'>
            <Sparkles size={24} />
          </div>
        </div>

        {/* Blog Titles Card */}
        <div className='bg-white p-6 rounded-2xl border border-gray-100 flex items-center justify-between shadow-sm hover:shadow-md transition-shadow'>
          <div>
            <p className='text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1'>Blog Titles</p>
            <h2 className='text-2xl font-bold text-gray-800'>{stats.blogTitles}</h2>
          </div>
          <div className='w-12 h-12 rounded-xl flex items-center justify-center text-white bg-gradient-to-br from-[#B153EA] to-[#E549A3]'>
            <PenTool size={24} />
          </div>
        </div>

        {/* Articles Card */}
        <div className='bg-white p-6 rounded-2xl border border-gray-100 flex items-center justify-between shadow-sm hover:shadow-md transition-shadow'>
          <div>
            <p className='text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1'>Articles</p>
            <h2 className='text-2xl font-bold text-gray-800'>{stats.articles}</h2>
          </div>
          <div className='w-12 h-12 rounded-xl flex items-center justify-center text-white bg-gradient-to-br from-[#20C363] to-[#11B97E]'>
            <FileText size={24} />
          </div>
        </div>

        {/* Images Card */}
        <div className='bg-white p-6 rounded-2xl border border-gray-100 flex items-center justify-between shadow-sm hover:shadow-md transition-shadow'>
          <div>
            <p className='text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1'>Images</p>
            <h2 className='text-2xl font-bold text-gray-800'>{stats.images}</h2>
          </div>
          <div className='w-12 h-12 rounded-xl flex items-center justify-center text-white bg-gradient-to-br from-[#F76C1C] to-[#F04A3C]'>
            <Image size={24} />
          </div>
        </div>
      </div>

      <div className='bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden'>
        <div className='px-8 py-6 border-b border-gray-50 flex items-center justify-between'>
          <h3 className='text-lg font-bold text-gray-800'>Recent Creations</h3>
          <button className='flex items-center gap-1 text-sm font-bold text-indigo-600 hover:text-indigo-700 transition-colors uppercase tracking-tight'>
            View All <ChevronRight size={16} strokeWidth={3} />
          </button>
        </div>
        
        <div className='flex flex-col gap-4 p-8 items-start'>
          {creations.map((item) => (
            <CreationItem key={item.id} item={item} />
          ))}
          {creations.length === 0 && (
            <div className='w-full py-20 flex flex-col items-center justify-center text-gray-400'>
              <Sparkles size={48} className='mb-4 opacity-20' />
              <p className='text-lg font-medium'>No creations found yet</p>
              <p className='text-sm mt-1'>Start your creative journey today!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Dashboard