import React, { useState } from 'react'
import { FileText, Upload } from 'lucide-react'

const ReviewResume = () => {

  const [file, setFile] = useState(null)
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState(null)


  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (!file) return;
    setLoading(true);
    setResult(null);

    // Simulate AI analysis delay
    setTimeout(() => {
      setResult({
        score: '85/100',
        feedback: 'Overall strong profile. Recommendations: Use more quantifiable achievements and optimize for ATS keywords related to full-stack development.'
      });
      setLoading(false);
    }, 2000);
  }


  return (
    <div className='h-full overflow-y-scroll p-6 flex items-start flex-wrap gap-4 text-slate-700'>

      {/* column 1 */}

      <form onSubmit={onSubmitHandler}


        className='w-full max-w-lg p-4 bg-white rounded-lg border border-gray-200'>
        <div className='flex items-center gap-3'>
          <FileText className='w-6 text-[#12B7AC]' />
          <h1 className='text-xl font-semibold'>Review Resume</h1>
        </div>
        <p className='mt-6 text-sm font-medium'>Upload PDF Resume</p>
        
        <label className='w-full cursor-pointer flex flex-col items-center justify-center p-8 mt-2 border border-gray-300 border-dashed rounded-md hover:bg-gray-50 transition-colors'>
           <input type="file" className='hidden' accept=".pdf" onChange={(e) => setFile(e.target.files[0])} />
           <Upload className='w-8 h-8 text-gray-400' />
           <p className='mt-2 text-xs text-gray-500 font-medium'>{file ? file.name : 'Pick your resume file'}</p>
        </label>

        <br />
        <button type='submit' className='w-full flex justify-center items-center gap-2 bg-linear-to-r from-[#12B7AC] to-[#08B6CE] text-white px-4 py-2 mt-6 text-sm rounded-lg cursor-pointer'>

          <FileText className='w-5' />
          {loading ? 'Analyzing...' : 'Analyze Resume'}
        </button>
      </form>



      {/* right column */}

      <div className='w-full max-w-lg p-4 bg-white rounded-lg flex flex-col border border-gray-200 min-h-96 max-h-[600px]'>

        <div className='flex items-center gap-3'>
          <FileText className='w-5 h-5 text-[#12B7AC]' />
          <h1 className='text-xl font-semibold'>Evaluation Result</h1>

        </div>



        <div className='flex-1 flex justify-center items-center'>

          {loading ? (
             <p className='animate-pulse text-sm font-medium text-teal-600'>Processing your document...</p>
          ) : result ? (
             <div className='w-full flex flex-col gap-4'>
                <div className='p-4 bg-teal-50 rounded-lg'>
                   <p className='text-xs font-bold text-teal-600 uppercase tracking-widest'>Resume Score</p>
                   <p className='text-3xl font-black text-teal-700'>{result.score}</p>
                </div>
                <div>
                   <p className='text-xs font-bold text-slate-400 uppercase tracking-widest'>Detailed Feedback</p>
                   <p className='mt-1 text-sm leading-relaxed text-slate-600'>{result.feedback}</p>
                </div>
             </div>
          ) : (
            <div className='text-sm flex flex-col items-center gap-5 text-gray-400'>
              <FileText className='w-9 h-9' />
              <p>Upload your resume and get instant AI feedback on how to improve.</p>
            </div>
          )}
        </div>
      </div>







    </div>

  )
}

export default ReviewResume