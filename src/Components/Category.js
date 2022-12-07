import React from 'react'
import { categories } from '../data/data'

const Category = () => {
  return (
    <div className='max-w-[1640px] mx-auto px-4 py-12'>
      <h1 className='text-4xl font-bold text-lightYellow text-center'>Top Rated Menu Items</h1>
      {/* categories */}
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 py-6'>
        {categories.map((item, index)=>(
            <div key={index} className = 'bg-bgGray/95 rounded-lg flex items-center justify-between p-4'>
                <h2 className='font-bold sm:text-xl'>{item.name}</h2>
                <img src={item.image} alt={item.name} className='w-28' />
            </div>
        ))}
      </div>
    </div>
  )
}

export default Category
