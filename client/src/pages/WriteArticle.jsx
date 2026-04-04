import React, { useState } from 'react'
import { Sparkles, Copy, Download, Trash2, Send, Loader2, FileText } from 'lucide-react'
import Markdown from 'react-markdown'

const WriteArticle = () => {
  const [topic, setTopic] = useState('')
  const [tone, setTone] = useState('Professional')
  const [length, setLength] = useState('Medium')
  const [isGenerating, setIsGenerating] = useState(false)
  const [content, setContent] = useState('')

  const tones = ['Professional', 'Friendly', 'Creative', 'Confident', 'Casual']
  const lengths = ['Short', 'Medium', 'Long']

  const handleGenerate = async () => {
    if (!topic) return
    setIsGenerating(true)
    // Simulate API call
    setTimeout(() => {
      setContent(`## AI and Coding: A Symbiotic Partnership Reshaping the Future\n\nArtificial intelligence (AI) and coding, once distinct disciplines, are now deeply intertwined, forging a powerful symbiotic relationship that's revolutionizing industries and accelerating innovation. Understanding this connection is crucial for anyone seeking to navigate the future of technology.\n\nAt its core, AI is the ability of a machine to mimic intelligent human behavior. This is achieved through algorithms, which are essentially sets of instructions meticulously crafted by programmers – coders. Coding, therefore, is the backbone of AI, providing the language and structure necessary to bring these algorithms to life.\n\n**Coding Fuels AI: Building the Foundation**\n\nAI models don't magically appear. They are built, trained, and deployed using code. Here's how:\n\n*   **Data Preprocessing:** Raw data, the lifeblood of AI, is often messy and unusable in its original form. Coders use programming languages like Python with libraries like Pandas and NumPy to clean, transform, and prepare this data for training.\n*   **Model Development:** Coders utilize programming languages like Python and R, coupled with machine learning libraries like TensorFlow, PyTorch, and scikit-learn, to build and train AI models.\n\n**AI Empowers Coding: Revolutionizing Development**\n\nThe relationship isn't just one-way. AI is also transforming the way coding is done, making developers more efficient and productive.`)
      setIsGenerating(false)
    }, 2000)
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(content)
    // Optional: toast notification
  }

  return (
    <div className='min-h-full bg-slate-50/50 p-6 lg:p-10 flex flex-col lg:flex-row gap-8'>
      {/* Input Section */}
      <div className='w-full lg:w-96 flex flex-col gap-6'>
        <div className='bg-white p-6 rounded-2xl border border-slate-200 shadow-sm'>
          <h2 className='text-xl font-bold text-slate-800 mb-6 flex items-center gap-2'>
            <Sparkles className='text-indigo-600' size={20} />
            Article Parameters
          </h2>

          <div className='flex flex-col gap-5'>
            <div>
              <label className='block text-sm font-medium text-slate-700 mb-2'>
                What is the article about?
              </label>
              <textarea
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                placeholder='e.g., The benefits of AI in modern web development...'
                className='w-full p-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all outline-none text-slate-700 h-32 resize-none'
              />
            </div>

            <div>
              <label className='block text-sm font-medium text-slate-700 mb-2'>
                Content Tone
              </label>
              <div className='grid grid-cols-2 gap-2'>
                {tones.map((t) => (
                  <button
                    key={t}
                    onClick={() => setTone(t)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium border transition-all ${tone === t
                      ? 'bg-indigo-600 text-white border-indigo-600 shadow-md transform scale-[1.02]'
                      : 'bg-white text-slate-600 border-slate-200 hover:border-indigo-300'
                      }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className='block text-sm font-medium text-slate-700 mb-2'>
                Target Length
              </label>
              <div className='flex gap-2 p-1 bg-slate-100 rounded-xl'>
                {lengths.map((l) => (
                  <button
                    key={l}
                    onClick={() => setLength(l)}
                    className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all ${length === l
                      ? 'bg-white text-indigo-600 shadow-sm'
                      : 'text-slate-500 hover:text-slate-700'
                      }`}
                  >
                    {l}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={handleGenerate}
              disabled={isGenerating || !topic}
              className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all ${isGenerating || !topic
                ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                : 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg shadow-indigo-100 hover:-translate-y-0.5'
                }`}
            >
              {isGenerating ? (
                <Loader2 className='animate-spin' size={20} />
              ) : (
                <Send size={20} />
              )}
              {isGenerating ? 'Drafting...' : 'Generate Article'}
            </button>
          </div>
        </div>
      </div>

      {/* Output Section */}
      <div className='flex-1 flex flex-col gap-6 min-h-[600px]'>
        <div className='bg-white rounded-2xl border border-slate-200 shadow-sm flex flex-col h-full overflow-hidden'>
          <div className='px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/30'>
            <h3 className='font-bold text-slate-800'>Generated Content</h3>
            <div className='flex items-center gap-2'>
              {content && (
                <>
                  <button
                    onClick={handleCopy}
                    className='p-2 text-slate-500 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors'
                    title='Copy to Clipboard'
                  >
                    <Copy size={18} />
                  </button>
                  <button
                    onClick={() => setContent('')}
                    className='p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors'
                    title='Clear Content'
                  >
                    <Trash2 size={18} />
                  </button>
                </>
              )}
            </div>
          </div>

          <div className='flex-1 p-8 overflow-y-auto'>
            {content ? (
              <div className='reset-tw bg-white selection:bg-indigo-100'>
                <div className='reset-tw'>
                  <Markdown>{content}</Markdown>
                </div>
              </div>
            ) : (
              <div className='h-full flex flex-col items-center justify-center text-center p-10'>
                <div className='w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mb-4 border border-slate-100'>
                  <FileText className='text-slate-300' size={40} />
                </div>
                <h4 className='text-slate-800 font-bold mb-2'>Your masterpiece starts here</h4>
                <p className='text-slate-400 text-sm max-w-xs'>
                  Select your topic and tone on the left to generate a professional AI-written article.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default WriteArticle