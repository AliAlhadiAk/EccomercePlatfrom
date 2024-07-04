import React from 'react'
import Hero from './Components/Hero'
import PopularWomen from './PopularWomen'
import Offers from './Offers'
import NewCollections from './NewCollections'
import GetExeclusiveOffersEmail from './GetExeclusiveOffersEmail'

const Shop = () => {
  return (
    <div className='h-[100vh]'>
      <Hero/>
      <PopularWomen/>
      <Offers/>
      <NewCollections/>
      <GetExeclusiveOffersEmail/>
    </div>
  )
}

export default Shop
