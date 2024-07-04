import React from 'react'
import execlusive from './Components/Pages/assets/exclusive_image.png'

const Offers = () => {
  return (
    <div className='offers mt-30 flex justify-between offers w-[90vw] mx-auto mt-20'>
      <div className=' self-start p-20 flex flex-col'>
        <h1 className='font-bold text-5xl'>Execlusive</h1>
        <p  className='font-bold text-5xl'>Offers For you</p>
        <p className='text-xl mt-4'>Only On Best Sellers Products</p>
        <button className='bg-red-500 rounded-3xl p-3 text-white w-40 mt-7'>Check Now</button>
      </div>
      <div>
        <img src={execlusive} alt=''/>
      </div>
    </div>
  )
}

export default Offers
