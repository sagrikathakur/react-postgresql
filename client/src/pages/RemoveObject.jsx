import React, { useState } from 'react'
import { Scissors, Upload } from 'lucide-react'

const RemoveObject = () => {

  const [file, setFile] = useState(null)


  const onSubmitHandler = async (e) => {
    e.preventDefault();
  }


  return (
    <div className='h-full overflow-y-scroll p-6 flex items-start flex-wrap gap-4 text-slate-700'>

      {/* column 1 */}

      <form onSubmit={onSubmitHandler}


        className='w-full max-w-lg p-4 bg-white rounded-lg border border-gray-200'>
        <div className='flex items-center gap-3'>
          <Scissors className='w-6 text-[#5C6AF1]' />
          <h1 className='text-xl font-semibold'>Object Remover</h1>
        </div>
        <p className='mt-6 text-sm font-medium'>Upload Image</p>
        
        <label className='w-full cursor-pointer flex flex-col items-center justify-center p-8 mt-2 border border-gray-300 border-dashed rounded-md hover:bg-gray-50 transition-colors'>
           <input type="file" className='hidden' onChange={(e) => setFile(e.target.files[0])} />
           <Upload className='w-8 h-8 text-gray-400' />
           <p className='mt-2 text-xs text-gray-500 font-medium'>{file ? file.name : 'Select image to remove objects'}</p>
        </label>

        <br />
        <button type='submit' className='w-full flex justify-center items-center gap-2 bg-linear-to-r from-[#5C6AF1] to-[#427DF5] text-white px-4 py-2 mt-6 text-sm rounded-lg cursor-pointer'>

          <Scissors className='w-5' />
          Remove Object
        </button>
      </form>



      {/* right column */}

      <div className='w-full max-w-lg p-4 bg-white rounded-lg flex flex-col border border-gray-200 min-h-96 max-h-[600px]'>

        <div className='flex items-center gap-3'>
          <Scissors className='w-5 h-5 text-[#5C6AF1]' />
          <h1 className='text-xl font-semibold'>Output Result</h1>

        </div>



        <div className='flex-1 flex justify-center items-center'>

          <div className='text-sm flex flex-col items-center gap-5 text-gray-400'>
            <Scissors className='w-9 h-9' />
            <p>Upload your image and specify objects to erase perfectly.</p>

          </div>
        </div>
      </div>






    </div>

  )
}

export default RemoveObject