import React from 'react'

const HeadlineCards = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
      {/* card 1*/}
      <div className='relative rounded-xl hover:scale-105 duration-300 ease-in-out'>
        {/* overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
            <p className='font-bold text-xl px-2 pt-4'>
                Sun's Out, BOGO's Out
            </p>
            <p className='px-2'>
                Through 8/26
            </p>
            <button className='absolute px-4 mx-2  text-black border-2 border-lightYellow bg-white rounded-full bottom-4'>
                Order Now
            </button>
        </div>
        <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="/" />
      </div>
      {/* card 2*/}
      <div className='relative rounded-xl hover:scale-105 duration-300 ease-in-out'>
        {/* overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
            <p className='font-bold text-xl px-2 pt-4'>
                New Restaurants
            </p>
            <p className='px-2'>
                Added Daily
            </p>
            <button className='absolute px-4 mx-2  text-black border-2 border-lightYellow bg-white rounded-full bottom-4'>
                Order Now
            </button>
        </div>
        <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://images.pexels.com/photos/1310777/pexels-photo-1310777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="/" />
      </div>
      {/* card 3*/}
      <div className='relative rounded-xl hover:scale-105 duration-300 ease-in-out'>
        {/* overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
            <p className='font-bold text-xl px-2 pt-4'>
                We Deliver Desserts Too
            </p>
            <p className='px-2'>
                Tasty Treats
            </p>
            <button className='absolute px-4 mx-2  text-black border-2 border-lightYellow bg-white rounded-full bottom-4'>
                Order Now
            </button>
        </div>
        <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://images.pexels.com/photos/3256807/pexels-photo-3256807.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="/" />
      </div>
    </div>
  )
}

export default HeadlineCards
