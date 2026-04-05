import React, { useState } from 'react'
import { Hash, Sparkles } from 'lucide-react'

const BlogTitles = () => {

  const blogCategories = [
    'General', 'Technology', 'Business', 'Health', 'Education', 'Entertainment', 'Sports', 'Travel', 'Food'
  ]

  const [selectedCategory, setSelectedCategory] = useState('General')
  const [input, setInput] = useState('')

  const onSubmitHandler = async (e) => {
    e.preventDefault();
  }


  return (
    <div className='h-full overflow-y-scroll p-6 flex items-start flex-wrap gap-4 text-slate-700'>

      {/* column 1 */}

      <form onSubmit={onSubmitHandler}
        className='w-full max-w-lg p-4 bg-white rounded-lg border border-gray-200'>
        <div className='flex items-center gap-3'>
          <Hash className='w-6 text-[#B153EA]' />
          <h1 className='text-xl font-semibold'>Title Configuration</h1>
        </div>
        <p className='mt-6 text-sm font-medium'>Primary Keyword</p>
        <input 
          onChange={(e) => setInput(e.target.value)} 
          value={input}
          type="text" 
          className='w-full p-2 px-3 mt-2 outline-none text-sm rounded-md border border-gray-300' 
          placeholder='e.g. Remote Work, AI, Vegan Recipes' 
          required 
        />

        <p className='mt-4 text-sm font-medium'>Content Category</p>
        <div className='mt-3 flex gap-3 flex-wrap sm:max-w-9/11'>
          {blogCategories.map((item, index) => (
            <span 
              onClick={() => setSelectedCategory(item)}
              className={`text-xs px-4 py-1 border rounded-full cursor-pointer ${
                selectedCategory === item ? 'bg-[#B153EA] text-white' : 'border-gray-300'
              }`} 
              key={index}
            >
              {item}
            </span>
          ))}
        </div>
        <br />
        <button type='submit' className='w-full flex justify-center items-center gap-2 bg-linear-to-r from-[#B153EA] to-[#E549A3] text-white px-4 py-2 mt-6 text-sm rounded-lg cursor-pointer'>
          <Sparkles className='w-5' />
          Generate Titles
        </button>
      </form>


      {/* right column */}

      <div className='w-full max-w-lg p-4 bg-white rounded-lg flex flex-col border border-gray-200 min-h-96 max-h-[600px]'>

        <div className='flex items-center gap-3'>
          <Hash className='w-5 h-5 text-[#B153EA]' />
          <h1 className='text-xl font-semibold'>Suggested Titles</h1>
        </div>

        <div className='flex-1 flex justify-center items-center'>
          <div className='text-sm flex flex-col items-center gap-5 text-gray-400'>
            <Hash className='w-9 h-9' />
            <p>Enter your keyword and let AI suggest catchy titles for you.</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default BlogTitles
