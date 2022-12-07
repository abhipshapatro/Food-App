import React from 'react'
import Category from './Components/Category'
import Food from './Components/Food'
import HeadlineCards from './Components/HeadlineCards'
import Hero from './Components/Hero'
import Navbar from './Components/Navbar'

function App() {
  return (
    <div className='p-4 bg-bgBlue font-lora tracking-widest'>
      <Navbar />
      <Hero />
      <HeadlineCards />
      <Food />
      <Category />
    </div>
  )
}

export default App