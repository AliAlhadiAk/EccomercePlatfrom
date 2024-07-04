import React from 'react'
import menBanner from './Components/Pages/assets/banner_kids.png'
import { useDispatch } from 'react-redux';
import { GetKidsProducts } from './ProductsSlice';
import { useSelector } from 'react-redux';
import GetExclusiveOffersEmail from './GetExeclusiveOffersEmail';

const Kids = () => {
  const dispatch = useDispatch();
  dispatch(GetKidsProducts);
  const menProducts  = useSelector(state=>state.products.kids);
  console.log(menProducts)
  return (
    <div className='flex flex-col '>
      <div>
      <img src={menBanner} className='w-[80vw] mt-8 mx-auto mb-6'/>
      <div>
        <h1 className='ml-18 px-12 mb-6'><span className='font-bold'>Shopping 1-12</span> out of 36products</h1>
      </div>
      <div className='grid lg:grid-cols-4 gap-4 w-[85vw] mx-auto md:grid-cols-2 sm:grid-cols-2  '>
        {menProducts.map((item)=> (
         
          <>
          <div className='hover:scale-105 transition-transform duration-300 ease-in-out animate men-products' key={item.id}>
            <img src={item.image}
            loading='lazy' alt='' className='rounded-xl'/>
            <p className='font-semibold w-[20vw]'>{item.name}</p>
            <p className='font-bold'>{item.new_price}$</p>

          </div>
          </>
        ))}
      </div>
      </div>
      <GetExclusiveOffersEmail/>
    </div>
  )
}

export default Kids