import React from 'react';
import './index.css';
import Navbar from './Components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Shop from './Shop';
import Men from './Men';
import Women from './Women';
import Kids from './Kids';
import Products from './Components/Products';
import ProductsDetails from './ProductsDetails';
import GetExclusiveOffersEmail from './GetExeclusiveOffersEmail.jsx';
import Login from './Components/Login.jsx';
import SignUp from './signUp.jsx';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';



const App = () => {
  const ali = useSelector(state=>state.products.products);
  console.log(ali);
  return (
    <div className='height-[100vh] overflow-y-auto'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/men' element={<Men />} />
          <Route path='/women' element={<Women />} />
          <Route path='/kids' element={<Kids />} />
          <Route path='/product' element={<Products />} />
          <Route path='/product/:productId' element={<ProductsDetails />} />
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          
        

        </Routes>
       
      </BrowserRouter>

    </div>
  );
};

export default App;
