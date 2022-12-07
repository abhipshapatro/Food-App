import React from 'react'

const Hero = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4'>
      <div className='relative max-h-[500px]'>
        {/* overlay */}
        <div className='absolute bg-black/30 w-full h-full text-gray-200 flex flex-col justify-center'>
            <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>
                The <span className='text-lightYellow'>Best</span>
            </h1>
            <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>
                <span className='text-lightYellow'>Foods</span> Delivered
            </h1>
        </div>
        <img className='w-full max-h-[500px] object-cover' src="https://images.pexels.com/photos/6493572/pexels-photo-6493572.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="hero image" />
      </div>
    </div>
  )
}

export default Hero
