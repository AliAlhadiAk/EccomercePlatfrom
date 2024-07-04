import { createSlice } from "@reduxjs/toolkit";
import products from './Components/Pages/assets/all_product'

const initialState = {
    products:products,
    men:products.filter((item)=>item.category == 'men'),
    women:products.filter((item)=>item.category == 'women'),
    kids:products.filter((item)=>item.category == 'kid'),
}

const ProductsSlice = createSlice({
    name:"products",
    initialState,
    reducers:{
        GetWomenProducts: (state) => {
           state.women = state.products.filter((item)=>item.category === 'women')
        },
        GetMenProducts: (state) => {
           state.men = state.products.filter((item)=>item.category === 'men')
        },
        GetKidsProducts: (state) => {
           state.kids =  state.products.filter((item)=>item.category === 'kid')
        },
    }
})
export default ProductsSlice.reducer
export const {GetKidsProducts,GetMenProducts,GetWomenProducts} = ProductsSlice.actions