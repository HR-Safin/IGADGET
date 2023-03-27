import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './Componet/Home';
import AboutP from './Componet/Routes_/AboutP';
import ContactP from './Componet/Routes_/ContactP';
import ProductP from './Componet/Routes_/ProductP';
import SingleP from './Componet/Routes_/SingleP';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<App />} />
    
    <Route path='/about' element={<AboutP />} />
    <Route path='/product' element={<ProductP />} />
    <Route path='/product/:productId' element={<SingleP />} />
    <Route path='/contact' element={<ContactP />} />
    

  </Routes>
    
  </BrowserRouter>
   
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
