import React, {useState} from 'react'
import { data } from '../data/data.js'

const Food = () => {
    // console.log(data)

    const [foods, setFoods] = useState(data)

    // filter by type burger/pizza/etc.
    const filterType = (category) => {
        setFoods(
            data.filter((item) => {
                return item.category === category;
            })
        )
    }

    // filter by price
    const filterPrice = (price) => {
        setFoods(
            data.filter((item) => {
                return item.price === price;
            })
        )
    }


  return (
    <div className='max-w-[1640px] mx-auto px-4 py-12'>
        <h1 className='text-lightYellow font-bold text-4xl text-center'>
            Top Rated Menu Items
        </h1>

        {/* filter row */}
        <div className='flex flex-col lg:flex-row justify-between mt-4 mb-4'> 

            {/* filter type */}
            <div>
                <p className='font-bold text-lightGray mb-4'>Filter Type</p>
                <div className='flex justify-between flex-wrap'>
                    <button onClick={() => setFoods(data)} type='button' className='text-white border-2 border-lightYellow hover:bg-lightYellow hover:text-black hover:font-semibold rounded-full mx-3 text-lg px-3 py-1'>All</button>
                    <button onClick={() => filterType('burger')} type='button' className='text-white border-2 border-lightYellow hover:bg-lightYellow hover:text-black hover:font-semibold rounded-full mx-3 text-lg px-3 py-1'>Burgers</button>
                    <button onClick={() => filterType('pizza')} type='button' className='text-white border-2 border-lightYellow hover:bg-lightYellow hover:text-black hover:font-semibold rounded-full mx-3 text-lg px-3 py-1'>Pizza</button>
                    <button onClick={() => filterType('salad')} type='button' className='text-white border-2 border-lightYellow hover:bg-lightYellow hover:text-black hover:font-semibold rounded-full mx-3 text-lg px-3 py-1'>Salads</button>
                    <button onClick={() => filterType('chicken')} type='button' className='text-white border-2 border-lightYellow hover:bg-lightYellow hover:text-black hover:font-semibold rounded-full mx-3 text-lg px-3 py-1'>Chicken</button>
                    
                </div>
            </div>
            {/* filter price */}
            <div>
            <p className='font-bold text-lightGray mb-4'>Filter Price</p>
                <div className='flex justify-between max-w-[390px] w-full'>
                    <button onClick={() => filterPrice('$')} type='button' className='text-white border-2 border-lightYellow hover:bg-lightYellow hover:text-black hover:font-semibold rounded-full mx-3 text-lg px-3 py-1'>$</button>
                    <button onClick={() => filterPrice('$$')} type='button' className='text-white border-2 border-lightYellow hover:bg-lightYellow hover:text-black hover:font-semibold  rounded-full mx-3 text-lg px-3 py-1'>$$</button>
                    <button onClick={() => filterPrice('$$$')} type='button' className='text-white border-2 border-lightYellow hover:bg-lightYellow hover:text-black hover:font-semibold  rounded-full mx-3 text-lg px-3 py-1'>$$$</button>
                    <button onClick={() => filterPrice('$$$$')} type='button' className='text-white border-2 border-lightYellow hover:bg-lightYellow hover:text-black hover:font-semibold rounded-full mx-3 text-lg px-3 py-1'>$$$$</button>
                </div>
            </div>
        </div>

        {/* Display Food Images */}
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-10 pt-4'>
            {foods.map((item, index) => (
                <div key={index} className='border shadow-lg rounded-lg bg-bgGray/50 hover:bg-bgGray text-white hover:text-black hover:scale-105 duration-300 ease-in-out'>
                    <img src={item.image} alt={item.name} className='w-full h-[200px] object-cover rounded-t-lg' />
                    <div className='flex justify-between px-2 py-4'>
                        <p className='font-bold'>
                            {item.name}
                        </p>
                        <p>
                            <span className='bg-lightYellow rounded-full text-black px-4 py-1 '>{item.price}</span> 
                        </p>
                    </div>
                </div>
            ))}
        </div>

    </div>
  )
}

export default Food
