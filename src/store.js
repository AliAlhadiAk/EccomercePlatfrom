import allProducts from './Components/Pages/assets/all_product'
import { configureStore } from '@reduxjs/toolkit';
import productReducer from './ProductsSlice'

const store = configureStore({
    reducer:{
      products:productReducer
    }
})
export default store;