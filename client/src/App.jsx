import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './pages/Layout'
import Home from './pages/Home'
import BlogTitles from './pages/BlogTitles'
import Dashboard from './pages/Dashboard'
import WriteArticle from './pages/WriteArticle'
import ReviewResume from './pages/ReviewResume'
import GenerateImages from './pages/GenerateImages'
import RemoveObject from './pages/RemoveObject'
import Community from './pages/Community'
import RemoveBackground from './pages/RemoveBackground'

const App = () => {
  return (
    <div className='min-h-screen bg-white'>
      <Routes>
        <Route path='/' element={<Home />} />
        
        <Route path='/ai' element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path='blog-titles' element={<BlogTitles />} />
          <Route path='write-article' element={<WriteArticle />} />
          <Route path='review-resume' element={<ReviewResume />} />
          <Route path='generate-images' element={<GenerateImages />} />
          <Route path='remove-object' element={<RemoveObject />} />
          <Route path='remove-background' element={<RemoveBackground />} />
          <Route path='community' element={<Community />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
