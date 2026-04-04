import React from 'react'
import { dummyPublishedCreationData } from '../assets/assets'
import CreationItem from '../components/CreationItem'

const Community = () => {
  return (
    <div className='min-h-full bg-[#FBFCFE] p-6 lg:p-10'>
      <div className='mb-10'>
        <h2 className='text-3xl font-bold text-gray-800'>Community Showcase</h2>
        <p className='text-gray-500 mt-2 text-lg'>Experience the limits of AI through our community's best creations.</p>
      </div>

      <div className='flex flex-col gap-6'>
        {dummyPublishedCreationData.map((item) => (
          <CreationItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}

export default Community